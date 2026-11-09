# Merging and updating production

This release adds the admin editor, new pages (about, connect, events, games, prayer, sermons), the prayer wall, and a Supabase backend. Production needs database changes and environment variables as well as the code, so follow the order below.

## 1. Merge the code

The work is on branch `feature/games`, which already contains `feature/admin-and-pages` (the admin editor and new pages) plus the Bible Quiz and Bible Quote games. Merge `feature/games` once; you do not need to merge the other branch separately.

```bash
git checkout main
git pull origin main
git merge --no-ff feature/games
npm install
npm run build        # must pass before you push
git push origin main
```

Or push the branch and open a pull request on GitHub (`Greatseun02/the-witness-church`), then merge it there. Vercel builds a preview for the branch, so check it before merging.

## 2. Prepare Supabase (before the new code goes live)

The site needs these in place or `/admin` and the prayer wall will not work. Full detail is in `supabase/SETUP.md`.

1. In the Supabase SQL Editor run, in this order:
   1. `supabase/schema.sql` (first time only)
   2. `supabase/migration-002-draft.sql`
   3. `supabase/migration-003-prayers.sql`
   4. `supabase/migration-004-games.sql` (game tables)
   5. `supabase/migration-005-games-seed.sql` (300 quiz questions, 22 verses; skipped if already seeded)
2. Authentication > Users > Add user. Use the admin email from `schema.sql`, tick **Auto Confirm User**.
3. Authentication > Sign In / Providers > turn off "Allow new users to sign up".

If the database already exists, only run the migrations you have not run before.

## 3. Set environment variables in Vercel

Project > Settings > Environment Variables (Production, and Preview if you want previews to work). Names come from `.env.example`.

Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (the `anon` key)
- `SUPABASE_SERVICE_ROLE_KEY` (Supabase > Project Settings > API > `service_role`). Used only by the games, on the server, to keep answers private and record scores. Never give it a `NEXT_PUBLIC_` prefix and never paste it anywhere public. Without it the game pages show "not switched on yet".

Optional:
- `YOUTUBE_API_KEY` for the full sermon archive and live detection
- `GOOGLE_SHEET_WEBHOOK_URL` and `GOOGLE_SHEET_SECRET` for pastor prayer requests
- `META_IG_USER_ID`, `META_ACCESS_TOKEN`, `META_PAGE_ID`, `META_PAGE_TOKEN` for Instagram and Facebook posts

Changing variables does not affect a build that already ran, so redeploy after setting them.

## 4. Deploy and verify

Pushing to `main` triggers the Vercel deploy. If it was already built, use Deployments > Redeploy.

Then check:
- The home page and the new pages load.
- `/admin` redirects to the login, and you can sign in.
- Change something in the editor, publish, and see it on the live site.
- Submit a prayer request, approve it at `/admin/prayers`, and see it on the wall.
- Play a round at `/games/bible-quiz` and `/games/bible-quote`, and check your score on the leaderboard.
- Create a room, open its link in a private window, play it and see the room board.
- At `/admin/games` add a question, hide it again, and try an import.

## 5. Rolling back

Vercel > Deployments > pick the previous good deployment > Promote to Production. This restores the old code instantly. Database migrations are not undone by this.

## Notes

- Image files moved from `src/assets/hero` to `public/hero`. Nothing else needs moving.
- Do not commit `.env.local`. `.env*` is git-ignored except `.env.example`.
- Sections on the homepage can be shown or hidden in the editor, but their order is fixed.
- Games: scores are computed on the server. Room leaderboards hide 2 hours after the room is created. Hiding a question in `/admin/games` keeps past scores intact; nothing is deleted.
- Rounds and rooms are rate limited per visitor (stored as a salted hash, never the raw IP).

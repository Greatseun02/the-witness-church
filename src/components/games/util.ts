import type { GameId } from "@/src/lib/games/types";
import { GAMES } from "@/src/lib/games/types";

export function fmtTime(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export const gamePath = (game: GameId) => `/games/${GAMES[game].slug}`;
export const roomPath = (game: GameId, code: string) => `${gamePath(game)}/room/${code}`;

/* Browser storage, wrapped because it can be blocked or full. */

const NAME_KEY = "wc-games-name";
const RUNS_KEY = "wc-games-runs";

export function loadName(): string {
  try {
    return localStorage.getItem(NAME_KEY) ?? "";
  } catch {
    return "";
  }
}

export function saveName(name: string) {
  try {
    localStorage.setItem(NAME_KEY, name);
  } catch {
    /* ignore */
  }
}

export function loadRunIds(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(RUNS_KEY) ?? "[]");
    return Array.isArray(raw) ? raw.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

export function rememberRun(id: string) {
  try {
    const ids = [id, ...loadRunIds().filter((x) => x !== id)].slice(0, 50);
    localStorage.setItem(RUNS_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

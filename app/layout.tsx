import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Witness Church — Lagos, Nigeria",
    template: "%s | The Witness Church",
  },
  description:
    "A place of authentic worship, transformative teaching, and a community that walks with you through every season of life. Join us at The Witness Church, Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

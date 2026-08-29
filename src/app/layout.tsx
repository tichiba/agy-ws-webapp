import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antigravity ワークショップ Web アプリ",
  description: "Google Antigravity ハンズオン用ベースアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}

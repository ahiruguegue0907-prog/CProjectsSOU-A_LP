import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOU-A \u2014 親子の時間をひらく、やさしいAI体験",
  description:
    "SOU-Aは、AIに詳しくないお母さんでも、子どもと一緒に音楽・お話・イラストを楽しめるようになる親子AI体験の入り口です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

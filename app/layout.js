import "./globals.css";

export const metadata = {
  // 予約変数, <head> で記述する内容は metadeta に記述
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

// layout は複数のコンポーネントの wrapper になることができる
export default function RootLayout({ children }) {
  // children: 現在アクティブなページのコンテンツ
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

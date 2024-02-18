// page.js は Next.js の予約ファイル名 index.html 的な
// Nextjs 側の処理によってサーバー上で実行される

export default function Home() {
  // console.log('Executing'); // reload page または rebuild するたびターミナルに出力される
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
}

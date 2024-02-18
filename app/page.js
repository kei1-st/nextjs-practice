// page.js は Next.js の予約ファイル名 index.html 的な
// Nextjs 側の処理によってサーバー上で実行される

import Link from 'next/link';

import Header from '@/components/header'; // @ はフォルダのルートパスを表す

export default function Home() {
  // console.log('Executing'); // reload page または rebuild するたびターミナルに出力される
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/*<p><a href="/about">About Us</a></p> */} {/* anchor タグを使うとサーバーアクセスが発生し SPA のメリットが失われる */}
      <p><Link href="/about">About Us</Link></p>  {/* Link を使うと新しいページのロードを回避できる */}
    </main>
  );
}


# 予約ページ
- page.js -> Define page content

- layout.js -> Define wrapper arond pages

- not-found.js -> Define "Not Found" fallback page

- error.js -> Define "Error" fallback page

# ページの追加
- 手打ち URL のアクセスはサーバーサイドのJSを呼び出す
- リンク経由のアクセスはクライアントサイドのみで完結する
  - 最初のアクセス時はサーバーサイドレンダリングが必要
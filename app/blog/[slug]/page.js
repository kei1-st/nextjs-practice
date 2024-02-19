export default function BlogPostPage({params}) {    // params は nextjs の仕様
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>  {/* ページに対して一意 */}
    </main>
  );
}

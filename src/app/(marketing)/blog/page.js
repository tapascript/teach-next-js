import Link from "next/link";

const BlogPage = () => {
  return (
    <>
      <h2 className="text-3xl p-4">Blog Page</h2>
      <ul>
        <li className="pb-1">
          <Link
            className="text-xl underline"
            href="/blog/how-to-eat">How to Eat?</Link>
        </li>
        <li className="pb-1">
          <Link 
            className="text-xl underline"
            href="/blog/how-to-sleep">How to Sleep?</Link>
        </li>
        <li className="pb-1">
          <Link
            className="text-xl underline" 
            href="/blog/how-to-learn">How to Learn?</Link>
        </li>
      </ul>
    </>
  )
}

export default BlogPage;
const BlogPost = ({params: {slug}}) => {
  return(
    <p className="text-2xl">
      Showing the blog post for the 
      slug <strong>{slug}</strong>
    </p>
  )
}

export default BlogPost;
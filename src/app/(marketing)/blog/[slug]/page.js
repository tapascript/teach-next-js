const getContent = async (slug) => {
  const data = {
    'how-to-eat': 'Use your hand to pick up the food and put inside your mouth.',
    'how-to-sleep': 'Stop watching FB at least 30 mins before the bed time.',
    'how-to-learn': 'Check out LWS and tapaScript videos.',
  }

  return data;
}
const BlogPost = async ({params: {slug}}) => {
  const data = await getContent();

  return(
    <>
      <p className="text-3xl pb-4">
        Showing the blog post for the 
        slug <strong>{slug}</strong>
      </p>
      <p className="bg-gray-100 p-2 rounded-md text-xl">
        {data[`${slug}`]}
      </p>
    </>
    
  )
}

export default BlogPost;
const StorePage = ({params: {name}}) => {
  console.log(name);
  return(
    <p className="text-2xl">
      Showing the store page for the 
      name <strong>{name}</strong>
    </p>
  )
}

export default StorePage;
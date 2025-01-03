const StoreLocator = async props => {
  const params = await props.params;

  const {
    name
  } = params;

  console.log(name);
  const displayParams = name.join('/');
  return(
    <p className="text-2xl">
      Showing the store page for the 
      store param path: <strong>{displayParams}</strong>
    </p>
  )
}

export default StoreLocator;
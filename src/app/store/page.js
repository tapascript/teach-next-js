import Link from "next/link";

const StorePage = () => {
  return(
    <>
      <h2 className="text-3xl p-4">Store Page</h2>
      <ul>
        <li className="pb-1">
          <Link
            className="text-xl underline"
            href="/store/cloths">Get Cloths</Link>
        </li>
        <li className="pb-1">
          <Link 
            className="text-xl underline"
            href="/store/cloths/shirts">Get Shirts</Link>
        </li>
        <li className="pb-1">
          <Link
            className="text-xl underline" 
            href="/store/car/toyota/innova">Get Innova Car</Link>
        </li>
      </ul>
    </>
  )
}

export default StorePage;
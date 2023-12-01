import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
      <h2 className='text-3xl pb-2'>Not Found</h2>
      <p className='text-xl pb-4'>Could not find requested page/resource</p>
      <Link
        className='bg-purple-500 text-white p-2 text-md rounded-lg' 
        href="/">Return Home</Link>
    </>
  )
}
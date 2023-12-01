'use client' 
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <>
      <h2 className='text-3xl p-2'>Brum!!! Something went wrong.</h2>
      <button
        className='bg-purple-500 text-white text-md rounded-lg p-1 cursor-pointer'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </>
  )
}
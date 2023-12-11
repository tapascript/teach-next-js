import Link from "next/link"
export default async function Page() {
  return(
    <div>
      <h2 className="text-2xl pb-8">Growth</h2>
      <div className="flex flex-col justify-center items-center text-center">
      <Link 
        href="/dashboard/metrics"
        className="bg-purple-500 text-white p-1 rounded-md text-lg">
          See Metrics
      </Link>
      </div>
    </div>
  )
}
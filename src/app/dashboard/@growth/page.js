import Link from "next/link"
export default async function Page() {
  return(
    <div className="h-42">
      <h2 className="text-2xl pb-4">Growth - last 28 days</h2>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-3xl pb-4">89%</p>
        <Link 
          href="/dashboard/metrics"
          className="bg-purple-500 text-white p-1 rounded-md text-lg">
            See Metrics
        </Link>
      </div>
    </div>
  )
}
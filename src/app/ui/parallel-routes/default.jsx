export default function Default({slot}) {
  return (
    <div className="bg-gray-100 p-2 border border-gray-300 rounded-md">
      <ul className="text-lg">
        The Default {slot} page because:
        <li className="text-sm list-inside list-decimal">
          The route doesn't exists in the "@{slot}" slot.
        </li>
        <li className="text-sm list-inside list-decimal">
          There is a "default.js" file exists in the "@{slot}" slot.
        </li>
        <li className="text-sm list-inside list-decimal">
          You have releaded this route.
        </li>
      </ul>
    </div>
  )
}
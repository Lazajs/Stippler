export default function Result ({amount, label}: {amount: number, label: string}) {
  return (
    <div className="relative p-2">
      <span className="w-1/2">
        <p className="font-bold text-lg">{label}</p>
        <small className="font-normal text-sm text-cyan-50 opacity-75">/ person</small>
      </span>
      <p className="absolute right-0 top-2 inline-block text-3xl font-bold text-emerald-400">${amount}</p>
    </div>
)
}
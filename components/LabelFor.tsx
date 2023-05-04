export default function LabelFor ({name}: {name: string}) {
  return (
    <label className="font-bold text-cyan-800" htmlFor={name}>{name}</label>
  )
}
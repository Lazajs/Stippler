import LabelFor from "./LabelFor";
import Image from "next/image";
import type { Dispatch, SetStateAction, ChangeEvent } from "react";

interface Props {
  name: string;
  setValue: Dispatch<SetStateAction<string>>
  icon: string
  placeholder: string
  value: string
}

export default function NumberInput ({name, setValue, icon, placeholder, value}: Props) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <LabelFor name={name} />
      <span className="relative block">
        <Image src={icon} alt={name} className="absolute left-2 bottom-4" />
        <input placeholder={placeholder} type="number" name={name} value={value}  onChange={handleChange} className={`block bg-gray-100 h-12 p-4 w-full rounded-sm text-cyan-950 font-bold text-right text-2xl outline-none`} />
      </span>
    </>
  )
}
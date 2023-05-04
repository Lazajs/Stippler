import { useState } from "react"

export default function TipAmount ({amount, onClick, isActive}: {amount:string, onClick: (value: string)=>void, isActive: boolean}) {
  
  return (
    <span onClick={()=> onClick(amount)} className={`${isActive ? 'bg-cyan-700' : 'bg-cyan-900'} text-white hover:bg-cyan-800 text-center h-10 leading-9 w-40 lg:w-32 text-2xl rounded-lg select-none cursor-pointer`}>{amount}%</span>
  )
}
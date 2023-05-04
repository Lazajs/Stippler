'use client'
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import { useState } from 'react'
import Result from '@/components/Result'
import type { TotalAmounts } from '@/types'
import DataSection from '@/components/DataSection'

export default function Home() {
  const [finalAmount, setFinalAmount] = useState<TotalAmounts>({tipAmount: 0, totalAmount:0})

  const clear = () => {
    setFinalAmount({tipAmount: 0, totalAmount:0})
  }

    return (
    <main className="flex flex-col items-center justify-center min-w-fit mt-10 lg:mt-52">
      <Image src={logo} alt='logo' className='mb-10' />

      <section className='bg-white rounded-3xl flex min-w-fit flex-col gap-5 p-6 lg:flex-row'>
        <DataSection setAmount={setFinalAmount} amount={finalAmount} />

        <aside className='bg-cyan-900 text-white rounded-xl p-5 w-96 relative'>
          <Result label='Tip Amount' amount={finalAmount?.tipAmount || 0} />
          <Result label='Total' amount={finalAmount?.totalAmount || 0} />
          <button onClick={clear} className='bg-emerald-400 hover:bg-emerald-500 transition-all text-cyan-900 rounded-sm w-full h-10 cursor-pointer lg:absolute lg:w-11/12 lg:bottom-4 lg:left-4 text-2xl font-bold mt-4'>RESET</button>
        </aside>
      </section>

    </main>
  )
}

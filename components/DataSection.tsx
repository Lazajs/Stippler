import NumberInput from '@/components/NumberInput'
import dollarSign from '../public/images/icon-dollar.svg'
import personSign from '../public/images/icon-person.svg'
import Tips from '@/components/Tips'
import { useEffect, useState, memo } from 'react'
import type { TotalAmounts } from '@/types'

function DataSection ({setAmount, amount}: {setAmount: (value: TotalAmounts)=>void, amount: TotalAmounts}) {
  const [bill, setBill] = useState<string>('')
  const [tip, setTip] = useState<string>('')
  const [people, setPeople] = useState<string>('')

  useEffect(()=> {
    if (amount.totalAmount === 0) { //clean values when reset
      setBill('')
      setTip('')
      setPeople('')
    }
  }, [amount])

  useEffect(()=> {
    const billValue = parseFloat(bill)
    const tipValue = parseFloat(tip)
    const peopleValue = parseFloat(people)

    if (billValue) {
      const tipAmount = billValue * tipValue / 100
      const totalAmount = billValue + (tipAmount || 0)
      const amountPerPerson = totalAmount / (peopleValue || 1)
      const decimalsNeeded = amountPerPerson < 0.01 ? 8 : 2

      setAmount({
        tipAmount: parseFloat(tipAmount.toFixed(2)),
        totalAmount: parseFloat(amountPerPerson.toFixed(decimalsNeeded)),
      })
    } else setAmount({tipAmount: 0, totalAmount: 0})
  }, [bill, tip, people, setAmount])

  return (
    <aside className='flex-col flex gap-3'>
      <NumberInput name='Bill' setValue={setBill} value={bill} placeholder='0' icon={dollarSign}/>
      <Tips setTip={setTip} />
      <NumberInput name='Number of People' placeholder='1' setValue={setPeople} value={people} icon={personSign}/>
    </aside>
  )
}

export default memo(DataSection)
import LabelFor from "./LabelFor"
import TipAmount from "./TipAmount"
import { useState, memo, Dispatch, SetStateAction, ChangeEvent } from "react"

function Tips ({setTip}: {setTip: Dispatch<SetStateAction<string>>}) {
  const [selected, setSelected] = useState<string | undefined>()
  const predefinedAmounts = ['5', '10', '15', '25', '50']
  
  const handleDefined = (value: string) => {
    if (value === selected) {
      setTip('0')
      setSelected('0')
    } else {
      setSelected(value)
      setTip(value)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
    setTip(e.target.value)
  }

  return (
    <section>
      <LabelFor name='Select Tip %'/>
      <div className='grid grid-rows-3 lg:grid-rows-2 grid-cols-2 lg:grid-cols-3 gap-1 place-content-center mt-2'>
        {
          predefinedAmounts.map((amount)=> {
            return <TipAmount key={amount} amount={amount} onClick={handleDefined} isActive={selected === amount} />
          })
        }
        <input onFocus={()=>setSelected('')} onChange={handleChange} placeholder='Custom %' type="number" name='select' className='w-40 h-10 p-2 lg:pr-10 text-cyan-950 font-bold text-right text-2xl rounded-lg outline-cyan-900' />
      </div>
    </section>
  )
} 

export default memo(Tips)
import { useReducer, useState } from 'react'
import { BinValid } from '../Components/BinGen/BinValidator'
import { MonthValid } from '../Components/BinGen/MonthValid'

export default function CCGEN() {
  const [month, setMonth] = useState(
    ['01','02','03','04','05','06','07','08','09','10','11','12']
  )
  const [year, setYear] = useState(
    ['2023','2024','2025','2026','2027','2028','2029','2030','2031']
  )
  const [date, setDate] = useState(false)
  const [cvv, setCvv] = useState(false)
  const [results, setResults] = useState([])

  const [form, setForm] = useState({
    bin: 0,
    date: false,
    month: month[0],
    year: year[0],
    cvvCheck: false,
    cvv,
    quantity: 0,
  })

  const handleInput = e => {
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = e => {
    e.preventDefault()

    // jadi form.quantity akan memntukan berapa jumlah yg mau di generate
    for (let i = 0; i < form.quantity; i++){
      if(!date && cvv) {
        setResults(...results, BinValid(form.bin), form.cvv)
        console.log(results, 'date no, cvv yes')
      }
      if(date && !cvv) {
        setResults(...results, [BinValid(form.bin), form.month, form.year])
        console.log(results, 'date yes, cvv no')
      }
      if(!date && !cvv) {
        setResults(BinValid(form.bin))
        console.log(results, 'date no, cvv no')
      }
    }

  }


  return <>
    <section className='section'>
      <h1 className='heading-judul'>Bin Generator</h1>
      <form>
      <div className='grid gap-2'>
        <fieldset className='field'>
          <legend className='legend'>Bin</legend>
          <input  className='input' type="number" onChange={handleInput} name="bin" placeholder='454393' />
        </fieldset>

        <div className='flex gap-3 font-pop'>
          <div className='flex gap-5 items-center'>
            <input onClick={() => setDate(!date)} className='check' type="checkbox" name="date" />
            <label className='label' htmlFor="date">DATE</label>
          </div>

          <fieldset className='field'>
             <legend className='legend'>MONTH</legend>
             <select className='select'  onChange={handleInput} name="month">
               {month.map( month => {
                 return <option key={month} value={month}>{month}</option>
               })}
             </select>
          </fieldset>

          <fieldset className='field'>
            <legend className='legend'>Year</legend>
             <select className='select'  onChange={handleInput} name="year">
               {year.map( year => {
                 return <option key={year} value={year}>{year}</option>
               })}
            </select>
          </fieldset>
        </div>

        <div className='flex gap-5'>
          <div className='flex gap-5 items-center'>
            <input onClick={() => setCvv(!cvv)} className='check' type="checkbox" name="cvvCheck" />
            <label className='label' htmlFor="cvvCheck">CVV</label>
          </div>

          <fieldset className='field'>
            <legend className='legend'>CVV</legend>
            <input  onChange={handleInput} className='input' type="number" name="cvv" placeholder='Leave blank to random' />
          </fieldset>
            
          <fieldset className='field'>
            <legend className='legend'>Quantity</legend>
            <input required onChange={handleInput} className='input' type="number" name="quantity" placeholder='10' />
          </fieldset>
        </div>

        <fieldset className='field'>
          <legend className='legend'>Pipe</legend>
          <select onChange={handleInput} className='select' name="type">
            <option value="pipe">PIPE</option>
            <option value="json">JSON</option>
            <option value="csv">CSV</option>
          </select>
        </fieldset>
        
        <button onClick={handleClick} className='btn' type="submit">Generate</button>
      </div>
      </form>

      <textarea className='textarea' value={results}></textarea>
    </section>
  </>
}

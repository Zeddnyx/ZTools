import { Link } from 'react-router-dom'
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

  const [results, setResults] = useState({})
  const [form, setForm] = useState({
    bin: 0,
    date: false,
    month: '',
    year: '',
    cvvCheck: false,
    cvv: 0,
    quantity: 10
  })

  const handleInput = e => {
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value
    }))
  }


  const handleClick = e => {
    e.preventDefault()
    // console.log(BinValid(form.bin))
     console.log(MonthValid(form.date, form.month, form.year))
  }

  return <>
    <div className='my-20'>
      <Link to='/'>Back</Link>
    </div>
    <section className='max-w-sm mx-auto'>
      <form>
      <div className='grid gap-2'>
        <fieldset className='field'>
          <legend className='legend'>Bin</legend>
          <input  className='input' type="number" onChange={handleInput} name="bin" placeholder='454393' />
        </fieldset>

        <div className='flex gap-3 font-pop'>
          <div className='flex gap-5 items-center'>
            <input onClick={handleInput} className='check' type="checkbox" name="date" />
            <label htmlFor="date">Date</label>
          </div>

          <fieldset className='field'>
             <legend className='legend'>MONTH</legend>
             <select className='select'  onChange={handleInput} name="month">
               <option value="random">Random</option>
               {month.map( month => {
                 return <option key={month} value={month}>{month}</option>
               })}
             </select>
          </fieldset>

          <fieldset className='field'>
            <legend className='legend'>Year</legend>
             <select className='select'  onChange={handleInput} name="year">
               <option value="random">Random</option>
               {year.map( year => {
                 return <option key={year} value={year}>{year}</option>
               })}
            </select>
          </fieldset>
        </div>

        
        <div className='flex gap-5'>
          <div className='flex gap-5 items-center'>
            <input onClick={handleInput} className='check' type="checkbox" name="cvvCheck" />
            <label htmlFor="date">Cvv</label>
          </div>

          <fieldset className='field'>
            <legend className='legend'>CVV</legend>
            <input  onChange={handleInput} className='input' type="number" name="cvv" placeholder='Leave blank to random' />
          </fieldset>
            
          <fieldset className='field'>
            <legend className='legend'>Quantity</legend>
            <input  onChange={handleInput} className='input' type="number" name="quantity" placeholder='10' />
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
        
        <button onClick={handleClick} className='btn-gen' type="submit">Generate</button>
      </div>
      </form>

      <div className='textarea'>
      </div>
    </section>
  </>
}

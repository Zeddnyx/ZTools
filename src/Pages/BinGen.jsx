import { useEffect, useState } from 'react'
import { BinValid } from '../Components/BinGen/BinValidator'
import { MonthRandom, YearRandom } from '../Components/BinGen/DateValid'
import { Cvv } from '../Components/BinGen/CvvRandom'

export default function CCGEN() {
  const [month, setMonth] = useState(
    ['01','02','03','04','05','06','07','08','09','10','11','12']
  )
  const [year, setYear] = useState(
    ['2023','2024','2025','2026','2027','2028','2029','2030','2031']
  )
  const [dateStats, setDateStats] = useState(false)
  const [cvvStats, setCvvStats] = useState(false)
  const [results, setResults] = useState([])
  const [hasil, setHasil] = useState([])
  const [form, setForm] = useState({
    bin: '',
    date: dateStats,
    month: 'random',
    year: 'random',
    cvvCheck: cvvStats,
    cvv: 0,
    quantity: 10,
  })

  const handleInput = e => {
    // when input field is change 
    // every change will be store to state form
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = e => {
    e.preventDefault()
    let i = 0
    if(!dateStats && cvvStats && form.cvv !== 0) {
      while ( i < form.quantity ){
        // idk how to explaine but its work!
        setResults(results => [...results, `${BinValid(form.bin)}|${form.cvv}`])
        i++
      }
    }
    // if cvv true and leave blank will generete random cvv
    if(!dateStats && cvvStats && form.cvv === 0) {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${Cvv()}`])
        i++
      }
    }
    // date true,cvv true, cvv = blank dan month = random, year not random
    if(dateStats && cvvStats && form.cvv === 0 && form.month === 'random' & form.year !== 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${MonthRandom(month)}|${form.year}|${Cvv()}`])
        i++
      }
    }
    // date true, cvv true, cvv = blank, month not random, year random
    if(dateStats && cvvStats && form.cvv === 0 && form.month !== 'random' & form.year === 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${form.month}|${YearRandom(year)}|${Cvv()}`])
        i++
      }
    }
    // date true, cvv true, cvv = blank, month not random, year not random
    if(dateStats && cvvStats && form.cvv === 0 && form.month !== 'random' & form.year !== 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${form.month}|${form.year}|${Cvv()}`])
        i++
      }
    }
    // date true, cvv true, cvv = blank, month random, year random
    if(dateStats && cvvStats && form.cvv === 0 && form.month === 'random' & form.year === 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${MonthRandom(month)}|${YearRandom(year)}|${Cvv()}`])
        i++
      }
    }
    // date true, cvv true, cvv not random, month random, year random
    if(dateStats && cvvStats && form.cvv !== 0 && form.month === 'random' & form.year === 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${MonthRandom(month)}|${YearRandom(year)}|${form.cvv}`])
        i++
      }
    }
    if(dateStats && cvvStats && form.cvv !== 0 && form.month !== 'random' & form.year !== 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${form.month}|${form.year}|${form.cvv}`])
        i++
      }
    }
    // date true cvv true, cvv not random, month not random, year random
    if(dateStats && cvvStats && form.cvv !== 0 && form.month !== 'random' & form.year === 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${form.month}|${YearRandom(year)}|${form.cvv}`])
        i++
      }
    }
    // date true, cvv true, cvv not random, month random, year not random
    if(dateStats && cvvStats && form.cvv !== 0 && form.month === 'random' & form.year !== 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${MonthRandom(month)}|${form.year}|${form.cvv}`])
        i++
      }
    }

    // date true, cvv  false, month random, year not random
    if(dateStats && !cvvStats && form.month === 'random' && form.year !== 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${MonthRandom(month)}|${form.year}`])
        i++
      }
    }
    // date true, cvv false, month not random, year random
    if(dateStats && !cvvStats && form.month !== 'random' && form.year === 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${form.month}|${YearRandom(year)}`])
        i++
      }
    }
    // date true, cvv false, month random, year random
    if(dateStats && !cvvStats && form.month === 'random' && form.year === 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${MonthRandom(month)}|${YearRandom(year)}`])
        i++
      }
    }
    // date true, cvv false, month not random, year not random
    if(dateStats && !cvvStats && form.year !== 'random' && form.month !== 'random') {
      while ( i < form.quantity ){
        setResults(results => [...results, `${BinValid(form.bin)}|${form.month}|${form.year}`])
        i++
      }
    }
    if(!dateStats && !cvvStats) {
      while ( i < form.quantity ){
       setResults(results => [...results, BinValid(form.bin)])
       i++
      }
    }
  }

  return <>
    <section className='section'>
      <h1 className='heading-judul'>Generate CC</h1>
       <p className='mb-5 text-center font-sans font-medium text-mainText'>Generate random test credit card and card numbers for testing, validation and verification purposes.</p>
      <form className='grid gap-2'>
        <fieldset className='field'>
          <legend className='legend'>BIN</legend>
          <input  className='input' required type="number" onChange={handleInput} name="bin" placeholder='454393' />
        </fieldset>

        <div className='flex gap-3 font-pop'>
          <div className='flex gap-5 items-center'>
            <input onClick={() => setDateStats(!dateStats)} className='check' type="checkbox" name="date" />
            <label className='label' htmlFor="date">DATE</label>
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
            <input onClick={() => setCvvStats(!cvvStats)} className='check' type="checkbox" name="cvvCheck" />
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

        <button onClick={handleClick} className='btn' type="submit">Generate</button>
      </form>

      <fieldset className='field mt-14'>
        <legend className='legend'>Results</legend>
        <div className='overflow-scroll h-28 text-xs'>
          {results.map(list=> {
            return <p key={list}>{list}</p>
          })}
        </div>
      </fieldset>
    </section>
  </>
}

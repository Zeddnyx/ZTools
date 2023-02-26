import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'

export default function CCGEN() {
  const [month, setMonth] = useState(
    ['random','01','02','03','04','05','06','07','08','09','10','11','12']
  )
  const [year, setYear] = useState(
    ['random','2023','2024','2025','2026','2027','2028','2029','2030','2031']
  )

  const [results, setResults] = useState({})

  const initialState = {
    bin: 0,
    date: false,
    month: 'random',
    year: 'random',
    cvv: 0,
    cvvCheck: false,
    quantity: 0,
    type: 'pipe'
  }
  const postRedcuer = (state, action) => {
    switch (action.type) {
      case 'INPUT':
        return {
          ...state, [action.payload.name]: action.payload.value
        }
      case 'DATE':
        return {
          ...state, date: !state.date
        }
      case 'CVV':
        return {
          ...state, cvvCheck: !state.cvvCheck
        }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(postRedcuer, initialState)

  const handleResults = e => {
    dispatch({ type: 'INPUT', payload: {name: e.target.name, value: e.target.value} })
    setResults(state)
    console.log(results)
  }

  return <>
    <div className='my-20'>
      <Link to='/'>Back</Link>
    </div>
    <section className='max-w-sm mx-auto'>
      <form>
      <div className='grid gap-5'>
        <fieldset className='field'>
          <legend className='legend'>Bin</legend>
          <input  className='input' type="number" onChange={handleResults} name="bin" placeholder='454393' />
        </fieldset>

        <div className='flex gap-3 font-pop'>
          <div className='flex gap-5 items-center'>
            <input onClick={() => dispatch({ type: 'CHECK' })} className='check' type="checkbox" name="date" />
            <label htmlFor="date">Date</label>
          </div>

          <fieldset className='field'>
             <legend className='legend'>MONTH</legend>
             <select className='select'  onChange={handleResults} name="month">
               {month.map( month => {
                 return <option key={month} value={month}>{month}</option>
               })}
             </select>
          </fieldset>

          <fieldset className='field'>
            <legend className='legend'>Year</legend>
             <select className='select'  onChange={handleResults} name="year">
               {year.map( year => {
                 return <option key={year} value={year}>{year}</option>
               })}
            </select>
          </fieldset>
        </div>

        
        <div className='flex gap-5'>
          <div className='flex gap-5 items-center'>
            <input onClick={() => dispatch({ type: 'CVV' })} className='check' type="checkbox" name="cvvCheck" />
            <label htmlFor="date">Cvv</label>
          </div>

          <fieldset className='field'>
            <legend className='legend'>CVV</legend>
            <input  onChange={handleResults} className='input' type="number" name="cvv" placeholder='Leave blank to random' />
          </fieldset>
            
          <fieldset className='field'>
            <legend className='legend'>Quantity</legend>
            <input  onChange={handleResults} className='input' type="number" name="quantity" placeholder='10' />
          </fieldset>
        </div>

        <fieldset className='field'>
          <legend className='legend'>Pipe</legend>
          <select onChange={handleResults} className='select' name="type">
            <option value="pipe">PIPE</option>
            <option value="json">JSON</option>
            <option value="csv">CSV</option>
          </select>
        </fieldset>
        
        <button className='btn-gen' type="submit">Generate</button>
      </div>
      </form>

      <div className='textarea'>
      </div>
    </section>
  </>
}

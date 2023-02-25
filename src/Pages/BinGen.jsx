import { Link } from 'react-router-dom'

export default function CCGEN() {

  const handleSubmit= e => {
    e.preventDefault()
  }
  return <> 
    <div className='my-20'>
      <Link to='/'>Back</Link>
    </div>
    <section className='max-w-sm mx-auto'>
      <form onSubmit={handleSubmit}>
      <div className='grid gap-5'>
        <fieldset className='field'>
          <legend className='px-3'>Bin</legend>
          <input className='input' type="number" name="bin" placeholder='454393' />
        </fieldset>

        <div className='flex gap-5'>
          <div className='flex gap-5 items-center'>
            <input className='check' type="checkbox" name="date" />
            <label htmlFor="date">Date</label>
          </div>

          <fieldset className='field'>
             <legend className='px-3'>MONTH</legend>
             <select className='select' name="month">
               <option value="random">Random</option>
               <option value="01">January</option>
               <option value="02">February</option>
               <option value="03">March</option>
               <option value="04">April</option>
               <option value="05">May</option>
               <option value="06">June</option>
               <option value="07">July</option>
               <option value="08">August</option>
               <option value="09">September</option>
               <option value="10">October</option>
               <option value="11">November</option>
               <option value="12">December</option>
             </select>
          </fieldset>

          <fieldset className='field'>
            <legend className='px-3'>Year</legend>
             <select className='select' name="year">
            	<option value="random">Random</option>
            	<option value="2023">2023</option>
            	<option value="2024">2024</option>
            	<option value="2025">2025</option>
            	<option value="2026">2026</option>
            	<option value="2027">2027</option>
            	<option value="2028">2028</option>
            	<option value="2029">2029</option>
            	<option value="2030">2030</option>
            	<option value="2031">2031</option>
            </select>
          </fieldset>
        </div>

        
        <div className='flex gap-5'>
          <fieldset className='field'>
            <legend className='px-3'>CVV</legend>
            <input className='input' type="number" name="bin" placeholder='Leave blank to random' />
          </fieldset>
            
          <fieldset className='field'>
            <legend className='px-3'>Quantity</legend>
            <input className='input' type="number" name="bin" placeholder='10' />
          </fieldset>
        </div>

        <fieldset className='field'>
          <legend className='px-3'>Pipe</legend>
          <select className='select' name="year">
            <option value="pipe">PIPE</option>
            <option value="json">JSON</option>
            <option value="csv">CSV</option>
          </select>
        </fieldset>
        
        <button className='btn-gen' type="submit">Generate</button>
      </div>
      </form>

      <textarea className='textarea'></textarea>
    </section>
  </>
}

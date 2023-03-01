import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Cekrek() {
  const [input, setInput] = useState({
    number: 0,
    msg: '',
  })

  const handleInput = e => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  return <>
    <section className='section'>
    <h1 className='heading-judul'>Send Whatsapp Massage Without Save Number!</h1>

    <form className='grid gap-5'>
      <fieldset className='field'>
        <legend className='legend'>Number</legend>
        <input onChange={handleInput} className='input' type="number" name="number" placeholder='626969696' />
      </fieldset>

      <fieldset className='field'>
        <legend className='legend'>Message</legend>
        <input onChange={handleInput} className='input' type="text" name="msg" placeholder='Type a letter here!' />
      </fieldset>

      <a href={`https://api.whatsapp/send/?phone=${input.number}&text=${input.msg}&type=phone_number&app_absent=0`} className='btn' >Send Message!</a>
  
    </form>
    </section>
  </>
  
}

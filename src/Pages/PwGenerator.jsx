import { useState } from 'react'

export default function PwGen(){
  const [input, setInput] = useState(0)
  const [results, setResults] = useState([])

  const symbole = '!@#$%&*()=+'
  const lower   = 'qwertyuioplkjhgfdsazxcvbnm'
  const upper   = 'QWERTYUIOPLKJHGFDSAZXCVBNM'
  const number  = '1234567890'

  const pwGen = e => {
    e.preventDefault()

    const pw = `${symbole}${lower}${upper}${number}`
    for(let i = 0; i < input; i++){
      const generate = pw[~~(Math.random() * pw.length)]
      setResults(results => [...results, generate].toString().replace(/,/g, ''))
    }
    console.log(results.toString().replace(/,/g, ''))
  }

  return <section className='section'>
    <h1 className='heading-judul mb-20'>Password Generator</h1>
    <form className='grid gap-3' onSubmit={pwGen}>
      <fieldset className='field'>
        <legend className='legend'>Length</legend>
        <input className='input' type="text" onChange={e => setInput(e.target.value)} />
      </fieldset>

      <fieldset className='field'>
        <legend className='legend'>Password</legend>
        <input className='input' type="text" readOnly value={results} />
      </fieldset>
      <button className='btn' type="submit">generate</button>
    </form>
  </section>
}

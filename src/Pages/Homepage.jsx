import { Link } from 'react-router-dom'

export default function Home() {
  return <>
    <section className='grid grid-cols-2 gap-5'>
      <Link to='tools1'>
        <button className='boxTools'>
           <h1>Fitur satu</h1>
        </button>
      </Link>

      <Link to='bingenerator'>
        <button className='boxTools'>
          <h1>Bin Generator</h1>
        </button>
      </Link>
    </section>
  </>
}

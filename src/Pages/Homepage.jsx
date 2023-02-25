import { Link } from 'react-router-dom'

export default function Home() {
  return <>
    <section className='grid grid-cols-2 gap-5'>
      <Link to='tools1'>
        <div className='boxTools'>
           <h1>Fitur satu</h1>
        </div>
      </Link>

      <Link to='bingenerator'>
        <div className='boxTools'>
          <h1>Bin Generator</h1>
        </div>
      </Link>
    </section>
  </>
}

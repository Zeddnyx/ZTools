import { Link } from 'react-router-dom'

export default function Home() {
  return <>
    <section className='grid grid-cols-2 gap-5 mt-20'>
      <Link to='check-rek'>
        <button className='boxTools'>
           <h1>Check Rekening</h1>
        </button>
      </Link>

      <Link to='bin-generator'>
        <button className='boxTools'>
          <h1>Bin Generator</h1>
        </button>
      </Link>

      <Link to='send-wa'>
        <button className='boxTools'>
          <h1>Send Message</h1>
        </button>
      </Link>
    </section>
  </>
}

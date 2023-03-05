import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineWhatsApp } from 'react-icons/ai'
import { GiRegeneration } from 'react-icons/gi'

export default function Home() {
  return <>
    <section className='grid grid-cols-2 gap-5 mt-20'>
      <Link to='check-rek'>
        <button className='boxTools'>
          <h1>Check Rekening</h1>
          <span><AiOutlineSearch /></span>
        </button>
      </Link>

      <Link to='bin-generator'>
        <button className='boxTools'>
          <h1>Generate CC</h1>
          <span><GiRegeneration /></span>
        </button>
      </Link>

      <Link to='send-wa'>
        <button className='boxTools'>
          <h1>Send Whatsapp</h1>
          <span><AiOutlineWhatsApp /></span>
        </button>
      </Link>
    </section>
  </>
}

import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineWhatsApp } from 'react-icons/ai'
import { GiRegeneration } from 'react-icons/gi'

export default function Home() {
  return <>
    <section className='grid grid-cols-2 gap-5 mt-28'>
      <Link to='check-rek'>
        <button className='boxTools'>
          <span className='iconTools'><AiOutlineSearch /></span>
          <h1>Check Rekening</h1>
        </button>
      </Link>

      <Link to='bin-generator'>
        <button className='boxTools'>
          <span className='iconTools'><GiRegeneration /></span>
          <h1>Generate CC</h1>
        </button>
      </Link>

      <Link to='send-wa'>
        <button className='boxTools'>
          <span className='iconTools'><AiOutlineWhatsApp /></span>
          <h1>Send Whatsapp</h1>
        </button>
      </Link>
    </section>
  </>
}

import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineWhatsApp, AiOutlineUserAdd } from 'react-icons/ai'
import { GiRegeneration } from 'react-icons/gi'

export default function Home() {
  return <>
    <section className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-28'>
      <Link to='check-rek'>
        <button className='boxTools'>
          <span ><AiOutlineSearch /></span>
          <h1 className='textTools'>Check Rekening</h1>
        </button>
      </Link>

      <Link to='bin-generator'>
        <button className='boxTools'>
          <span ><GiRegeneration /></span>
          <h1 className='textTools'>Generate CC</h1>
        </button>
      </Link>

      <Link to='send-wa'>
        <button className='boxTools'>
          <span ><AiOutlineWhatsApp /></span>
          <h1 className='textTools'>Send Whatsapp</h1>
        </button>
      </Link>

      <Link to='randomuser'>
        <button className='boxTools'>
          <span ><AiOutlineUserAdd /></span>
          <h1 className='textTools'>Generate Random User</h1>
        </button>
      </Link>
    </section>
  </>
}

import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { } from 'react-icons/'

export default function About(){
  return <section className='section font-pop'>
    <h1 className='text-2xl text-mainBtn  mb-2'># About</h1>
    <p className='px-2'>ZTools it's website that provide a tools online generator and other useful tools</p>

    <div className='my-5'>
      <p className='text-mainBtn text-xl mb-2'># Donate</p>
      <ul className='px-7 flex flex-col gap-1 list-disc'>
        <li><a href="https://www.paypal.me/Sunarjo1337">Paypal</a></li>
        <li><a href="https://link.dana.id/qr/3o4bxy4i">DANA</a></li>
      </ul>
    </div>

    <p>If you have any suggestions, questions or any request please send it to <span className='text-mainBtn'>zeddnyx08@gmail.com</span></p>

    <div className='absolute bottom-5 left-0 text-center w-full'>
      <p>Get in close with me</p>
      <ul className='flex gap-5 justify-center mt-2 text-mainBtn'>
        <li><a href=""><FaTelegramPlane size='25' /></a></li>
        <li><a href=""><AiOutlineInstagram size='25' /></a></li>
        <li><a href=""><AiFillLinkedin size='25' /></a></li>
      </ul>
    </div>
  </section>
}

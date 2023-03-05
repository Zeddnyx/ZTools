import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const goTo = useNavigate()

  const handleBtn = () => {
    goTo('/')
  }

  return <section className='section mt-36'>
    <h1 className='my-10 font-bold text-4xl text-center'>Not Found!</h1>
    <button onClick={handleBtn} className='btn my-8' type="submit">Refresh</button>
  </section>
}

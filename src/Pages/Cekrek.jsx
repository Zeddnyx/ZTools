import { useState, useEffect } from 'react'

export default function Cekrek() {
const [bank, setBank] = useState('')
  const [number, setNumber] = useState(0)
  const [info, setInfo] = useState('')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)

  const [list, setList] = useState([
    'BCA', 'Blu By BCA', 'BNI', 'BRI', 'Mandiri', 'CIMB NIAGA', 'Permata', 'Danamon', 'Bank DKI', 'BTPN/Jenius', 'Bank NOBU', 'Bank Jago', 'Line Bank', 'LinkAja!', 'GoPay', 'OVO', 'DANA'
  ])

  const cekrek = async (bank, number) => {
    setLoad(true)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const urlencoded = new URLSearchParams();
    urlencoded.append("accountBank", bank);
    urlencoded.append("accountNumber", number);
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    }

    try {
      const cek = await fetch("https://cekrek.heirro.dev/api/check", requestOptions)
      if (!cek.ok){throw new Error('opps something went wrong')}
      const res = await cek.json()
      setInfo(res.data)
    } catch (error) {
      setError(error.message)
    }
    setLoad(false)
  }

  let content;
    if (info) {
    content =  <div className='p-2 bg-mainBtn my-5 rounded'>
      <p className='text-green-500 mb-2 text-xs font-semibold'>Success !</p>
      <div>
        <h4 className='font-bold text-mainBg'>Bank/E-Wallet : {info[0].accountBank}</h4>
        <h4 className='font-bold text-mainBg'>Name : {info[0].accountName}</h4>
        <h4 className='font-bold text-mainBg'>Rek/Number : {info[0].accountNumber}</h4>
      </div>
    </div>
  }
  if (info == undefined) {
    content =  <div className='p-2 bg-mainBtn dark:bg-mainBg my-5 rounded'>
      <p className='text-red-500 font-semibold my-2 text-xs'>Data not found !</p>
    </div>
  }
  if (load) {
    const loading = 'animate-bounce w-8 h-8 border-2 rounded-full mx-auto my-5 border-mainBtn'
    content = <div className={loading}></div>
  }
  if (error) {
    content = <p className=''>{error}</p>
  }

  const handleSubmit = e => {
    e.preventDefault()

    cekrek(bank, number)
  }

  return <>
    <section className='section'>
      <h1 className='heading-judul'>Check Rekening</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-28'>
        <fieldset className='field'>
          <legend className='legend'>Rekening</legend>
          <select className='select'  onChange={e  => setBank(e.target.value)} name="list">
            {list.map( list => {
              return <option key={list} value={list}>{list}</option>
            })}
          </select>
        </fieldset>
           
        <fieldset className='field'>
          <legend className='legend'>Number</legend>
          <input className='input' onChange={e => setNumber(e.target.value)} required type="number" name="accNumber" placeholder='Account Number' />
        </fieldset>

        <button className='btn' type="submit">Cek!</button>
      </form>

      {content}
    </section>
  </>
  
}

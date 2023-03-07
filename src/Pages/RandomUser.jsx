import { useState, useEffect } from 'react'
import Card from '../Components/RandomUser/Card'

export default function RandomUser() {
  const [datas, setDatas] = useState([])
  const [quantity, setQuantity] = useState(5)

  const user = async () => {
    const data = await fetch('https://randomuser.me/api/')
    try {
      const json = await data.json()
      // if just like this setDatas(json.results[0]) will be error datas is not func
      setDatas([json.results[0]])
      console.log(datas)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    user()
  }, [])

  const handle = e => e.preventDefault()
  const change = e => setQuantity(e.target.value)

  return <section className='section'>
    <h1 className='heading-judul'>Generate random user</h1>
    <div className='mt-20'>
      <div className='mb-10'>
        <fieldset className='field'>
          <legend className='legend'>quantity</legend>
          <input className='input' type="number" onChange={change} name="quantity" placeholder='5' />
        </fieldset>
        <button className='btn' onClick={handle} type="submit">Generate</button>
      </div>



      { datas?.length === 0
        ? <p>Loading ...</p>
        : datas.map((data,id) => {
          return <div key={id}>
            <Card user={data} />
          </div>
          })
      }
    </div>
  </section>
}

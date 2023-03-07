import { useState, useEffect } from 'react'
import Card from '../Components/RandomUser/Card'

export default function RandomUser() {
  const [datas, setDatas] = useState([])

  const user = async () => {
    const data = await fetch('https://randomuser.me/api/')
    try {
      const json = await data.json()
      setDatas([json.results[0]])
      console.log(datas)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    user()
  }, [])

  return <section className='section'>
    <h1 className='heading-judul'>Generate random user</h1>
    <div className='mt-20'>
      <div className='mb-10'>
        <fieldset className='field'>
          <legend className='legend'>quantity</legend>
          <input className='input' type="text" name="quantity" />
        </fieldset>
        <button className='btn' type="submit">Generate</button>
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

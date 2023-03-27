import { useState, useEffect } from 'react';
import Card from '../Components/RandomUser/Card';

export default function RandomUser() {
  const [datas, setDatas] = useState([]);

  const user = async () => {
    const data = await fetch('https://randomuser.me/api/');
    try {
      const json = await data.json();
      // if just like this setDatas(json.results[0]) will be error datas is not func
      setDatas([json.results[0]]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    user();
  }, []);

  const handle = (e) => {
    e.preventDefault();
    user();
  };

  return (
    <section className="section">
      <h1 className="heading-judul">Generate Random Dummy User Data</h1>
      <p className="text-center">
        These random users, are generated from the API of{' '}
        <a className="text-mainBtn" href="https://randomuser.me">
          randomuser.me
        </a>
      </p>
      <div className="mt-20">
        <div className="mb-10">
          <button className="btn" onClick={handle} type="submit">
            Generate
          </button>
        </div>

        {datas?.length === 0 ? (
          <p className="animate-bounce w-8 h-8 border-2 rounded-full mx-auto my-5 border-mainBtn"></p>
        ) : (
          datas.map((data, id) => {
            return (
              <div key={id}>
                <Card user={data} />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

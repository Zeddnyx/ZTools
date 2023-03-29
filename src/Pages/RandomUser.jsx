import { useState } from 'react';
import Card from '../Components/RandomUser/Card';
import Loading from '../Components/Loading';

export default function RandomUser() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = async () => {
    setLoading(true);
    const data = await fetch('https://randomuser.me/api/');
    try {
      const json = await data.json();
      // if just like this setDatas(json.results[0]) will be error datas is not func
      setDatas([json.results[0]]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

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

        {loading ? (
          <Loading />
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

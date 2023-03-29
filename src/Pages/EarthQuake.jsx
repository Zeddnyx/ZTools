import { useState } from 'react';
import Loading from '../Components/Loading';

export default function EarthQuake() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const quake = async () => {
    setLoading(true);
    const data = await fetch('https://cuaca-gempa-rest-api.vercel.app/quake');
    const json = await data.json();
    setDatas(json.data);
    setLoading(false);
  };

  const handleQuake = (e) => {
    e.preventDefault();
    quake();
  };

  return (
    <section className="section">
      <h1 className="heading-judul">Earth Quake</h1>
      <p className="text-center">Track Earth Quake Indonesian</p>
      <p className="text-center text-sm mb-10">
        Information quake from BMKG, this API from{' '}
        <a href="https://github.com/renomureza/cuaca-gempa-rest-api">
          Renomureza
        </a>{' '}
      </p>
      <div>
        <button type="submit" onClick={handleQuake} className="btn mb-5">
          Track
        </button>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div
            className={
              datas.length != 0 ? 'grid gap-2 tracking-tight' : 'hidden'
            }
          >
            <p>Tanggal: {datas.tanggal}</p>
            <p>jam: {datas.jam}</p>
            <p>Magnitude: {datas.magnitude}</p>
            <p>Kedalaman: {datas.kedalaman}</p>
            <p>Wilayah: {datas.wilayah}</p>
            <p>Potensi: {datas.potensi}</p>
            <p>Diraskan: {datas.dirasakan}</p>
            <img src={datas.shakemap} alt="quake" />
          </div>
        )}
      </div>
    </section>
  );
}

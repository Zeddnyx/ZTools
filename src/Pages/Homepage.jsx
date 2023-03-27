import { Link } from 'react-router-dom';
import homepage from '../utils/homepage.json';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-28">
        {homepage.map((list) => {
          return (
            <Link key={list.id} to={list.id}>
              <button className="boxTools">
                <h1 className="textTools">{list.title}</h1>
              </button>
            </Link>
          );
        })}
      </section>
    </>
  );
}

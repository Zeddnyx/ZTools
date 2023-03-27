import { useState } from 'react';

export default function Cekrek() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <section className="section">
        <h1 className="heading-judul">
          Send Whatsapp Massage Without Save Number
        </h1>
        <p className="text-xs text-mainText text-center">
          *I don't store any infomation or number you type in field below!
        </p>

        <form className="grid gap-5 mt-16">
          <fieldset className="field">
            <legend className="legend">Number</legend>
            <input
              onChange={(e) => setNumber(e.target.value)}
              className="input"
              type="number"
              name="number"
              placeholder="Type a number here!"
            />
            <span className="text-[10px] text-mainText">Ex: 62855566677</span>
          </fieldset>

          <a
            href={`https://api.whatsapp.com/send/?phone=${number}&text=Hi!&type=phone_number&app_absent=0`}
            className="btn"
          >
            Send Message!
          </a>
        </form>
      </section>
    </>
  );
}

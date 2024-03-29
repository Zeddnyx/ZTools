import Image from "next/image"
import Logo from "@/public/ztools.png"

export default function page() {
  return (
    <div className="about">
      <div>
        <h3>About Ztools</h3>
        <p>
          Ztools is a simplistic yet highly functional web app that I have
          created to provide a variety of useful tools. The app is designed to
          be user-friendly and intuitive,
        </p>
        <br />
        <p>
          and I am constantly updating it with new features and improvements to
          make it even more helpful. I am proud of this project because it
          showcases my ability to create practical solutions that are both
          aesthetically pleasing and highly functional.
        </p>
      </div>
      {/* <h3>Key features</h3> */}
      {/* <ul> */}
      {/*   <li></li> */}
      {/* </ul> */}
      <div>
        <h4>Get Involved</h4>
        <p>
          Ztools is aimed to be a collaborative project, and you are invited to
          join the project. All contributions are welcome!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
      </div>
      <div className="flexCenterCenter">
        <Image src={Logo} height={100} width={100} alt="logo" />
        <h1>
          <span className="text-aqua">Z</span>tools
        </h1>
      </div>
      <div className="flexBetweenCenter">
      <h5><a href="https://github.com/Zeddnyx">Contact</a></h5>
        <span>
          <a href="https://github.com/Zeddnyx/Ztools" target="_blank">
            <h5 className="text-aqua">Follow on Github</h5>
          </a>
        </span>
      </div>
    </div>
  );
}

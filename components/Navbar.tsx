import Link from "next/link";
import Logo from "@/public/ztools.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
    <div className="max-w-4xl w-full mx-auto ">
      <div className="nav-content">
        <Link href="/">
          <Image src={Logo} height={40} width={40} alt="logo" />
        </Link>
        <div className="nav-links">
          <Link href="/about"><h5>About</h5></Link>
        </div>
      </div>
    </div>
    </nav>
  );
}

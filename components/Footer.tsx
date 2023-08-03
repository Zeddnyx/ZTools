import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const id = usePathname();
  const title = id == "/about" ? "dashboard" : "about";
  return (
    <footer>
      <div className="footer-content">
        <Link href={`/${title}`}>
          <span className="flex gap-1 items-center">
            <p className="rotate-180 font-bold">&#10141; </p>
            <h5>{title}</h5>
          </span>
        </Link>
        <div className="footer-links">
          <span>
            <a href="https://github.com/Zeddnyx" target="_blank">
              <h5 className="text-aqua">Follow on Github</h5>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

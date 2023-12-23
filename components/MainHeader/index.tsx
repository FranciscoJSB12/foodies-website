import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.scss";

export function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.headerLogo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        <span>NextLevel Food</span>
      </Link>
      <nav className={classes.headerNavbar}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

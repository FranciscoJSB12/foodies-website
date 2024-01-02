import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.scss";
import { NavLink } from "../NavLink";

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
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

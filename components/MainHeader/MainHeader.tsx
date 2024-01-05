import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.scss";
import { NavLink } from "../NavLink/NavLink";

export function MainHeader() {
  return (
    <header className={classes.header}>
      <NavLink href="/">
        <span className={classes.headerLogo}>
          <Image
            src={logoImg}
            alt="A plate with food on it"
            className={classes.logoImg}
            priority
          />
          NextLevel Food
        </span>
      </NavLink>
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

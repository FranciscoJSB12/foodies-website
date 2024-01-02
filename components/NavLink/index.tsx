"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.scss";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

export function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        href === path.slice(0, href.length)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

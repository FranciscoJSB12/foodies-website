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

  if (href === "/") {
    return (
      <Link
        href={href}
        className={
          href === path ? `${classes.link} ${classes.active}` : classes.link
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

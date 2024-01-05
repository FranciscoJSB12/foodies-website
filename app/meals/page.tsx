import Link from "next/link";
import classes from "./page.module.scss";

export default function Meals() {
  return (
    <main>
      <h1 className={classes.meals}>Meals</h1>
      <p>
        <Link href="/meals/share" className={classes.mainButton}>
          Share your meals
        </Link>
      </p>
    </main>
  );
}

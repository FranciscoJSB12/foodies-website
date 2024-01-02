import Link from "next/link";
import { ImageSlideShow } from "@/components/ImageSlideShow";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <ImageSlideShow />
        <div className={classes.headerTitleContainer}>
          <div>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & Share food from all over the world.</p>
          </div>
          <div>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className={classes.main}>
        <section>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

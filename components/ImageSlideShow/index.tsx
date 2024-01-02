"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import burguerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import classes from "./ImageSlideShow.module.scss";

const images = [
  { src: burguerImg, alt: "A burger image" },
  { src: curryImg, alt: "A curry image" },
  { src: dumplingsImg, alt: "Dumplings image" },
];

export function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <figure className={classes.imageContainer}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className={index === currentImageIndex ? classes.active : undefined}
        />
      ))}
    </figure>
  );
}

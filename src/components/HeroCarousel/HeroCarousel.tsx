import { useState } from "react";
import styles from "./HeroCarousel.module.css";

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      sport: "Futbol",
      icon: "/futbol.svg",
      backgroundColor: "rgba(0, 175, 20, 0.35)",
    },
    {
      sport: "Básquetbol",
      icon: "/basquetbol.svg",
      backgroundColor: "rgba(255, 132, 17, 0.45)",
    },
    {
      sport: "Béisbol",
      icon: "/beisbol.svg",
      backgroundColor: "rgba(211, 33, 23, 0.45)",
    },
  ];

  return (
    <div className={styles.carousel}>
      <div className={styles.options}>
        {slides.map((slide, index) => (
          <div
            key={slide.sport}
            className={`${styles.option} ${
              index === activeSlide ? styles.active : ""
            }`}
            style={
              {
                backgroundColor:
                  index === activeSlide ? slide.backgroundColor : "transparent",
                "--hover-color": slide.backgroundColor,
              } as React.CSSProperties
            }
            onClick={() => setActiveSlide(index)}
          >
            <img
              src={slide.icon}
              alt={`Icono de ${slide.sport}`}
              width={40}
              height={40}
            />
            {index === activeSlide && <span>{slide.sport}</span>}
          </div>
        ))}
      </div>
      <div
        className={styles.mainSlide}
        style={{ backgroundColor: slides[activeSlide].backgroundColor }}
      >
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <img
              src={slides[activeSlide].icon}
              alt={`Icono de ${slides[activeSlide].sport}`}
              width={280}
              height={280}
            />
          </div>
          <div className={styles.textContent}>
            <h2>
              Ligas de {slides[activeSlide].sport}
              <br />
              Santa Catarina
            </h2>
            <p>
              Entérate de todas las sedes, horarios y clasificaciones de las
              diferentes ligas de todo Santa Catarina.
            </p>
            <div className={styles.buttons}>
              <button className={styles.actionButton}>Horarios</button>
              <button className={styles.actionButton}>Sedes</button>
              <button className={styles.actionButton}>Clasificación</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

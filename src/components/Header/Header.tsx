"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (title: string) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown((prev) => (prev === title ? null : title));
    }
  };

  const menuItems = [
    {
      title: "Nosotros",
      href: "/nosotros",
      dropdown: null,
    },
    {
      title: "Fútbol",
      dropdown: [
        { title: "Clasificación", href: "/futbol/clasificacion" },
        { title: "Horarios", href: "/futbol/horarios" },
        { title: "Directorio", href: "/futbol/directorio" },
      ],
    },
    {
      title: "Béisbol",
      dropdown: [
        { title: "Clasificación", href: "/beisbol/clasificacion" },
        { title: "Horarios", href: "/beisbol/horarios" },
        { title: "Directorio", href: "/beisbol/directorio" },
      ],
    },
    {
      title: "Básquetbol",
      dropdown: [
        { title: "Clasificación", href: "/basquetbol/clasificacion" },
        { title: "Horarios", href: "/basquetbol/horarios" },
        { title: "Directorio", href: "/basquetbol/directorio" },
      ],
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img
            src="/logo-santa-black.png"
            alt="Gobierno de Santa Catarina"
            width={120}
            height={64}
          />
        </a>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li
                key={item.title}
                className={styles.navItem}
                onClick={() => item.dropdown && toggleDropdown(item.title)}
              >
                {item.href ? (
                  <a href={item.href} className={styles.navLink}>
                    {item.title}
                  </a>
                ) : (
                  <span className={styles.navLink}>{item.title}</span>
                )}

                {item.dropdown && (
                  <ul
                    className={`${styles.dropdown} ${
                      activeDropdown === item.title ? styles.dropdownActive : ""
                    }`}
                  >
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.title}>
                        <a href={subItem.href} className={styles.dropdownLink}>
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

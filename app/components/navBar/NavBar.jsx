"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { setCurrentPageToContext } from "./controller";
import styles from "./NavBar.module.css";
import { AppContext } from "@/app/context/appContext";
import LOGO from "../../assets/rick.webp";
import Image from "next/image";

export default function NavBar() {
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPageToContext({
      pathname: pathname,
      setCurrentPage: setCurrentPage,
    });
  }, [pathname]);

  return (
    <nav className={styles.navContainer}>
      <div>
        <Link
          href="/episodes"
          className={
            currentPage === "episodes" ? styles.selectedLink : styles.link
          }
        >
          Episodios
        </Link>
        <Link
          href="/locations"
          className={
            currentPage === "locations" ? styles.selectedLink : styles.link
          }
        >
          Localizaciones
        </Link>
      </div>
      <Image placeholder={"blur"} height={50} src={LOGO} alt="Rick and Morty" />
    </nav>
  );
}

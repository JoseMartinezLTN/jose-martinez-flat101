"use client";

import { useContext } from "react";
import styles from "./Loading.module.css";
import { AppContext } from "@/app/context/appContext";

export default function LoadingBar() {
  const { isLoading } = useContext(AppContext);

  if (!isLoading) return null;

  return <div className={styles.loadingBar} />;
}

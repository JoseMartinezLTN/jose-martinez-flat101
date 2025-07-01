"use client";

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState("");

  const context = {
    isLoading,
    setIsLoading,
    currentPage,
    setCurrentPage,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

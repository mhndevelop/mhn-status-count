"use client";

import { GlobalStyles } from "@/components/GlobalStyles";
// #region : imports
import Head from "next/head";
import { redirect } from "next/navigation";
import { useEffect } from "react";
// #endregion : imports

const Home = () => {
  // #region : effects
  useEffect(() => {
    redirect("/pok");
  }, []);
  // #endregion : effects

  return null;
};

export default Home;


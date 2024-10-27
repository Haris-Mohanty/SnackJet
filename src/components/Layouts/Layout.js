import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Pacifico, Montserrat, Open_Sans } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500"],
});

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main
        className={`${pacifico.variable} ${montserrat.variable} ${openSans.variable}`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

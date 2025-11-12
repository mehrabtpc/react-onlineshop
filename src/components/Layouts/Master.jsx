import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import main from './main'
export default function Master({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

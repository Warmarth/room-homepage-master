import React from "react";
import Header from "./componets/header";
import Hero from "./componets/hero";
import "./App.css";

let navbarList = ["Home", "Shop", "About", "Contact"];
function App() {
  return (
    <>
      <div className="w-[375px] lg:w-[100vw] bg-slate-700">
        <Header navbar={navbarList} />
        <Hero />
      </div>
    </>
  );
}

export default App;

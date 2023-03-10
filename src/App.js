import React from "react";
import "./index.css";

import Header from "./Header";
import Main from "./Main1";
import Main2 from "./Main2"
import Footer from "./Footer"
export function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <Main2 />
      </main>
      <Footer />
    </>
  );
}

export default App;

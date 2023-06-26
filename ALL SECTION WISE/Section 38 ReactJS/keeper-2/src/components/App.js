import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NTS from "../notes";

function App() {
  return (
    <div>
      <Header />

      {/* 
        passing hardCoded values
        <Note title="asdf" content="asdf" /> 
      */}

      {/* Dynamically */}

      {
        NTS.map(x=> <Note key={x.key} title={x.title} content={x.content} />)
      }

      <Footer />
    </div>
  );
}

export default App;

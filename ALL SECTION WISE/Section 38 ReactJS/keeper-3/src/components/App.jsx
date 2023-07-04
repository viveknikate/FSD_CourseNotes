import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [workArr, setWorkArr] = useState([]);

  function noteObj(note) {
    setWorkArr((prevValues) => {
      return [...prevValues, note];
    });
  }

  function deleteNotes(id) {
    setWorkArr((prevValues) => {
      return prevValues.filter((ele, index) => {
        return index !== id;
      });
    });
    // console.log("deletion");
  }

  return (
    <div>
      <Header />
      <CreateArea func={noteObj} />

      {workArr.map((tasks, index) => {
        return (
          <Note
            key={index}
            num={index}
            title={tasks.taskTitle}
            content={tasks.taskContent}
            func={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

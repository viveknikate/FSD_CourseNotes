import React, { useState } from "react";

function CreateArea(props) {
  const [works, setWorks] = useState({
    taskTitle: "",
    taskContent: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setWorks((prevValue) => {
      // console.log(prevValue);
      // if (name === "taskTitle")
      //   return {
      //     taskTitle: value,
      //     taskContent: prevValue.taskContent
      //   };
      // else
      //   return {
      //     taskTitle: prevValue.taskTitle,
      //     taskContent: value
      //   };
      return {
        ...prevValue,
        [name]: value
      };
    });
    // console.log(name);
  }

  function submitTask(event) {
    props.func(works);
    setWorks({
      taskTitle: "",
      taskContent: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="taskTitle"
          placeholder="Title"
          onChange={handleChange}
          value={works.taskTitle}
        />
        <textarea
          name="taskContent"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={works.taskContent}
        />
        <button onClick={submitTask}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

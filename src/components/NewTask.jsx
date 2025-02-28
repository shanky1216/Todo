import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const NewTask = ({ handleAddTask, tasks , handleDeleteTask}) => {
  const [enteredTask, setEnteredTask] = useState();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleAddtask() {
    handleAddTask(enteredTask);
  }

  return (
    <section>
      <div className="flex items-center gap-6 ">
        <Input onChange={handleChange} />
        <Button onClick={handleAddtask}>Add Task</Button>
      </div>
      <div>
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.text}
              <Button onClick={() => handleDeleteTask(t.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewTask;

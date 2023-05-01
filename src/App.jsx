import { useState } from "react";
import styles from "./App.css";
import { Task } from "./task";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    const task = {
      id: tasks.length,
      taskName: newTask,
    };

    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(
      tasks.filter((element) => {
        if (element.id == task.id) return false;
        else return true;
      })
    );
  };

  return (
    <>
      <div className="box-row">
        <input
          type="text"
          className={styles.input}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button className="button" onClick={addNewTask}>
          Add
        </button>
      </div>

      <div className="box">
        {tasks.map((task, key) => {
          return (
            <Task
              task={task}
              key={key}
              taskName={task.taskName}
              id={task.id}
              del={deleteTask}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;

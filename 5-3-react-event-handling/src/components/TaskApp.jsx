import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = () => {
      const trimmed = text.trim();       // remove spaces
      if (!trimmed) return;              // stop if input is empty
      setTasks(prev => [...prev, { id: Date.now(), text: trimmed }]);
      setText("");
  };

  
  const handleDelete = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleClearAll = () => {
      setTasks([]);
  };



    return (
        <section className="card">
            {/*Controlled Input */}
            <div className="inputRow">
                <input
                    type="text"
                    placeholder="Type a task..."
                    className="input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />
                <TaskList tasks={tasks}/>
                <button className="btn btn--primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>

            {/*Render Task List and Enable Delete */}
            {/*Pass tasks and onDelete */}
            <TaskList tasks={tasks} onDelete={handleDelete}/>

            {/*Clear All */}
            <div className="footerRow">
                <button className="btn btn--ghost" onClick={handleClearAll}>
                    Clear All
                </button>
            </div>

        </section>
    );
}

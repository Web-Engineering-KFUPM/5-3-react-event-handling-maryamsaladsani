import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
      <ul className="list">
        {if (tasks.length === 0) {
          return <p className="placeholder">No tasks yet — add one ✨</p>;
        }}

        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                id={task.id}
                text={task.text}
                onDelete={onDelete}   // for Task 3 (Delete)
            />
        ))}

      </ul>

  );
}

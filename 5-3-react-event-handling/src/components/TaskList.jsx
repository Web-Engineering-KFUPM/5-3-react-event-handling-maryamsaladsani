import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
      <ul className="list">
          {tasks.length === 0 ? (
              <li className="placeholder">No tasks yet — add one ✨</li>
          ) : (
              tasks.map((task) => (
                  <TaskItem
                      key={task.id}
                      id={task.id}
                      text={task.text}
                      onDelete={onDelete}
                  />
              ))
          )}
      </ul>
  );
}
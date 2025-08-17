"use client";
import React from "react";
import { USERS } from "../utils/constants";

interface AddTaskFormProps {
  onAddTask: (task: string, userId: string) => void;
}

const AddTaskForm = ({ onAddTask }: AddTaskFormProps) => {
  const [task, setTask] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() && user) {
      onAddTask(task.trim(), user);
      setTask("");
      setUser("");
    }
  };

  return (
    <form
      className="flex flex-col sm:flex-row gap-4 sm:items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-5 px-4 py-1 border rounded-lg h-10"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className="flex-1 px-4 py-1 border rounded-lg h-10"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      >
        <option className="flex-1" value="">
          Select a User
        </option>
        {USERS.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600 cursor-pointer h-10">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;

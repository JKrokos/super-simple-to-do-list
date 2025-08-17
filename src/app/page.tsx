"use client";
import { useState, useEffect } from "react";
import AddTaskForm from "../components/AddTaskForm";
import { TodoState, TODO_STATES } from "../utils/constants";
import { TodoBoard } from "../components/TodoBoard";

interface Todo {
  id: string;
  task: string;
  userId: string;
  state: TodoState;
  createdAt: Date;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task: string, userId: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      task,
      userId,
      state: TODO_STATES.TODO,
      createdAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodoState = (id: string, newState: TodoState) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, state: newState } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-6 h-auto">
      <div className="max-w-7xl mx-auto">
        <AddTaskForm onAddTask={addTodo} />
        <TodoBoard
          todos={todos}
          onUpdateTodoState={updateTodoState}
          onDeleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

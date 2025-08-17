import { STATE_TITLES, TodoState } from "../utils/constants";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: string;
  task: string;
  userId: string;
  state: TodoState;
  createdAt: Date;
}

interface TodoColumnProps {
  state: TodoState;
  todos: Todo[];
  onUpdateTodoState: (id: string, newState: TodoState) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoColumn = ({
  state,
  todos,
  onUpdateTodoState,
  onDeleteTodo,
}: TodoColumnProps) => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 shadow-sm w-full">
      <h2 className="text-lg font-semibold mb-4">{STATE_TITLES[state]}</h2>
      <div className="space-y-2">
        {todos
          .filter((todo) => todo.state === state)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdateState={onUpdateTodoState}
              onDelete={onDeleteTodo}
            />
          ))}
      </div>
    </div>
  );
};

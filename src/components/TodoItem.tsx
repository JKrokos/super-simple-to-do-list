import { TodoState, TODO_STATES, USERS } from "../utils/constants";

interface Todo {
  id: string;
  task: string;
  userId: string;
  state: TodoState;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  onUpdateState: (id: string, newState: TodoState) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onUpdateState, onDelete }: TodoItemProps) => {
  const user = USERS.find((u) => u.id === todo.userId);
  const previousState =
    todo.state === TODO_STATES.TODO ? TODO_STATES.DONE : TODO_STATES.ONGOING;
  const nextState =
    todo.state === TODO_STATES.TODO ? TODO_STATES.ONGOING : TODO_STATES.DONE;

  return (
    <div className="bg-gray-50 p-3 rounded border">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-sm">{todo.task}</h3>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700 text-xs"
        >
          ✕
        </button>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-600">{user?.name}</span>
        <div className="flex gap-2">
          {todo.state !== TODO_STATES.TODO && (
            <button
              onClick={() => onUpdateState(todo.id, previousState)}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              ←
            </button>
          )}
          {todo.state !== TODO_STATES.DONE && (
            <button
              onClick={() => onUpdateState(todo.id, nextState)}
              className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import { TODO_STATES, TodoState } from "../utils/constants";
import { TodoColumn } from "./TodoColumn";

interface Todo {
  id: string;
  task: string;
  userId: string;
  state: TodoState;
  createdAt: Date;
}

interface TodoBoardProps {
  todos: Todo[];
  onUpdateTodoState: (id: string, newState: TodoState) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoBoard = ({
  todos,
  onUpdateTodoState,
  onDeleteTodo,
}: TodoBoardProps) => {
  return (
    <div className="mt-8 ">
      <h1 className="text-3xl font-bold text-center mb-8">Todo Board</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <TodoColumn
          state={TODO_STATES.TODO}
          todos={todos}
          onUpdateTodoState={onUpdateTodoState}
          onDeleteTodo={onDeleteTodo}
        />
        <TodoColumn
          state={TODO_STATES.ONGOING}
          todos={todos}
          onUpdateTodoState={onUpdateTodoState}
          onDeleteTodo={onDeleteTodo}
        />
        <TodoColumn
          state={TODO_STATES.DONE}
          todos={todos}
          onUpdateTodoState={onUpdateTodoState}
          onDeleteTodo={onDeleteTodo}
        />
      </div>
    </div>
  );
};

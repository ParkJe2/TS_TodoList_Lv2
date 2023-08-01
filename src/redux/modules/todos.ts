// 액션 타입 정의
export enum ActionTypes {
  NEW_TODO = "todos/NEW_TODO",
  GET_TODO_BY_ID = "todos/GET_TODO_BY_ID",
  TOGGLE_STATUS_TODO = "todos/TOGGLE_STATUS_TODO",
  DELETE_TODO = "todos/DELETE_TODO",
}

// Todo 타입 정의
export interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

// 액션 객체 타입 정의
interface NewTodoAction {
  type: ActionTypes.NEW_TODO;
  payload: Todo;
}

interface GetTodoByIdAction {
  type: ActionTypes.GET_TODO_BY_ID;
  payload: String;
}

interface ToggleStatusTodoAction {
  type: ActionTypes.TOGGLE_STATUS_TODO;
  payload: string;
}

interface DeleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  payload: string;
}

export type TodoActionTypes =
  | NewTodoAction
  | GetTodoByIdAction
  | ToggleStatusTodoAction
  | DeleteTodoAction;

// 액션 생성자 함수들
export const newTodo = (todo: Todo) => ({
  type: ActionTypes.NEW_TODO,
  payload: todo,
});

export const getTodoById = (id: string) => ({
  type: ActionTypes.GET_TODO_BY_ID,
  payload: id,
});

export const toggleStatusTodo = (id: string) => ({
  type: ActionTypes.TOGGLE_STATUS_TODO,
  payload: id,
});

export const deleteTodo = (id: string) => ({
  type: ActionTypes.DELETE_TODO,
  payload: id,
});

// 초기 상태와 리듀서 함수
export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todos = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ActionTypes.NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    // case ActionTypes.GET_TODO_BY_ID:
    //   return {
    //     ...state,
    //     todos: state.todos.find((t) => {
    //       return t.id === action.payload;
    //     }),
    //   };
    case ActionTypes.TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todos;

// 작업관리 인터페이스 정의
export interface Todo {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

// 상태 인터페이스 정의
export interface AppState {
  todos: Todo[];
  todo: Todo;
}

// 액션 타입 정의
export enum ActionTypes {
  NEW_TODO = "New_Todo",
  DELETE_TODO = "Delete_Todo",
  TOGGLE_STATUS_TODO = "Toggle_Status_Todo",
  GET_TODO_BY_ID = "Get_Todo_By_Id",
}

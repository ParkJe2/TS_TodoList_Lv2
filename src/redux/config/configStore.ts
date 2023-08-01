import { createStore, combineReducers, Store } from "redux";
import todos, { TodoState } from "../modules/todos";

export interface RootState {
  todos: TodoState;
}

const rootReducer = combineReducers({ todos });

const store: Store<RootState> = createStore(rootReducer);

export default store;

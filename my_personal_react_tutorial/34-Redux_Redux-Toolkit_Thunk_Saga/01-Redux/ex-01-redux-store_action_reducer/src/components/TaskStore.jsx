import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import {
  TaskReducer,
  FetchTaskCreator,
  AddTaskCreator,
  DeleteTaskCreator,
  EditTaskCreator,
} from "./TaskReducer";

const composeEnhancers = composeWithDevTools({
  FetchTaskCreator,
  AddTaskCreator,
  DeleteTaskCreator,
  EditTaskCreator,
});
const store = createStore(
  TaskReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;

import { legacy_createStore } from "redux";
import basicReducer from "./Reducer";

const commonStore = legacy_createStore(basicReducer);
export default commonStore;

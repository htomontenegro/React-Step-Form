import { combineReducers } from "redux";
import tarjetas from "../reducers/tarjetasReducer";

const rootReducer = combineReducers({
  tarjetasReducer: tarjetas,
});
export default rootReducer;

import {combineReducers} from "redux";
import NameSpace from "./name-space.js";
import {reducer as catalog} from "./catalog/reducer";

export default combineReducers({
  [NameSpace.CATALOG]: catalog,
});

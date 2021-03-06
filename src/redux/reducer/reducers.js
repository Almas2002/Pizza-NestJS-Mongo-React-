import {combineReducers} from "redux";
import filterReducer from "./filters";
import pizzaReducer from "./Pizzas";

const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzaReducer,
});
export default rootReducer;
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import markets from "./reducers/markets";
import events from "./reducers/events";
import prefences from "./reducers/global";

const rootReducer = combineReducers({
    markets,
    events,
    prefences,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
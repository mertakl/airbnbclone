import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from './reducers';
import {createStore, compose, applyMiddleware} from "redux";

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

export default configureStore({});

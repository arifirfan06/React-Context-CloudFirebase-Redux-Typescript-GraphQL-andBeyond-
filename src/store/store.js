// import { compose, createStore, applyMiddleware } from "redux";

// the store is called in index js at the top level, this is the core redux
// then we must pass the root reducer that contain all reducers combined
// in redux dispatch will fire to all reducers
import { rootReducer } from "./root-reducers";
import { configureStore } from "@reduxjs/toolkit";
// this is middleware you can adjust command before it 
// reach to the client or before the function run in the browser
// therefore we attach logger to see what happen behind the scene before the function occur

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"
// import { customLogger } from "../middleware/logger";
import logger from "redux-logger";
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,

    }).concat(middleWares)
})

// const persistReduxConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user']
// }
// const persistedReducer = persistReducer(persistReduxConfig, rootReducer)
// pick logger or customLogger in middleware for easier development

// .filter(Boolean) will return empty [] if the condition return false

// const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
// root reducer
// export const store = createStore(persistedReducer, undefined, composedEnhancers);
// export const persistor = persistStore(store)




// Note

//
//
//
//
//

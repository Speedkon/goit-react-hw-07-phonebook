import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from './contactSlice';
import { filterReducer } from "./filterSlice";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
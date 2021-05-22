import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import fetchedDataReducer from './fetchedData/fetched.reducer'

const persistConfig = {
  key: "root",
  storage,   
};

const rootReducer = combineReducers({
  dataFetched: fetchedDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
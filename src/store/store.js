import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import cartReducer from '../components/reducers/cartReducer';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  //whitelist: ['cartReducer'],
  blacklist: [
    'items',
  ]
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(
    createLogger(),
  ),
);

let persistor = persistStore(store);

export {store, persistor};
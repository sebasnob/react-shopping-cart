import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';

// Imports: Redux Persist Persister
import { store, persistor } from './store/store';

//const store = createStore(cartReducer);

ReactDOM.render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>, document.getElementById('root')
        );

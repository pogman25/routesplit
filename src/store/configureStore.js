import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';
import {loadState, saveState} from './LocalStorage';

export default function configureStore() {

    const persistedState = loadState();

    const middleware = applyMiddleware(thunk, logger);

    const store = createStore(
        rootReducer,
        persistedState,
        middleware
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    store.subscribe( () => {
            saveState(store.getState())
        }
    );

    return store;
}
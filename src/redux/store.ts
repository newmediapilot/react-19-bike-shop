import {configureStore, combineReducers} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const reducers = [{ok: (state = {}) => state}];
const test = {ok2: (state = {}) => state};

export const store = configureStore({
    reducer: reducers[0],
});

/**
 * Hydrates the root store with a new reducer
 * @param reducer
 */
export const hydrateReducer = (reducer) => {
    reducers.push(reducer);
    const payload = {};
    for (let i = 0; i < reducers.length; i++) {
        const key = Object.keys(reducers[i])[0];
        payload[key] = reducers[i][key];
    }
    console.log('payload', payload);
    store.replaceReducer(combineReducers(payload));
};

hydrateReducer(test)
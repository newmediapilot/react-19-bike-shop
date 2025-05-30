import {combineReducers, configureStore} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const reducers = [{ok: (state = {}) => state}];

export const store = configureStore({
    reducer: reducers[0]
});

/**
 * Hydrates the root store with a new reducer
 * @param reducer
 */
export const installReducer = (reducer) => {
    reducers.push(reducer);
    const payload = {};
    for (let i = 0; i < reducers.length; i++) {
        const key = Object.keys(reducers[i])[0];
        payload[key] = reducers[i][key];
    }
    store.replaceReducer(combineReducers(payload));
    console.log('installReducer', store.getState());
};
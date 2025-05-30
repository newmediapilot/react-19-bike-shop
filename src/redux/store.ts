import {configureStore, Reducer} from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const hostReducer: Record<string, Reducer> = {
    placeholder: (state = {}) => state
};

export const store = configureStore({
    reducer: {
        ...hostReducer
    },
});

/**
 * Hydrates the root store with a new reducer
 * @param name
 * @param newReducer
 */
export function hydrateReducer(name: string, newReducer: Reducer) {
    store.replaceReducer({
        ...hostReducer,
        ...newReducer,
    });
};
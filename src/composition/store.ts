// @ts-ignore
import { initPPostConstructs } from '@local/pages/PPost';
import { configureStore, createDynamicMiddleware, createSlice } from '@reduxjs/toolkit';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type ListItem = {
    id: number;
    title: string;
    description: string;
};

export type ListData = ListItem[];

export type RootState = {
    list: ListData;
    detail?: ListItem;
    search?: string;
    post: {
        index: number;
        component: React.JSX.Element;
        show: boolean;
        value: any;
    }[];
};

export type ActionPayload = { payload: any; type: string };

const rootSlice = createSlice({
    name: 'slices',
    initialState: {
        post: initPPostConstructs,
    },
    reducers: {
        setFormShow: (state: RootState, action: ActionPayload) => {
            const index = action.payload;
            const post0 = state.post[index + 1];
            const post1 = state.post[index + 2];
            if (post0) post0.show = true;
            if (post1) post1.show = true;
        },
        resetFormShow: (state: RootState) => {
            for (let i = 1; i < state.post.length; i++) {
                state.post[i].show = false;
            }
        },
        setStoreKey: (state: RootState, action: ActionPayload) => {
            state[action.payload.key] = action.payload.data;
        },
        setSearch: (state: RootState, action: ActionPayload) => {
            state.search = action.payload as string;
        },
    },
});

const dynamicMiddleware = createDynamicMiddleware();
const { addMiddleware } = dynamicMiddleware;
export const addAppMiddleware = addMiddleware;

export const store = configureStore({
    reducer: rootSlice.reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredPaths: ['post'],
            },
        }).prepend(dynamicMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
// @ts-ignore
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// @ts-ignore
export const useAppSelector = useSelector.withTypes<RootState>();
// export const createAppSelector = createSelector;
export const { setSearch, setStoreKey, setFormShow, resetFormShow } = rootSlice.actions;

import {configureStore, createSlice} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

/**
 * Create the root slice to split the code
 * installSlice adds a key by name
 * uninstallSlice removes key
 * Data manipulation is done in `selectors.ts`
 */
const rootSlice = createSlice({
    name: 'slices',
    initialState: {},
    reducers: {
        addLoaderSlice: (state, action) => {
            const {key, data} = action.payload;
            state[key] = data;
        }
    }
});

export const store = configureStore({
    reducer: rootSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const {addLoaderSlice} = rootSlice.actions;

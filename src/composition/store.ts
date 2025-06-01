import {configureStore, createSlice, createSelector} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {ListData} from '@local/components/Listings';
import {SearchData} from '@local/components/Search';

export type RootState = {
    list: ListData,
    search?: SearchData,
}

const rootSlice = createSlice({
    name: 'slices',
    initialState: {},
    reducers: {
        setList: (state: RootState, action) => {
            state.list = action.payload.data as ListData;
        },
        setSearch: (state: RootState, action) => {
            state.search = action.payload as SearchData;
        },
    }
});

export const store = configureStore({
    reducer: rootSlice.reducer
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const createAppSelector = createSelector;
export const {setList, setSearch} = rootSlice.actions;

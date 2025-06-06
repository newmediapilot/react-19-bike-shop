import { configureStore, createDynamicMiddleware, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { ListData, ListItem } from '@local/primitives/LTable';
import { SearchData } from '@local/components/Search';
import { ModeSelectType } from '@local/components/ModeSelect';

export type RootState = {
  list: ListData;
  detail?: ListItem;
  search?: SearchData;
  filter?: ModeSelectType;
  // TODO: put prefetch stuff under `@prefetch`
};

const rootSlice = createSlice({
  name: 'slices',
  initialState: {},
  reducers: {
    setPrefetch: (state: RootState, action) => {
      state[action.payload.key] = action.payload.data;
    },
    setDetail: (state: RootState, action) => {
      state.detail = action.payload.data as ListItem;
    },
    setSearch: (state: RootState, action) => {
      state.search = action.payload as SearchData;
    },
    setFilter: (state: RootState, action) => {
      state.filter = action.payload as ModeSelectType;
    },
  },
});

const dynamicMiddleware = createDynamicMiddleware();
const { addMiddleware } = dynamicMiddleware;
export const addAppMiddleware = addMiddleware;

// Apply custom middleware via `addAppMiddleware(middleware)`
export const store = configureStore({
  reducer: rootSlice.reducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(dynamicMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
// export const createAppSelector = createSelector;
export const { setDetail, setSearch, setFilter, setPrefetch } = rootSlice.actions;

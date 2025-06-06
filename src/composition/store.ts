import { ModeSelectType } from '@local/components/FilterRadioGroup';
import { configureStore, createDynamicMiddleware, createSlice } from '@reduxjs/toolkit';
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
  filter?: ModeSelectType;
};

export type PrefetchSetType = {
  key: string;
  payload: ListData | ListItem;
};

const rootSlice = createSlice({
  name: 'slices',
  initialState: {},
  reducers: {
    setStoreKey: (state: RootState, action) => {
      console.log('setStoreKey :: ', action.payload.key, action.payload.data);
      state[action.payload.key] = action.payload.data;
    },
    setDetail: (state: RootState, action) => {
      state.detail = action.payload.data as ListItem;
    },
    setSearch: (state: RootState, action) => {
      state.search = action.payload as string;
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
export const { setDetail, setSearch, setFilter, setStoreKey } = rootSlice.actions;

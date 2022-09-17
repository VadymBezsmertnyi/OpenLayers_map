import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from 'hooks/http.hook';
import { IInitialState } from 'types/main';

const initialState: IInitialState = {
  farms: [],
  message: '',
  serverConnect: true,
  loading: true,
};

export const fetchFarm = createAsyncThunk('fetchFarm', () => {
  const { request } = useHttp();
  return request(`${process.env.REACT_APP_BASE_URL}/farm`);
});

const mainReducer = createSlice({
  name: 'farmsReducer',
  initialState,
  reducers: {
    test: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFarm.fulfilled, (state, action) => {
        const { payload } = action;
        state.farms = payload;
        state.serverConnect = true;
        state.loading = false;
      })
      .addCase(fetchFarm.pending, (state) => {
        state.serverConnect = true;
        state.loading = true;
      })
      .addCase(fetchFarm.rejected, (state, action) => {
        state.message = action.error.message || '';
        state.serverConnect = false;
      });
  },
});

const { actions, reducer } = mainReducer;

export default reducer;

export const { test } = actions;

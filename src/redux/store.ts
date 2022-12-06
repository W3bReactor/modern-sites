import { configureStore } from '@reduxjs/toolkit';
import modal from './slices/modalSlice/slice';
import settings from './slices/settingsSlice/slice';

export const store = configureStore({
	reducer: { modal, settings },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

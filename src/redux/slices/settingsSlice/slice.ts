import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsState, themes } from './types';

const storage: themes | null = localStorage.getItem('theme') as themes;

const currTheme: themes = storage || themes.LIGHT;

const initialState: SettingsState = {
	theme: currTheme,
	burger: false,
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<themes>) => {
			state.theme = action.payload;
		},
		setOpenBurger: (state) => {
			state.burger = true;
		},
		setCloseBurger: (state) => {
			state.burger = false;
		},
	},
});

export const { setTheme, setOpenBurger, setCloseBurger } =
	settingsSlice.actions;

export default settingsSlice.reducer;

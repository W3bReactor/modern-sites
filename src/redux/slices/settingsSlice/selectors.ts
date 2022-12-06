import { RootState } from '../../store';

export const selectTheme = (state: RootState) => state.settings.theme;
export const selectBurger = (state: RootState) => state.settings.burger;

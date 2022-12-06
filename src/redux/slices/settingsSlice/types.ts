export interface SettingsState {
	theme: themes;
	burger: boolean;
}

export enum themes {
	DARK = 'dark',
	LIGHT = 'light',
}

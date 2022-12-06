import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalState } from './types';

const initialState: ModalState = {
	modalIsOpen: false,
	url: '',
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModalOpen: (state) => {
			state.modalIsOpen = true;
		},
		setModalClose: (state) => {
			state.modalIsOpen = false;
			state.url = '';
		},
		setUrl: (state, action: PayloadAction<string>) => {
			state.url = action.payload;
		},
	},
});

export const { setModalOpen, setModalClose, setUrl } = modalSlice.actions;

export default modalSlice.reducer;

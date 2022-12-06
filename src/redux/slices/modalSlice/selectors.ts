import { RootState } from '../../store';

export const selectModalIsOpen = (state: RootState) => state.modal.modalIsOpen;
export const selectModalUrl = (state: RootState) => state.modal.url;

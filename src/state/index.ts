import { store } from 'react-easy-state';

interface IState {
  text: string;
};

const defaultState: IState = {
  text: 'start typing...',
};

export const state = store({ ...defaultState });
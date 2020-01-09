import { store } from 'react-easy-state';

interface IState {
  text: string;
  cursor: number;
};

const defaultState: IState = {
  text: 'start typing...',
  cursor: 'start typing...'.length,
};

export const state = store({ ...defaultState });
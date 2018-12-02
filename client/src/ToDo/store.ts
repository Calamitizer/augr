import { createStore, Store } from 'redux';
import fullReducer from './reducers';
import { ToDoState, initialToDoState } from './types';

export type AugrStore = Store<ToDoState>;

export const configureStore = (preloadedState = initialToDoState) =>
  createStore(fullReducer, preloadedState);

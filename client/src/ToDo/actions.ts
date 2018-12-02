import { createAction, ActionType } from 'typesafe-actions';
import { ToDo } from 'augr/ToDo/types';
import shortid = require('shortid');

/*
 * ToDo Actions
 */
export enum ToDoActionType {
  ADD_ITEM = '@@todo/ADD',
  TOGGLE_ITEM = '@@todo/TOGGLE',
  CLEAR_ALL = '@@todo/CLEAR',
}

const makeToDo = (text: string): ToDo => ({
  id: shortid.generate(),
  text,
  completed: false,
});

export const toDoActions = {
  [ToDoActionType.ADD_ITEM]: createAction(ToDoActionType.ADD_ITEM, resolve => (toDoText: string) =>
    resolve(makeToDo(toDoText))
  ),

  [ToDoActionType.TOGGLE_ITEM]: createAction(
    ToDoActionType.TOGGLE_ITEM,
    resolve => (toDoId: string) => resolve(toDoId)
  ),

  [ToDoActionType.CLEAR_ALL]: createAction(ToDoActionType.CLEAR_ALL),
};

export type ToDoAction = ActionType<typeof toDoActions>;

/*
 * Filter Actions
 */
export enum FilterActionType {
  TOGGLE_FILTER = '@@filter/TOGGLE',
}

export const filterActions = {
  [FilterActionType.TOGGLE_FILTER]: createAction(FilterActionType.TOGGLE_FILTER),
};

export type FilterAction = ActionType<typeof filterActions>;

/*
 * All Actions
 */
export type _MyAnyAction = ToDoAction | FilterAction; // unused

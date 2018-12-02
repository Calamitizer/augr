import { Reducer } from 'redux';
import { action } from 'typesafe-actions';

export interface AugrState { // TODO: DeepReadOnly
  readonly loading: boolean;
  readonly data: number[];
  readonly errors?: string;
  readonly toDoState: ToDoState;
};

export interface ToDoState {
  toDos: ToDo[];
}

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
};

const initialState: AugrState = {
  loading: false,
  data: [],
  toDoState: {
    toDos: [],
  },
};

enum ToDoActionType {
  ADD_ITEM = '@@todo/ADD',
  TOGGLE_ITEM = '@@todo/TOGGLE',
};

const Actions = {
  addItem: (text: string) => createAction(ToDoActionType.ADD_ITEM, text),
  toggleItem: (id: number) => createAction(ToDoActionType.TOGGLE_ITEM, id),
};

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = {
  [actionCreator: string]: FunctionType;
};
// type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
// export type Actions = ActionsUnion<typeof Actions>;

// export type SubType<Base, Condition> = Pick<Base, {
//   [K in keyof Base]: Base[K] extends Condition
//     ? K
//     : never;
// }[keyof Base]>;

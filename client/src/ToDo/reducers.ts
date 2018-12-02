import { Reducer, combineReducers } from 'redux';
import { ToDoState, initialToDoState } from 'augr/ToDo/types';
import { ToDoAction, ToDoActionType, FilterAction, FilterActionType } from 'augr/ToDo/actions';

type ToDoReducer = Reducer<ToDoState['toDos'], ToDoAction>;
const toDoReducer: ToDoReducer = (state = initialToDoState.toDos, action) => {
  switch (action.type) {
    case ToDoActionType.ADD_ITEM: {
      return [...state, action.payload];
    }

    case ToDoActionType.TOGGLE_ITEM: {
      return state.map(toDo =>
        toDo.id === action.payload
          ? {
            ...toDo,
            completed: !toDo.completed,
          }
          : toDo
      );
    }

    case ToDoActionType.CLEAR_ALL: {
      return [];
    }

    default: {
      return state;
    }
  }
};

type FilterReducer = Reducer<ToDoState['filter'], FilterAction>;
const filterReducer: FilterReducer = (state = initialToDoState.filter, action) => {
  switch (action.type) {
    case FilterActionType.TOGGLE_FILTER: {
      return !state;
    }

    default: {
      return state;
    }
  }
};

const fullReducer = combineReducers<ToDoState>({
  toDos: toDoReducer,
  filter: filterReducer,
});

export default fullReducer;

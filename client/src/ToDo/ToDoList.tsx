import * as React from 'react';
import { Dispatch } from 'redux';
import { ToDo, ToDoState } from './types';
import ToDoComp from './ToDo';
import { connect } from 'react-redux';
import { toDoActions, ToDoActionType } from './actions';

interface OwnProps { }

interface StateProps {
  toDos: ToDo[];
}

interface DispatchProps {
  toggleToDo: (id: string) => void;
}

interface ToDoListProps extends
  React.HTMLProps<HTMLElement>,
  OwnProps,
  StateProps,
  DispatchProps { }

export const ToDoList: React.SFC<ToDoListProps> = ({ toDos, toggleToDo }) => {
  const makeToDo = ({ id, text, completed }: ToDo) => (
    <ToDoComp {...{
      key: id,
      text,
      completed,
      onClick: () => toggleToDo(id),
    }} />
  );

  return (
    <ul>
      {toDos.map(makeToDo)}
    </ul>
  );
};

const mapStateToProps = ({ toDos }: ToDoState, _props: OwnProps): StateProps => ({
  toDos,
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  _props: OwnProps
): DispatchProps => ({
  toggleToDo: (id: string) => {
    dispatch(toDoActions[ToDoActionType.TOGGLE_ITEM](id));
  },
});

const wrapped = connect<StateProps, DispatchProps, OwnProps, ToDoState>(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default wrapped;

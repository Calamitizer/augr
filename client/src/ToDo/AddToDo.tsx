import * as React from 'react';
import { ToDoState } from './types';
import { Dispatch } from 'redux';
import { toDoActions, ToDoActionType } from './actions';
import { connect } from 'react-redux';

interface OwnProps { }
interface StateProps { }
interface DispatchProps {
  createToDo: (text: string) => void;
  clearAll: () => void;
}

interface AddToDoProps extends
  React.HTMLProps<HTMLElement>,
  OwnProps,
  StateProps,
  DispatchProps { }

export const AddToDo: React.SFC<AddToDoProps> = ({ createToDo, clearAll }) => {
  let inputElement: HTMLInputElement;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();

        if (!inputElement.value.trim()) {
          return;
        }

        createToDo(inputElement.value);
        inputElement.value = '';
      }}>
        <input ref={node => {
          if (node != null) {
            inputElement = node;
          }
        }} />
        <button type="submit">
          Add ToDo
        </button>
        <button type="button" onClick={clearAll}>
          Clear All
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (_state: ToDoState, _props: OwnProps): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch, _props: OwnProps): DispatchProps => ({
  createToDo: (text: string) => {
    dispatch(toDoActions[ToDoActionType.ADD_ITEM](text));
  },
  clearAll: () => {
    dispatch(toDoActions[ToDoActionType.CLEAR_ALL]());
  },
})

const wrapped = connect<StateProps, DispatchProps, OwnProps, ToDoState>(
  mapStateToProps,
  mapDispatchToProps,
)(AddToDo);

export default wrapped;

import * as React from 'react';
import { Dispatch } from 'redux';
import { ToDoState } from 'augr/ToDo/types';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import ToDoList from 'augr/ToDo/ToDoList';
import AddToDo from 'augr/ToDo/AddToDo';

interface AugrOwnProps {
  myNumber: number;
}

interface AugrStateProps {
  myFilter: boolean;
}

interface AugrDispatchProps { }

interface AugrProps
  extends React.HTMLProps<HTMLElement>,
  RouteComponentProps,
  AugrOwnProps,
  AugrStateProps,
  AugrDispatchProps { }

export const Augr: React.SFC<AugrProps> = ({ myFilter }) => (
  <div className="foo">
    <span>Wow</span>
    <AddToDo />
    <hr />
    <ToDoList />
    <hr />
    <span>{myFilter ? 'on!' : 'off!'}</span>
  </div>
);

const mapStateToProps = (state: ToDoState, _props: AugrOwnProps): AugrStateProps => ({
  myFilter: state.filter,
});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _props: AugrOwnProps
): AugrDispatchProps => ({
  /* */
});

const wrapped = withRouter(
  connect<AugrStateProps, AugrDispatchProps, AugrOwnProps, ToDoState>(
    mapStateToProps,
    mapDispatchToProps
  )(Augr)
) as React.ComponentClass<AugrOwnProps>;

export default wrapped;

import * as React from 'react';

interface ToDoProps {
  text: string;
  completed: boolean;
  onClick: () => void;
}

const ToDoComp: React.SFC<ToDoProps> = ({ text, completed, onClick }) => (
  <li>
    <span
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
      {...{ onClick }}
    >
      {text}
    </span>
  </li>
);

export default ToDoComp

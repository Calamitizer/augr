import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { AugrStore } from 'augr/ToDo/store';
import Augr from 'augr/Augr/Augr';
import 'augr/Augr/augr.scss';

interface RootProps {
  store: AugrStore;
}

const Root: React.SFC<RootProps> = ({ store }) => (
  <Provider {...{ store }}>
    <div className="augr">
      <Route path="/" component={Augr} />
      <span>Hello world!</span>
    </div>
  </Provider>
);

export default Root;

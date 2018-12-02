import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from 'augr/Augr/Root';
import { configureStore } from 'augr/ToDo/store';

const store = configureStore();

const app = (
  <Router>
    <Root {...{ store }} />
  </Router>
);

const mountPoint = document.getElementById('mount-point');

render(app, mountPoint);

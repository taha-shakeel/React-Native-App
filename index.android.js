
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

function configureStore(initialSate){
 const enhancer = compose(
  applyMiddleware(thunkMiddleware,loggerMiddleware),
  );
 return createStore(reducer, initialSate, enhancer);
};

const store = configureStore({});

import {
  AppRegistry,
} from 'react-native';


const App = () => (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );

AppRegistry.registerComponent('Pecksih', () => App);

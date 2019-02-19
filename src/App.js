import React, { Component } from 'react';
import { Provider } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store';
//we want redux-thunk which is actually middleware for redux 
// which allows us to directly access dispatch method so that we can make asynchronus calls
class App extends Component {
  
  //createStore(RootReducer,[preloadedState(initial state)],[enhancer(like a middle ware etc)])
  render() {
    return (
      //provider holds store and store holds the state
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          {/* Added PostForm component Here */}
          <Postform />
          {/* Added Posts Component Here */}
          <Posts />

        </div>
      </Provider>
    );
  }
}

export default App;

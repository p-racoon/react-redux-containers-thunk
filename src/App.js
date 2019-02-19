import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';

class App extends Component {
  //this lifecycle method will be used to fetch the Posts from the API
  componentWillMount(){ //componentWillMount is deprecated in  the recentRelease now we have just:- componentDidMount() & componentWillUnmount()
    //this will run right away when the component will mount
    //so even before anything is displayed on the page it will run
    // console.log("123");
    // alert("from component will mount");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data))
    //now we would not want to put it here but in the application state, using redux
  }
  render() {
    return (
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
        {/* Added Posts Component Here */}
        <Posts />
      </div>
    );
  }
}

export default App;

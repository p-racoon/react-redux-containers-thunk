import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';

class App extends Component {
  //this lifecycle method will be used to fetch the Posts from the API
  componentDidMount(){ 
    //componentWillMount is deprecated in  the recentRelease now we have just:- componentDidMount() & componentWillUnmount()
    //componentDidMount() method runs after the component output has been rendered to the DOM
    //componentDidMount is the best place to fetch data, since we are requesting the data asynchronously,
    //https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/ 
    //hence  the component will render with empty data at least once
    //and once the data arrives it will be rerendered

    
    //this will run right away when the component will mount
    //so even before anything is displayed on the page it will run
    // console.log("123");
    // alert("from component will mount");
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data));
    // .then(alert("posts Loaded"));
    //now we would not want to put it here but in the application state, using redux
    // alert("after fetching data,end of componentDidMount");
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

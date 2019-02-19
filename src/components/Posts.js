import React, { Component } from 'react'

 class Posts extends Component {
  constructor(props){
    super(props);
    //here constructor is used to initialize the state
    this.state ={
      posts:[]
    }
  }
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
    .then(data=>this.setState({posts:data}));
    // .then(alert("posts Loaded"));
    //now we would not want to put it here but in the application state, using redux
    // alert("after fetching data,end of componentDidMount");
  }
  
  render() {
    const postItems=this.state.posts.map(
      post => <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    );
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
export default Posts;
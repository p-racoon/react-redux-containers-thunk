import React, { Component } from 'react'

class Postform extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form>
            <div>
                <label>Title:</label>
                <br/>
                <input type="text" name="title"/>
            </div>
            <br/>
            <div>
                <label>Body:</label>
                <br/>
                <textarea  name="body"/>
            </div>
            <br/>
            <div>
                <button type="submit" >Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default Postform;
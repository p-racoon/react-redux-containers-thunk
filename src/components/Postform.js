import React, { Component } from 'react';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);//Shift+Alt+Down Arrow Key to copy the line down
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleOnSubmit(e) {
        e.preventDefault();//this will prevent the submit button from reloading the page
        const newPost = {
            title: this.state.title,
            body: this.state.body
        }
        //this doesnt add to the dataqbase but it will give us the response back 
        //with the added post as if it were added to the database
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    render() {
        return (
            <div>
                <h2>Add Post</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <br />
                        <textarea name="body" value={this.state.body} onChange={this.handleOnChange} />
                    </div>
                    <br />
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Postform;
import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPosts = () => (dispatch) => {
    console.log("Inside FetchPosts");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const createPosts = (post) => (dispatch) => {
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(newPost)
    //     })
    //     .then(res => res.json())
        // .then(data => console.log(data))
}
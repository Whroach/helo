
const initialState = {
    posts: {},
    usersPosts: {}
}

//action type variables

const GET_POSTS = 'GET_POSTS'
const CREATE_POST = 'CREATE_POST'

export function getPosts(findPost){
    return {
        type: GET_POSTS,
        payload: { findPost }
    }
};

export function createPost(newPost){
    return {
        type: CREATE_POST,
        payload: {
            newPost
        }
    }
}

//export default function reducer

export default function postReducer(state = initialState, action){
    const { type, payload } = action

    switch(type){
        case GET_POSTS: 
        return {...state, posts: payload}

        case CREATE_POST: 
        return {...state, posts:payload}

        default: 
        return state
    }
}

const initialState = {
    posts: [],
    usersPosts: []
}

//action type variables

const GET_POSTS = 'GET_POSTS'

export function getPosts(title,image,content){
    return {
        type: GET_POSTS,
        payload: {
            title,
            image,
            content
        }
    }
};


//export default function reducer

export default function postReducer(state = initialState, action){
    const { type, payload } = action

    switch(type){
        case GET_POSTS: 
        return {...state, posts: payload}

        default: 
        return state
    }
}
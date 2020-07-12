
const initialState = {
    username: '',
    id: 0,
    profilePic: ''
};

const STORE_USER = 'STORE_USER'


export function findUser(id, username, profilePic) {
    return {
        type: STORE_USER,
        payload: {
            id, 
            username,
            profilePic
    }
}
};



export default function authReducer(state = initialState, action){

    const { type, payload } = action
    
    switch(type){
        case STORE_USER: 
            return {...state, username: payload, id: payload, profilePic: payload}
        default:
            return state;


    }
}
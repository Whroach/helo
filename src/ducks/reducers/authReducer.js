
const initialState = {
    user: {}
};

const STORE_USER = 'STORE_USER'


export function findUser(userObj) {
    return {
        type: STORE_USER,
        payload: userObj
}
};



export default function authReducer(state = initialState, action){

    const { type, payload } = action
    
    switch(type){
        case STORE_USER: 
            return {...state, user: payload}
        default:
            return state;


    }
}

const initialState = {
    user: {}
};

const STORE_USER = 'STORE_USER'
const LOGOUT_USER = 'LOGOUT_USER'


export function findUser(userObj) {
    return {
        type: STORE_USER,
        payload: userObj
}
};

export function logout(){
    return {
        type: LOGOUT_USER,
        payload: {}
    }

}



export default function authReducer(state = initialState, action){

    const { type, payload } = action
    
    switch(type){
        case STORE_USER: 
            return {...state, user: payload}
        case LOGOUT_USER:
            return {...state,user:payload}    
        default:
            return state;


    }
}
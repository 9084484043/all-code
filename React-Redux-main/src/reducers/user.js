const initialState = {
    firstName : '',
    lastName: '',
    city : '',
    phone :''
}

export default function user(state = initialState, action) {
    switch(action.type){
        case 'ADD_USER_NAME':
            return {
                ...state, 
                firstName: action.firstName, 
                lastName: action.lastName,
            }
        case 'ADD_CITY':
            return {...state, city : action.city}
        case 'ADD_PHONE':
            return {...state, phone : action.phone}
        default:
            return state
    }
}
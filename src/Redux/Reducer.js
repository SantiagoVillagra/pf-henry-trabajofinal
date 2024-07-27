import { GET_ALL_SHOES, ORDER_AND_FILTER,SEARCH_SHOES, LOGIN_USER } from "./ActionsTypes";

const initialState = {
    allShoes : [],
    searchedShoes: [],
    orderAndFilter: [],
    loginUser: []

}



const rootReducer = ( state = initialState, {type, payload}) => {

}


export default rootReducer;
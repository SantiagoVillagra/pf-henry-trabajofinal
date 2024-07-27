import { GET_ALL_SHOES, ORDER_AND_FILTER,SEARCH_SHOES, LOGIN_USER } from "./ActionsTypes";

import axios from "axios"



export  function getAllShoes(sneakers){
    // return function(dispatch) {
    //     axios("http://localhost:3001/countries")
    //     .then(({data}) => dispatch({type: GET_ALL_SHOES, payload: data}))
    // }
    return{
        type:GET_ALL_SHOES,
        payload: sneakers
    }
}

export  function orderAndFilter(checked){
    return{
        type:ORDER_AND_FILTER,
        payload: checked
    }
}

export  function searchShoes(shoeName){
    return{
        type:SEARCH_SHOES,
        payload: shoeName
    }
}

export  function loginUser(userData){
    return{
        type: LOGIN_USER,
        payload:userData
    }
}
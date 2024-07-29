import { GET_ALL_SHOES, ORDER_AND_FILTER_ACTION,SEARCH_SHOES, LOGIN_USER, GET_SHOE_BY_ID, LOGOUT_USER } from "./ActionsTypes";

import axios from "axios";



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

export function getShoeById(id){

     // return function(dispatch) {
    //     axios("http://localhost:3001/countries")
    //     .then(({data}) => dispatch({type: GET_ALL_SHOES, payload: data}))
    // }

// aca el link deberia ser: "el link al deploy/home/id"
    // return{
    //     type:GET_SHOE_BY_ID,
    //     payload: sneakers
    // }
}



export  function orderAndFilterAction(checked){
    return{
        type:ORDER_AND_FILTER_ACTION,
        payload: checked
    }
}

export  function searchShoes(shoeName){
    return{
        type:SEARCH_SHOES,
        payload: shoeName
    }
}

export  function loginUser(loggedUser){
    return{
        type: LOGIN_USER,
        payload:loggedUser
    }
}

export  function logoutUser(){
    return{
        type: LOGOUT_USER
    }
}
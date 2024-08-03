import { GET_ALL_SHOES, ORDER_AND_FILTER_ACTION,SEARCH_SHOES, LOGIN_USER, GET_SHOE_BY_ID, LOGOUT_USER } from "./ActionsTypes";

import axios from "axios";

export  function getAllShoes(sneakers){
    return function(dispatch) {
        axios("https://e-commerse-fc.onrender.com/api/shoes")
        .then(({data}) => dispatch({type: GET_ALL_SHOES, payload: data}))
        .catch(error => {
            console.error('Network Error:', error);
          });
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



export function orderAndFilterAction({ ordenQuePaso, filtrosQuePaso }) {
    return function(dispatch) {
      dispatch({
        type: ORDER_AND_FILTER_ACTION,
        payload: { ordenQuePaso, filtrosQuePaso },
      });
    };
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

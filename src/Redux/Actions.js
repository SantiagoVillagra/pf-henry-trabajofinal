import { GET_ALL_SHOES, ORDER_AND_FILTER_ACTION,SEARCH_SHOES, LOGIN_USER, GET_SHOE_BY_ID, LOGOUT_USER } from "./ActionsTypes";
import Swal from 'sweetalert2';

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

// export function getShoeById(id) {
//     return function(dispatch) {
//         axios(`https://e-commerse-fc.onrender.com/api/shoes/id/${id}`)
//             .then(({ data }) => dispatch({ type: GET_SHOE_BY_ID, payload: data }))
//             .catch(error => {
//                 console.error("Error fetching shoe data:", error.message);
//                 // Puedes despachar una acción de error si tienes una para manejar esto en tu reducer
//                 dispatch({ type: "FETCH_SHOE_ERROR", payload: error.message });
//             });
//     };
// }
export function getShoeById(id) {
    return function(dispatch) {
        axios(`https://e-commerse-fc.onrender.com/api/shoes/id/${id}`)
            .then(({ data }) => {
                dispatch({ type: GET_SHOE_BY_ID, payload: data });
            })
            .catch(error => {
                console.error("Error fetching shoe data:", error);
            });
    };
}

export function orderAndFilterAction({ ordenQuePaso, filtrosQuePaso }) {
    return function(dispatch) {
      dispatch({
        type: ORDER_AND_FILTER_ACTION,
        payload: { ordenQuePaso, filtrosQuePaso },
      });
    };
  }

  export function searchShoes(shoeName) {
    return (dispatch, getState) => {
        const allShoes = getState().allShoes;
        const lowerCaseShoeName = shoeName.toLowerCase();

        const filteredShoes = allShoes.filter(shoe =>
            shoe.name.toLowerCase().includes(lowerCaseShoeName)
        );

        if (filteredShoes.length === 0) {
            Swal.fire({
                icon: 'info',
                title: 'No se encontraron productos',
                text: `No hay productos que coincidan con "${shoeName}".`,
            });
        }

        dispatch({ type: SEARCH_SHOES, payload: filteredShoes });
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

import {
  GET_ALL_SHOES,
  ORDER_AND_FILTER_ACTION,
  CREATE_SHOE,
  SEARCH_SHOES,
  LOGIN_USER,
  GET_SHOE_BY_ID,
  LOGOUT_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  TAKE_ITEM,
  DELETE_SHOE,
  ADD_WISH,
  REMOVE_WISH,
  UPDATE_SHOE,
  SET_USERS,
  SET_USERS_ERROR,
  UPDATE_USER_BAN_STATUS,
  DELETE_USER,
  USER_INFO_CHANGE,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS
} from "./ActionsTypes";
import Swal from "sweetalert2";

import axios from "axios";

export function getAllShoes(sneakers) {
  return function (dispatch) {
    axios("https://e-commerse-fc.onrender.com/api/shoes")
      .then(({ data }) => dispatch({ type: GET_ALL_SHOES, payload: data }))
      .catch((error) => {
        console.error("Network Error:", error);
      });
  };
}

export const createShoe = (shoeData) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("file", shoeData.image);
    formData.append("upload_preset", "wp5af07o"); // Tu upload preset
    formData.append("cloud_name", "dbkg9dzwt");   // Tu cloud name
    console.log(shoeData.image)
    const uploadResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/dbkg9dzwt/image/upload",
      formData
    );

    const imageUrl = uploadResponse.data.secure_url;
    const newShoeData = { ...shoeData, image: imageUrl };

    const response = await axios.post(
      "https://e-commerse-fc.onrender.com/api/shoes",
      newShoeData
    );

    dispatch({ type: CREATE_SHOE, payload: response.data });

    Swal.fire({ icon: 'success', title: '¡Éxito!', text: 'El producto se ha creado correctamente.' });
  } catch (error) {
    console.error("Error al crear el producto:", error);

    Swal.fire({ icon: 'error', title: 'Error', text: 'Hubo un problema al crear el producto. Intenta nuevamente.' });
  }
};

export function getShoeById(id) {
  return function (dispatch) {
    axios(`https://e-commerse-fc.onrender.com/api/shoes/id/${id}`)
      .then(({ data }) => {
        dispatch({ type: GET_SHOE_BY_ID, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching shoe data:", error);
      });
  };
}

export function orderAndFilterAction({ ordenQuePaso, filtrosQuePaso }) {
  return function (dispatch) {
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

    const filteredShoes = allShoes.filter((shoe) =>
      shoe.name.toLowerCase().includes(lowerCaseShoeName)
    );

    if (filteredShoes.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No se encontraron productos",
        text: `No hay productos que coincidan con "${shoeName}".`,
      });
    }

    dispatch({ type: SEARCH_SHOES, payload: filteredShoes });
  };
}

export const deleteShoe = (shoeId) => async (dispatch) => {
    try {
      console.log('Sending delete request for shoe ID:', shoeId);
      await axios.delete(`https://e-commerse-fc.onrender.com/api/shoes/${shoeId}`);
      dispatch({
        type: DELETE_SHOE,
        payload: shoeId
      });
    } catch (error) {
      console.error("Error deleting shoe:", error.response ? error.response.data : error.message);
    }
  };

export function loginUser(loggedUser) {
  return {
    type: LOGIN_USER,
    payload: loggedUser,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export const addToCart = (shoe) => {
  return {
    type: ADD_TO_CART,
    payload: shoe,
  };
};

export const removeFromCart = (shoe) => {
  return {
    type: REMOVE_FROM_CART,
    payload: shoe,
  };
};

export const takeItem = (item) => {
  return {
    type: TAKE_ITEM,
    payload: item,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}

export const addWish = (id) => {
  return function (dispatch) {
    axios(`https://e-commerse-fc.onrender.com/api/shoes/id/${id}`)
      .then(({ data }) => {
        dispatch({ type: ADD_WISH, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching shoe data:", error);
      });
  };
}

export const removeWish = (id) => {
    return {
        type: REMOVE_WISH,
        payload: id
    }
}
// export const updateShoe = (shoeData) => async (dispatch) => {
//   try {
//       // Usamos shoeData.id para obtener el ID del zapato
//       const response = await axios.put(`https://e-commerse-fc.onrender.com/api/shoes/${shoeData.id}`, shoeData);

//       dispatch({
//           type: UPDATE_SHOE,
//           payload: response.data // Esto asume que la API devuelve los datos actualizados
//       });
//   } catch (error) {
//       console.error('Error updating shoe:', error);
//       // Puedes manejar el error de diferentes formas, por ejemplo:
//       dispatch({
//           type: 'UPDATE_SHOE_FAIL',
//           payload: error.response ? error.response.data : 'Network Error'
//       });
//   }

// };

export const updateShoe = (shoeData) => async (dispatch) => {
  try {
    // Verificar que shoeData tenga un ID y todos los campos necesarios
    if (!shoeData.id) {
      throw new Error('ID del zapato es requerido');
    }

    // Realizar la solicitud PUT al servidor para actualizar el zapato
    const response = await axios.put(
      `https://e-commerse-fc.onrender.com/api/shoes/${shoeData.id}`,
      shoeData,
      {
        headers: {
          'Content-Type': 'application/json', // Asegúrate de que el tipo de contenido sea correcto
        },
      }
    );

    // Despachar la acción para actualizar el estado en Redux
    dispatch({
      type: UPDATE_SHOE,
      payload: response.data, // Esto asume que la API devuelve los datos actualizados
    });
  } catch (error) {
    console.error('Error updating shoe:', error);
    // Despachar una acción para manejar el error
    dispatch({
      type: 'UPDATE_SHOE_FAIL',
      payload: error.response ? error.response.data : 'Network Error',
    });
  }
};
export const getUsers = () => async dispatch => {
  try {
    const response = await axios.get('https://e-commerse-fc.onrender.com/api/users');
    dispatch({
      type: SET_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    dispatch({
      type: SET_USERS_ERROR,
      payload: error.message,
    });
  }
};

export const updateUserBanStatus = (userId, banStatus) => async dispatch => {
  try {
    const response = await axios.put(`https://e-commerse-fc.onrender.com/api/users/${userId}`, { ban: banStatus });
    dispatch({
      type: UPDATE_USER_BAN_STATUS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error updating user ban status:', error);
    // Puedes manejar errores aquí si lo deseas
  }
};
export const deleteUser = (userId) => async (dispatch) => {
  try {
    // Enviar solicitud para eliminar el usuario
    await axios.delete(`https://e-commerse-fc.onrender.com/api/users/${userId}`);
    
    // Dispatch de la acción para actualizar el estado en Redux
    dispatch({
      type: DELETE_USER,
      payload: userId
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    dispatch({
      type: SET_USERS_ERROR,
      payload: error.message
    });
  }
};

export const userInfoChange = (userId, updatedData) => async(dispatch) =>{

  try {
    const response = await axios.put(`https://e-commerse-fc.onrender.com/api/users/${userId}`, updatedData)

    dispatch({
      type: USER_INFO_CHANGE,
      payload: response.data
    });
  } catch (error) {
    console.log(error.message)
  }
}

export const addAddress = (address) =>  async (dispatch) =>{
  try {
    const response = await axios.post(`https://e-commerse-fc.onrender.com/api/useraddresses`, address)
    console.log(response.data)
    dispatch( {
      type: ADD_ADDRESS,
      payload: response.data.addresses
    })
  } catch (error) {
    console.log(error)
  }
  
}

export const deleteAddress = (idx) => {
  return {
    type: DELETE_ADDRESS,
    payload: idx
  }
}

export const editAddress = (index, address) => {
  return {
    type: EDIT_ADDRESS,
    payload: {indexToEdit: index, editedAddress: address}
  }
}
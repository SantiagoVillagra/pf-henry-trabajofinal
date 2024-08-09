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
  REMOVE_WISH
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
    // Subir la imagen a Cloudinary
    const formData = new FormData();
    formData.append("file", shoeData.image);
    formData.append("upload_preset", "your_upload_preset");
    formData.append("cloud_name", "your_cloud_name");

    const uploadResponse = await axios.post(
      "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
      formData
    );

    // Obtener la URL de la imagen desde la respuesta de Cloudinary
    const imageUrl = uploadResponse.data.secure_url;

    // Crear un nuevo objeto con los datos del producto y la URL de la imagen
    const newShoeData = {
      ...shoeData,
      image: imageUrl,
    };

    // Enviar los datos del nuevo producto a tu backend
    const response = await axios.post(
      "https://e-commerse-fc.onrender.com/api/shoes",
      newShoeData
    );

    // Despachar la acción con los datos del producto creado
    dispatch({
      type: CREATE_SHOE,
      payload: response.data,
    });

    // Mostrar alerta de éxito
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'El producto se ha creado correctamente.',
    });

  } catch (error) {
    console.error("Error al crear el producto:", error);

    // Mostrar alerta de error
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema al crear el producto. Intenta nuevamente.',
    });
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

export const addWish = (shoe) => {
    return {
        type: ADD_WISH,
        payload: shoe
    }
}

export const removeWish = (shoe) => {
    return {
        type: REMOVE_WISH,
        payload: shoe
    }
}

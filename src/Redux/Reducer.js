import {
  GET_ALL_SHOES,
  ORDER_AND_FILTER_ACTION,
  SEARCH_SHOES,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_ITEM,
  TAKE_ITEM,
  GET_SHOE_BY_ID,
  CREATE_SHOE,
  ADD_WISH,
  REMOVE_WISH,
  DELETE_SHOE,
  UPDATE_SHOE,
  SET_USERS,
  SET_USERS_ERROR,
  UPDATE_USER_BAN_STATUS,
  DELETE_USER,
  USER_INFO_CHANGE
} from "./ActionsTypes";

const initialState = {
  allShoes: [],
  searchedShoes: [],
  orderAndFilter: [],
  loggedUserData: JSON.parse(localStorage.getItem("userData")) || {},
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  detail: [],
  users: [],
  error: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SHOES:
      return { ...state, allShoes: payload };

    case SEARCH_SHOES:
      return {
        ...state,
        searchedShoes: payload,
      };

    case ORDER_AND_FILTER_ACTION:
      const checked = payload;

      const brandsToApply = Object.keys(checked.filtrosQuePaso.brands).filter(
        (key) => checked.filtrosQuePaso.brands[key]
      );
      const sportsToApply = Object.keys(checked.filtrosQuePaso.sports).filter(
        (key) => checked.filtrosQuePaso.sports[key]
      );
      const gendersToApply = Object.keys(checked.filtrosQuePaso.genders).filter(
        (key) => checked.filtrosQuePaso.genders[key]
      );

      const copyAllShoes = [...state.allShoes];
      const filteredSneakers = copyAllShoes.filter((sneaker) => {
        return (
          (brandsToApply.length
            ? brandsToApply.some((brandTA) => brandTA === sneaker.brand)
            : true) &&
          (sportsToApply.length
            ? sportsToApply.some((sportTA) => sportTA === sneaker.sport)
            : true) &&
          (gendersToApply.length
            ? gendersToApply.some((genderTA) => genderTA === sneaker.gender)
            : true)
        );
      });

      const orderToApply = checked.ordenQuePaso.order;
      let orderedSneakers = [];

      if (orderToApply) {
        orderedSneakers = filteredSneakers.sort((a, b) => {
          return orderToApply === "menor"
            ? a.price - b.price
            : b.price - a.price;
        });
        console.log(orderedSneakers);
        return {
          ...state,
          orderAndFilter: orderedSneakers,
        };
      }

      return { ...state, orderAndFilter: filteredSneakers };

    case LOGIN_USER:
      const { isAdmin, username, wishList, shoppingHistory } = payload;
      return {
        ...state,
        loggedUserData: { isAdmin, username,email, wishList, shoppingHistory, addresses, },
      };

    case LOGOUT_USER:
      return { ...state, loggedUserData: {} };

    case GET_SHOE_BY_ID:
      return { ...state, detail: payload };

    case ADD_TO_CART:
      const shoeId = payload;
      return { ...state, cart: [...state.cart, { item: shoeId, qty: 1 }] };

    case REMOVE_FROM_CART:
      const shoeToRemoveId = payload.id;
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.item.id !== shoeToRemoveId
        ),
      };

    case ADD_ITEM:
      const shoeToAddId = payload.id;
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.item.id === shoeToAddId) {
            return {
              ...cartItem,
              qty: cartItem.qty + 1,
            };
          }
          return cartItem;
        }),
      };

    case TAKE_ITEM:
      const shoeToTakeId = payload.id;
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.item.id === shoeToTakeId && cartItem.qty > 1) {
            return {
              ...cartItem,
              qty: cartItem.qty - 1,
            };
          }
          return cartItem;
        }),
      };

    case CREATE_SHOE:
      return {
        ...state,
        allShoes: [...state.allShoes, payload],
      };

    case DELETE_SHOE:
      return {
        ...state,
        allShoes: state.allShoes.filter((shoe) => shoe.ID !== payload),
      };

    case ADD_WISH:
      return {
        ...state,
        loggedUserData: { ...state.loggedUserData },
      };

    case UPDATE_SHOE:
      if (payload.error) {
        return {
          ...state,
          updateError: payload.error,
        };
      } else {
        return {
          ...state,
          detail: {
            ...state.detail,
            [payload.data.id]: payload.data,
          },
          updateError: null,
        };
      }

    case SET_USERS:
      return {
        ...state,
        users: payload,
      };
    case UPDATE_USER_BAN_STATUS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === payload.id ? payload : user
        ),
      };
      

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload),
      };
      
    case SET_USERS_ERROR:
      return {
        ...state,
        error: payload,
      };

      case USER_INFO_CHANGE:
        return{
          ...state,
          loggedUserData:payload
        }

    default:
      return { ...state };
  }
};

export default rootReducer;

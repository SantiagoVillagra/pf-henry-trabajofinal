
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
  GET_SHOE_BY_ID
} from "./ActionsTypes";

const initialState = {
  allShoes: [],
  searchedShoes: [],
  orderAndFilter: [],
  loggedUserData: {},
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  detail:[]
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SHOES:
      return { ...state, allShoes: payload };

      case SEARCH_SHOES:
        return {
            ...state,
            searchedShoes: payload
        };

    case ORDER_AND_FILTER_ACTION:
      const checked = payload 

      const brandsToApply = Object.keys(checked.filtrosQuePaso.brands).filter(
        (key) => checked.filtrosQuePaso.brands[key]
      );
      const sportsToApply = Object.keys(checked.filtrosQuePaso.sports).filter(
        (key) => checked.filtrosQuePaso.sports[key]
      );
      const gendersToApply = Object.keys(checked.filtrosQuePaso.genders).filter(
        (key) => checked.filtrosQuePaso.genders[key]
      );

      const copyAllShoes = [...state.allShoes]
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
            ...state, orderAndFilter: orderedSneakers 
            
        };
      }

      return { ...state, orderAndFilter: filteredSneakers };
    
    case LOGIN_USER: 
    
      const {isadmin, username} = payload
      return {...state, loggedUserData: {isadmin, username}}

    case LOGOUT_USER:
      return {...state, loggedUserData: {}}

    case GET_SHOE_BY_ID:
      return{...state, detail:payload}

      case ADD_TO_CART:
        const shoeId = payload
        return {...state, cart: [...state.cart, {item: shoeId, qty: 1}]}

    case REMOVE_FROM_CART: 
        const shoeToRemoveId = payload
        return {...state, cart: state.cart.filter(cartItem => cartItem.item !== shoeToRemoveId)}
        
    case ADD_ITEM:
        const shoeToAddId = payload
        return {...state, cart: state.cart.map(cartItem => {
            if (cartItem.item === shoeToAddId) {
                return {
                    ...cartItem,
                    qty: cartItem.qty+1
                }
            }
            return cartItem
        })}

        case TAKE_ITEM:
            const shoeToTakeId = payload
            return {...state, cart: state.cart.map(cartItem => {
                if (cartItem.item === shoeToTakeId && cartItem.qty > 0) {
                    return {
                        ...cartItem,
                        qty: cartItem.qty-1
                    }
                }
                return cartItem
            })}

    default:
        return {...state};
  }

};

export default rootReducer;

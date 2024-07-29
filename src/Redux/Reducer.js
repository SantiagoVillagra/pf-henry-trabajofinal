
import {
  GET_ALL_SHOES,
  ORDER_AND_FILTER_ACTION,
  SEARCH_SHOES,
  LOGIN_USER,
  LOGOUT_USER
} from "./ActionsTypes";

const initialState = {
  allShoes: [],
  searchedShoes: [],
  orderAndFilter: [],
  loggedUserData: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SHOES:
      return { ...state, allShoes: payload };

    case SEARCH_SHOES:
      return { ...state, searchedShoes: payload };


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

    default:
        return {...state};
  }

};

export default rootReducer;

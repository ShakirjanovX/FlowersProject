const GETSEASONFLOWERS = "GETSEASONFLOWERS";
const GETECLUSIVEFLOWERS = "GETECLUSIVEFLOWERS"
const CHANGE_IS_SHOOSE = 'CHANGE_IS_SHOOSE'
const GET_FAVOURITE_FLOWERS = 'GET_FAVOURITE_FLOWERS'
const DELETE_FLOWER = 'DELETE_FLOWER'
const PUT_LIKE = 'PUT_LIKE'
const PUT_EX_LIKE = 'PUT_EX_LIKE'
const REMOVE_EX_LIKE = 'REMOVE_EX_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'
const CHANGE_ISHOW = 'CHANGE_ISHOW';
const GET_USER = 'GET_USER'
const IS_PROFIL = 'IS_PROFIL'
const defaultState = {
  seasonFlowers: [],
  exclusiveFlowers: [],
  isShow: false,
  user: {},
  isProfil: false,
  isChoose: false,
  favouritesArr: []
};
export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GETSEASONFLOWERS:

      return {
        ...state,
        seasonFlowers: [...action.payload],
      };
    case GETECLUSIVEFLOWERS:
      return {
        ...state,
        exclusiveFlowers: [...action.payload]
      }
    case CHANGE_ISHOW:
      return {
        ...state, isShow: action.payload
      }
    case GET_USER:
      return {
        ...state, user: localStorage.setItem('user', JSON.stringify(action.payload)),


      }
    case IS_PROFIL:
      return {
        ...state, isProfil: localStorage.setItem('test', action.payload)
      }
    case CHANGE_IS_SHOOSE:
      return {
        ...state, isChoose: action.payload
      }
    case PUT_LIKE:
      let new_flowers_put = state.seasonFlowers.map((elem) => {
          if (elem.id === action.payload.id) {
            return {...elem, liked: true,};
          }
          return elem;
        })
      localStorage.setItem('flowers', JSON.stringify(new_flowers_put))
      return {...state, seasonFlowers: new_flowers_put};
    case REMOVE_LIKE:
      let new__flowers_remove = state.seasonFlowers.map((elem) => {
        if (elem.id === action.payload.id) {
          return {...elem, liked: false};
        }
        return elem;
      })
      localStorage.setItem('flowers', JSON.stringify(new__flowers_remove))
      return {...state, seasonFlowers: new__flowers_remove};
    case GET_FAVOURITE_FLOWERS:
      localStorage.setItem('favorite_flowers', JSON.stringify([...state.favouritesArr, {...action.payload}]))
      return {
        ...state,
        favouritesArr: [...state.favouritesArr, {...action.payload}]
      }
      case PUT_EX_LIKE:
        let new_ex_flowers_put = state.exclusiveFlowers.map((elem) => {
            if (elem.id === action.payload.id) {
              return {...elem, liked: true,};
            }
            return elem;
          })
        localStorage.setItem('EXflowers', JSON.stringify(new_ex_flowers_put))
        return {...state, exclusiveFlowers: new_ex_flowers_put};
        case REMOVE_EX_LIKE:
          console.log('sss');
          let new__ex_flowers_remove = state.exclusiveFlowers.map((elem) => {
            if (elem.id === action.payload.id) {
              return {...elem, liked: false};
            }
            return elem;
          })
          localStorage.setItem('EXflowers', JSON.stringify(new__ex_flowers_remove))
          return {...state, exclusiveFlowers: new__ex_flowers_remove};
          case DELETE_FLOWER:
            if(localStorage.getItem('favorite_flowers')){
              let new_favourite_ar = JSON.parse(localStorage.getItem('favorite_flowers')).filter((favourite) => favourite.id !== action.payload.id)
              localStorage.setItem('favorite_flowers', new_favourite_ar)
              
              return {...state, favouritesArr: new_favourite_ar}
            }
            else{
              let new_favourite_ar = state.favouritesArr.filter((favourite) => favourite.id !== action.payload.id)
              localStorage.setItem('favorite_flowers', new_favourite_ar)
              return {...state, favouritesArr: new_favourite_ar}
              
            }
            
    
    default:
      return state;
  }
};


export const getFlowersAction = (payload) => {
  return {
    type: GETSEASONFLOWERS,
    payload,
  };
};

export const getExclusiveFlowersAction = (payload) => {
  return {
    type: GETECLUSIVEFLOWERS,
    payload,
  };
};
export const changeIsShowAction = (payload) => {
  return {
    type: CHANGE_ISHOW,
    payload,
  }
}

export const getUserAction = (payload) => {
  return {
    type: GET_USER,
    payload,
  }
}


import { 
  ADD,
  REMOVE,
  CHANGE_NAME_REQUEST,
  CHANGE_NAME_SUCCESS,
  CHANGE_NAME_FAIL,
  CLEAR_ALL,
} from "../constants/redux";

const initialState = {
  loading: false,
  counter: 1,
  name: "Renan",
  error: false,
}

/* 
  state = variaveis do sistema
  action = acoes 
  action.type = tipo de acao que vou executar
  action.payload = dados que vou carregar 
*/

export function myReducer(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        counter: action.payload,
      }

    case REMOVE:
      return {
        ...state,
        counter: action.payload,
      }

    case CHANGE_NAME_REQUEST: 
      return { 
        ...state,
        loading: true,
      }

    case CHANGE_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.payload
      }

    case CHANGE_NAME_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state;
  }
}
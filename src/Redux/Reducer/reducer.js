
import { DELETE_USER, FETCH_POSTS, LOGIN, EDIT_USER, FETCH_EDIT_USER } from '../Actions/type';

const initialState = {
  items: [],
  item: {},
  visible: false
}

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case LOGIN:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        items: state.items.filter((id) => id !== action.payload)
      };

    case FETCH_EDIT_USER:
      return {
        ...state,
        items: action.payload
      };

    case EDIT_USER:
      return {
        ...state,
        items: state.items.map(
          (item) => item.id === action.payload.id ? { ...item, title: action.payload.title, body: action.payload.body } : item)
      };

      case "SHOW":
        return { 
          ...state, 
          visible: true 
        };
    case "HIDE":
        return { 
          ...state, 
          visible: false 
        };

    default:
      return state;
  }
}


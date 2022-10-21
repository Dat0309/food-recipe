import {
  MENU_DETAILS_FAIL,
  MENU_DETAILS_REQUEST,
  MENU_DETAILS_SUCCESS,
  MENU_LIST_FAIL,
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
} from "../Constants/menuConstants";

export const menuesReducer = (state = { menues: [] }, action) => {
  switch (action.type) {
    case MENU_LIST_REQUEST:
      return { loading: true, menues: [] };
    case MENU_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload.menues,
      };
    case MENU_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuesDetailReducer = (state = { menu: {} }, action) => {
  switch (action.type) {
    case MENU_DETAILS_REQUEST:
      return { ...state, loading: true };
    case MENU_DETAILS_SUCCESS:
      return { loading: false, menu: action.payload };
    case MENU_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

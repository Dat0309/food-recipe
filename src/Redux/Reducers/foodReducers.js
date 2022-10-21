import {
  FOOD_CREATE_REVIEW_FAIL,
  FOOD_CREATE_REVIEW_REQUEST,
  FOOD_CREATE_REVIEW_RESET,
  FOOD_CREATE_REVIEW_SUCCESS,
  FOOD_DETAILS_FAIL,
  FOOD_DETAILS_REQUEST,
  FOOD_DETAILS_SUCCESS,
  FOOD_LIST_FAIL,
  FOOD_LIST_REQUEST,
  FOOD_LIST_SUCCESS,
} from "../Constants/foodConstants";

export const foodListReducer = (state = { foods: [] }, action) => {
  switch (action.type) {
    case FOOD_LIST_REQUEST:
      return { loading: true, foods: [] };
    case FOOD_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        foods: action.payload.foods,
      };
    case FOOD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const foodListByCategoryIdReducer = (state = { foods: [] }, action) => {
  switch (action.type) {
    case FOOD_LIST_REQUEST:
      return { loading: true, foods: [] };
    case FOOD_LIST_SUCCESS:
      return {
        loading: false,
        pages: action.payload.pages,
        page: action.payload.page,
        foods: action.payload.foods,
      };
    case FOOD_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const foodDetailsReducer = (state = { food: {} }, action) => {
  switch (action.type) {
    case FOOD_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FOOD_DETAILS_SUCCESS:
      return { loading: false, food: action.payload };
    case FOOD_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

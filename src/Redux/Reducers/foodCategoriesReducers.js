import {
  FOOD_CATEGORY_DETAILS_FAIL,
  FOOD_CATEGORY_DETAILS_REQUEST,
  FOOD_CATEGORY_DETAILS_SUCCESS,
  FOOD_CATEGORY_LIST_FAIL,
  FOOD_CATEGORY_LIST_REQUEST,
  FOOD_CATEGORY_LIST_SUCCESS,
} from "../Constants/foodCategoriesConstants";

export const foodCategoriesReducer = (
  state = { foodCategories: [] },
  action
) => {
  switch (action.type) {
    case FOOD_CATEGORY_LIST_REQUEST:
      return { loading: true, foodCategories: [] };
    case FOOD_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        foodCategories: action.payload.foodCategories,
      };
    case FOOD_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const foodCategoriesDetailReducer = (
  state = { foodCategory: {} },
  action
) => {
  switch (action.type) {
    case FOOD_CATEGORY_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FOOD_CATEGORY_DETAILS_SUCCESS:
      return { loading: false, foodCategory: action.payload };
    case FOOD_CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

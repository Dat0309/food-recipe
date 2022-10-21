import axios from "axios";
import {
  FOOD_CATEGORY_DETAILS_FAIL,
  FOOD_CATEGORY_DETAILS_REQUEST,
  FOOD_CATEGORY_DETAILS_SUCCESS,
  FOOD_CATEGORY_LIST_FAIL,
  FOOD_CATEGORY_LIST_REQUEST,
  FOOD_CATEGORY_LIST_SUCCESS,
} from "../Constants/foodCategoriesConstants";

export const listFoodCategories = () => async (dispatch) => {
  try {
    dispatch({ type: FOOD_CATEGORY_LIST_REQUEST });
    const { data } = await axios.get(`/api/v1/categories`);
    dispatch({ type: FOOD_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FOOD_CATEGORY_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listFoodCategoriesDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOOD_CATEGORY_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/categories/${id}`);
    dispatch({ type: FOOD_CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FOOD_CATEGORY_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

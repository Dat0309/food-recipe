import axios from "axios";
import {
  FOOD_DETAILS_FAIL,
  FOOD_DETAILS_REQUEST,
  FOOD_DETAILS_SUCCESS,
  FOOD_LIST_FAIL,
  FOOD_LIST_REQUEST,
  FOOD_LIST_SUCCESS,
} from "../Constants/foodConstants";

export const listFood =
  (keyword = " ", pageNumber = " ") =>
  async (dispatch) => {
    try {
      dispatch({ type: FOOD_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/v1/food?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: FOOD_LIST_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: FOOD_LIST_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const listFoodByCategoriesId = (catId) => async (dispatch) => {
  try {
    dispatch({ type: FOOD_LIST_REQUEST });
    const { data } = await axios.get(`/api/v1/food/category-id/${catId}`);
    dispatch({ type: FOOD_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FOOD_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const foodDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOOD_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/food/${id}`);
    dispatch({ type: FOOD_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: FOOD_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

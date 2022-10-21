import axios from "axios";
import {
  RECIPE_CREATE_FAIL,
  RECIPE_CREATE_REQUEST,
  RECIPE_CREATE_REVIEW_FAIL,
  RECIPE_CREATE_REVIEW_REQUEST,
  RECIPE_CREATE_REVIEW_SUCCESS,
  RECIPE_CREATE_SUCCESS,
  RECIPE_DETAILS_FAIL,
  RECIPE_DETAILS_REQUEST,
  RECIPE_DETAILS_SUCCESS,
  RECIPE_LIST_FAIL,
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_MY_LIST_REQUEST,
} from "../Constants/recipeConstants";
import { logout } from "./userActions";

/**
 *
 * @param {Từ khoá dùng để tìm kiếm} keyword
 * @param {Số trang} pageNumber
 * @returns
 */
export const listRecipe =
  (keyword = " ", pageNumber = " ") =>
  async (dispatch) => {
    try {
      dispatch({ type: RECIPE_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/v1/recipe?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: RECIPE_LIST_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: RECIPE_LIST_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

/**
 *
 * @param {} categoriesId
 * @returns
 */
export const listRecipeByCategoriesId = (categoriesId) => async (dispatch) => {
  try {
    dispatch({ type: RECIPE_LIST_REQUEST });
    const { data } = await axios.get(
      `/api/v1/recipe/category-id/${categoriesId}`
    );
    dispatch({ type: RECIPE_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: RECIPE_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * @param {id recipe} id
 * @returns
 */
export const recipeDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: RECIPE_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/recipe/${id}`);
    dispatch({ type: RECIPE_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: RECIPE_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * @param {} recipeId
 * @param {*} review
 * @returns
 */
export const createRecipeReview =
  (recipeId, review) => async (dispatch, getState) => {
    try {
      dispatch({ type: RECIPE_CREATE_REVIEW_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/v1/recipe/${recipeId}/review`, review, config);
      dispatch({ type: RECIPE_CREATE_REVIEW_SUCCESS });
    } catch (err) {
      const message =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;

      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: RECIPE_CREATE_REVIEW_FAIL,
        payload: message,
      });
    }
  };

/**
 *
 * @param {*} recipe
 * @returns
 */
export const createRecipe = (recipe) => async (dispatch, getState) => {
  try {
    dispatch({ type: RECIPE_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/recipe`, recipe, config);
    dispatch({ type: RECIPE_CREATE_SUCCESS, payload: data });
  } catch (err) {
    const message =
      err.response ** err.response.data.message
        ? err.response.data.message
        : err.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: RECIPE_CREATE_FAIL,
      payload: message,
    });
  }
};

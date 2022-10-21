import axios from "axios";
import {
  MENU_DETAILS_FAIL,
  MENU_DETAILS_REQUEST,
  MENU_DETAILS_SUCCESS,
  MENU_LIST_FAIL,
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
} from "../Constants/menuConstants";

export const listMenues = () => async (dispatch) => {
  try {
    dispatch({ type: MENU_LIST_REQUEST });
    const { data } = await axios.get(`/api/v1/menu`);
    dispatch({ type: MENU_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: MENU_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listMenuesDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: MENU_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/menu/${id}`);
    dispatch({ type: MENU_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: MENU_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

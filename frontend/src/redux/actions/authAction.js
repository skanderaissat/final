import axios from "axios";
import {
  GETALLUSERS,
  GET_USER,
  LOGOUT,
  USER_FAIL,
  USER_LOGIN,
  USER_REGISTER,
} from "../types";
import { setAlert } from "./alertAction";

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5050/api/users/register",
      formData
    );
    dispatch({
      type: USER_REGISTER,
      payload: res.data,
    });
    navigate("/Profile");
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
    dispatch({
      type: USER_FAIL,
    });
  }
};

export const current = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("http://localhost:5050/api/users/me", config);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
    dispatch({
      type: USER_FAIL,
    });
  }
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5050/api/users/login",
      formData
    );
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
    navigate("/Profile");
  } catch (err) {
    dispatch(setAlert(err.response.data, "danger"));
    dispatch({
      type: USER_FAIL,
    });
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const getAllUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:5050/api/users/allusers",
      config
    );
    dispatch({
      type: GETALLUSERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setAlert(error.response.data, "danger"));
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(
      `http://localhost:5050/api/users/deleteuser/${userId}`,
      config
    );
    dispatch(getAllUsers());
  } catch (error) {
    dispatch(setAlert(error.response.data, "danger"));
  }
};
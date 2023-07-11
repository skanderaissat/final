import axios from "axios";
import {
  ADDTOCART,
  DESCREMENT,
  FILTERPRODUCT,
  GETALLPRODUCTS,
  GET_PRODUCT,
  INCREMENT,
  REMOVEITEM,
  TOGGLEFALSE,
  TOGGLETRUE,
} from "../types";
import { setAlert } from "./alertAction";

// get all PRODUCTS
export const getAllProducts = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:5050/api/products/allproducts",
      config
    );
    dispatch({
      type: GETALLPRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setAlert("Error fetching products", "danger"));
  }
};

// add product
export const addProduct = (formData, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post(
      "http://localhost:5050/api/products/addproduct",
      formData,
      config
    );
    dispatch(getAllProducts());
    navigate("/admin/productslist");
  } catch (err) {
    dispatch(setAlert("Error adding product", "danger"));
  }
};

// edit product
export const editProduct = (productId, formData) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.put(
      `http://localhost:5050/api/products/updateproduct/${productId}`,
      formData,
      config
    );
    dispatch(getAllProducts());
  } catch (err) {
    dispatch(setAlert("Error editing product", "danger"));
  }
};

export const toggleTrue = () => {
  return {
    type: TOGGLETRUE,
  };
};

export const toggleFalse = () => {
  return {
    type: TOGGLEFALSE,
  };
};

// delete product
export const deleteProduct = (productId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(
      `http://localhost:5050/api/products/deleteproduct/${productId}`,
      config
    );
    dispatch(getAllProducts());
  } catch (error) {
    dispatch(setAlert("Error deleting product", "danger"));
  }
};

// get one product
export const getOneProduct = (productId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:5050/api/products/getoneproduct/${productId}`,
      config
    );
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch(setAlert("Error fetching product", "danger"));
  }
};

// add to cart
export const addToCart = (productId) => {
  return {
    type: ADDTOCART,
    payload: {
      id: productId,
    },
  };
};

// increment
export const increment = (productId) => {
  return {
    type: INCREMENT,
    payload: productId,
  };
};

// decrement
export const decrement = (productId) => {
  return {
    type: DESCREMENT,
    payload: productId,
  };
};

// remove from cart
export const removeItem = (productId) => {
  return {
    type: REMOVEITEM,
    payload: {
      id: productId,
    },
  };
};

// filter
export const filterProduct = (status) => {
  return {
    type: FILTERPRODUCT,
    payload: status,
  };
};
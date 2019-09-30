import * as urlContant from "../constants/urlConstant";
import * as urlService from "../Services/urlService";
import * as basicService from "../Services/basicService";

export function loadUserUrl(signal) {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.LOAD_LOGIN_USER_URL });
      const res = await urlService.getUserUrl(signal);
      dispatch({
        type: urlContant.LOAD_LOGIN_USER_URL_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: urlContant.LOAD_LOGIN_USER_URL_FAIL, payload: error });
    }
  };
}

export function addUserUrl(url, history, signal) {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.ADD_USER_URL });
      const urlItem = {
        urlAcotada: url.urlOriginal,
        urlOriginal: url.urlOriginal,
        titulo: url.titulo,
        visitas: 0,
        activo: true,
        categoria: url.category
      };
      await basicService.addItem(urlItem, "url", signal);
      dispatch({ type: urlContant.ADD_USER_URL_SUCCESS });
      await this.loadUserUrl(signal);
      history.push("/admin/urls");
    } catch (error) {
      dispatch({ type: urlContant.ADD_USER_URL_FAIL, payload: error });
    }
  };
}

export function loadCategories(signal) {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.LOAD_CATEGORIES });
      const res = await basicService.getAllItems("categoria", signal);
      dispatch({
        type: urlContant.LOAD_CATEGORIES_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: urlContant.LOAD_CATEGORIES_FAIL, payload: error });
    }
  };
}

export function removeUserUrl(index, signal) {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.REMOVE_USER_URL });
      await basicService.removeItem("url", index, signal);
      dispatch({ type: urlContant.REMOVE_USER_URL_SUCCESS });
      this.loadUserUrl(signal);
    } catch (error) {
      dispatch({ type: urlContant.REMOVE_USER_URL_FAIL, payload: error });
    }
  };
}

export function loadEditUrl(url) {
  return dispatch => {
    dispatch({
      type: urlContant.LOAD_EDIT_URL,
      payload: url
    });
  };
}

export function clearSelectedUrl() {
  return dispatch => {
    dispatch({
      type: urlContant.CLEAR_SELECTED_URL
    });
  };
}

export function handleChange(field, value) {
  return dispatch => {
    dispatch({
      type: urlContant.CHANGE_VALUE_SELECTED_URL,
      payload: { field: field, value: value }
    });
  };
}

export function handleChangeCategory(category) {
  return dispatch => {
    dispatch({
      type: urlContant.CHANGE_VALUE_CATEGORY_URL,
      payload: category
    });
  };
}

export function updateUserUrl(url, history, signal) {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.UPDATE_URL });
      const item = { ...url, categoria: url.categoria.id };
      await basicService.updateItem(item, "url", signal);
      dispatch({ type: urlContant.UPDATE_URL_SUCCESS });
      await this.loadUserUrl(signal);
      history.push("/admin/urls");
    } catch (error) {
      dispatch({ type: urlContant.UPDATE_URL_FAIL, payload: error });
    }
  };
}

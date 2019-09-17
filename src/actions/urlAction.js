import * as urlContant from "../constants/urlConstant";
import * as urlService from "../Services/urlService";
import * as basicService from "../Services/basicService";

export function loadUserUrl() {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.LOAD_LOGIN_USER_URL });
      const res = await urlService.getUserUrl();
      dispatch({
        type: urlContant.LOAD_LOGIN_USER_URL_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: urlContant.LOAD_LOGIN_USER_URL_FAIL, payload: error });
    }
  };
}

export function addUserUrl(url, history) {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.ADD_USER_URL });
      const urlItem = {
        urlAcotada: url.originalUrl,
        urlOriginal: url.originalUrl,
        titulo: url.callAttention,
        visitas: 0,
        activo: true,
        categoria: 1
      };
      const res = await basicService.addItem(urlItem, "url");
      dispatch({ type: urlContant.ADD_USER_URL_SUCCESS });
      history.push("/admin/urls");
      this.loadUserUrl();
    } catch (error) {
      dispatch({ type: urlContant.ADD_USER_URL_FAIL, payload: error });
    }
  };
}

export function loadCategories() {
  return async dispatch => {
    try {
      dispatch({ type: urlContant.LOAD_CATEGORIES });
      const res = await basicService.getAllItems("categoria");
      dispatch({
        type: urlContant.LOAD_CATEGORIES_SUCCESS,
        payload: res.data
      });
      console.log("Respuesta::", res);
    } catch (error) {
      dispatch({ type: urlContant.LOAD_CATEGORIES_FAIL, payload: error });
    }
  };
}

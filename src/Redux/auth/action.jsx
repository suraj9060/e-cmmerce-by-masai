import { Axios } from "axios";

 export const SIGNIN_REQUEST = "SIGNIN_REQUEST";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signInRequest = () => {
  return {
    type: SIGNIN_REQUEST,
  };
};

const signInSuccess = () => {
  return {
    type: SIGNIN_SUCCESS,
  };
};

const signInFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

const signIn = (payload) => (dispatch) => {
  dispatch(signInRequest());

  Axios.post("/api/login", payload, { baseURL: "http://reqres.in" })
    .then((r) => dispatch(signInSuccess(r.data)))
    .catch((e) => dispatch(signInFailure(e.data)));
};

export {signIn}

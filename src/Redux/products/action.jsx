import * as types from './actionType'
import Axios  from "axios"


const fetchDataRequest = (payload) => {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload        
    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}


const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetchDataRequest());

        Axios.get('/products', {
            params: {
                ...payload,
            },
        })
          .then(r => dispatch(fetchDataSuccess(r.data)))
          .catch(e => dispatch(fetchDataFailure(e.data)));
    }
}





const getSingleDataRequest = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleDataSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const getSingleDataFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}

const getSingleData = (id) => {
    return (dispatch)=>{
        dispatch(getSingleDataRequest())

        Axios.get(`product/${id}`).then(r=> dispatch(getSingleDataSuccess(r.data))).catch(err => dispatch(getSingleDataFailure(err.data)))
    }
}


export { fetchData , getSingleData};
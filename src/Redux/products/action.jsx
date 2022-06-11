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
        payload,
    }
}

const getSingleDataSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload,
    }
}

const getSingleDataFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload,
    }
}

const getSingleData = (id) =>(dispatch)=> {
   
        dispatch(getSingleDataRequest())

        Axios.get(`/products/${id}`)
            .then((r )=> dispatch(getSingleDataSuccess(r.data)))
            .catch((e) => dispatch(getSingleDataFailure(e.data)))
    
}


const addToCartRequest = (payload) => {
    return {
        type: types.ADD_TO_CART_REQUEST,
        payload
    }
}

const addToCartSuccess = (payload) => {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        payload
    }
}

const addToCartFailure = (payload) => {
    return {
        type: types.ADD_TO_CART_FAILURE,
        payload
    }
}

const addToCart = (product) => (dispatch) => {
    
    dispatch(addToCartRequest())

    Axios.post("./cart" , product).then(r=> dispatch(addToCartSuccess(r.data))).catch(e => dispatch(e.data))
}


export { fetchData , getSingleData , addToCart};
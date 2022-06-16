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

    Axios.post("./cart", product)
        .then(r => dispatch(addToCartSuccess(r.data)))
        .catch(e => dispatch(addToCartFailure(e.data)))
}


const fetchCartRequest = (payload) => {
    return {
        type: types.FETCH_CART_REQUEST,
        payload
    };
}

const fetchCartSucess = (payload) => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload
    };
}

const fetchCartFailure = (payload) => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload,
  };
};


const fetchCart = (payload) => (dispatch) => {
    dispatch(fetchCartRequest())
    Axios.get("/cart")
        .then((r) => dispatch(fetchCartSucess(r.data)))
        .catch(e => dispatch(fetchCartFailure(e.data)));

}

const removeProductCartRequest = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_REQUEST,
      payload,
    };
   
}

const removeProductCartSuccess = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}

const removeProductCartFailure = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,
        payload
    }
}

const removeProductCart = (id) => (dispatch) => {
    dispatch(removeProductCartRequest())
  
    Axios.delete(`/cart/${id}`)
        .then((r) => {
            // console.log(r)
            dispatch(removeProductCartSuccess(r.data))
        }).then(() => dispatch(fetchCart()))
        .catch(e => dispatch(removeProductCartFailure(e.data)))

}

const addOrderRequest = () => {
    return {
        type: types.ADD_ORDER_REQUEST,
        
    }
}

const addOrderSuccess = (payload) => {
    return {
        type: types.ADD_ORDER_SUCCESS,
        payload
    }
}

const addOrderFailure = (payload) => {
    return {
        type: types.ADD_ORDER_FAILURE,
        payload
    }
}

const addOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest())
    const orderPayLoad = []
    for (let product of payload) {
        product && orderPayLoad.push(Axios.post("/orders" , product))
    }

    Promise.all(orderPayLoad)
        .then(r => dispatch(addOrderSuccess()))
        .then(() => dispatch(emptyCart(payload)))
        .catch(e => dispatch(addOrderFailure()))
}

const emptyCartRequest = () => {
    return {
      type: types.EMPTY_CART_REQUEST,
    };
}

const emptyCartSuccess = () => {
    return {
        type:types.EMPTY_CART_SUCCESS,
    }
}

const emptyCartFailure = () => {
    return {
        type : types.EMPTY_CART_FAILURE,
    }
}

const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest())
   
    const deleteOrders = [];
    for (let obj of payload){     
        let temp = dispatch(removeProductCart(obj.id));
        deleteOrders.push(temp);
    }


    Promise.all(deleteOrders)
        .then(r => dispatch(emptyCartSuccess()))
        .catch(e => dispatch(emptyCartFailure()))

}

const fetchOrderRequest = (payload) => {
    return {
        type: types.FETCH_ORDER_REQUEST,
        payload
    };   
}

const fetchOrderSuccess = (payload) => {
  return {
    type: types.FETCH_ORDER_SUCCESS,
    payload,
  };
};

const fetchOrderFailure = (payload) => {
  return {
    type: types.FETCH_ORDER_FAILURE,
    payload,
  };
};

const fetchOrder = (payload) => (dispatch) => {
    dispatch(fetchOrderRequest())

    Axios.get("/orders")
        .then(r => dispatch(fetchOrderSuccess(r.data)))
        .catch(e => dispatch(fetchOrderFailure(e.data)))
}

export {
    fetchData,
    getSingleData,
    addToCart,
    fetchCart,
    removeProductCart,
    addOrder,
    emptyCart,
    fetchOrder,
};
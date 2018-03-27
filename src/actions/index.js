import * as Types from '../constants/actionType';
import callApi from '../callApi/callApi.js';
import callPostApi from '../callApi/callPostApi.js';
import callPutApi from '../callApi/callPutApi.js';
import callDeleteApi from '../callApi/callDeleteApi.js';
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi("product", "GET", null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.GET_PRODUCTS,
        products
    }
}

export const actGetProductRequest = (id) => {
    return dispatch => {
        return callPostApi("get-by-item", "POST", { "number": id }).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCTS,
        product
    }
}

export const actAddProductRequest = (id) => {
    return dispatch => {
        return callPostApi("get-by-item", "POST", { "number": id }).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}

export const actDeleteProductRequest = (id) => {
    console.log(IDBCursorWithValue)
    return (dispatch) => {
        return callDeleteApi("delete", "DELETE", id).then(res => {
              dispatch(actDeleteProduct(res.data));
        })
    }
}

export const actDeleteProduct = (product) => {
    return {
        type: Types.DELETE_PRODUCTS,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callPutApi("update-product", "PUT", product).then(res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = (product) => {
    console.log(product)
    return {
        type: Types.UPDATE_PRODUCTS,
        product
    }
}



export const actCreateProductRequest = (product) => {
    return (dispatch) => {
        return callPostApi("send-product", "POST", product).then(res => {
            dispatch(actCreateProduct(res.data));
        })
    }
}

export const actCreateProduct = (product) => {
    console.log(product)
    return {
        type: Types.ADD_PRODUCTS,
        product
    }
}
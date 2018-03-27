import * as Types from '../constants/actionType';

const initialState = {
    location: '',
    image:'',
    number: '',
    expiry: '',
    price: '',
    name: '',
    title: '',
}

const editProduct = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCTS: {
            return action.product;
        }
        default: return state;
    }
}

export default editProduct;
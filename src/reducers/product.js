import * as Types from '../constants/actionType';
const initialState = [];


const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PRODUCTS: {
            state = action.products.Items
            return [...state];
        }
        default: return [...state];
    }
}

export default products;

const findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}


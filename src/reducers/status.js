import * as Types from '../constants/actionType';

const initialState = {
    status: '',
}
 
const status = (state = initialState, action) => {
    switch (action.type) {
        case Types.UPDATE_PRODUCTS: {
            return action.product;
        }
        case Types.DELETE_PRODUCTS: {
            return action.product;
        }
        case Types.ADD_PRODUCTS: {
            return action.product;
        }
        default: return state;
    }
}

export default status;
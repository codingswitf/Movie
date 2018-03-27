import {combineReducers} from 'redux';
// Import các reducer 
import products from './product';
import editProduct from './editProduct';
import status from './status';
const appReducers = combineReducers({
    products,
    editProduct,
    status
});

export default appReducers;
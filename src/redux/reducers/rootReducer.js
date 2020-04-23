import { combineReducers } from 'redux'
import { catalogReducer } from './catalog-reducer'
import { productsReducer } from './products-reducer'
import { basketReducer } from './basket-reducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    basket: basketReducer,
    catalog: catalogReducer,
    products: productsReducer,
    form: formReducer
})
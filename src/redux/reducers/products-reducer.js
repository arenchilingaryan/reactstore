const initialState = {
    data: [],
    loading: true
}

export const setProducts = (productsData) => ({type: 'SET_PRODUCTS', data: productsData})
export const setLoading = (loadStatus) => ({type: 'SET_LOADING', setLoad: loadStatus})

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                data: action.data,
                loading: true
            }
        case 'SET_LOADING':
            return {
                data: state.data,
                loading: action.setLoad
            }
        default:
            return state
    }
}

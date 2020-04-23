const initialState = []

export const setCatalog = (catalogData) => ({type: 'SET_CATALOG', data: catalogData})

export const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATALOG':
            return state = action.data
        default:
            return state
    }
}
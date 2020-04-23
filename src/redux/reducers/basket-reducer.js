const initialState = {
    data: [],
    totalCount: 0
}

export const addBook = (item) => ({type: 'ADD_BOOK', data: item})
export const deleteBook = (data, index) => ({type: 'DELETE_BOOK', data, index})

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                data: [...state.data, action.data],
                totalCount: (Math.ceil((state.totalCount + action.data.price)*100)/100)
            }
        case 'DELETE_BOOK':
            const newData = [...state.data]
            const nextDataBefore = newData.slice(0, action.index)
            const nextDataAfter = newData.slice(action.index + 1)
            const nextData = [...nextDataBefore, ...nextDataAfter]
            return {
                data: nextData,
                totalCount: (Math.ceil((state.totalCount - action.data.price)*100)/100)
            }
        default:
            return state
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'QUESTION':
            return {
                ...state,
                isShowModal: true,
                question: action.payload
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                isShowModal: false,
                question: ''
            }
        default:
            return state;
    }
}
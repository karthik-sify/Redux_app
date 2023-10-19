
const initialState = {
    loading: false,
    newsData: [],
    error: ''
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_NEWS_REQUEST": return {
            ...state,
            loading: true
        }
        case "FETCH_NEWS_SUCCESS": return {
            ...state,
            loading: false,
            newsData: action.payload
        }
        case "FETCH_NEWS_FAIL": return {
            ...state,
            loading: false,
            newsData: action.payload
        }
        case "REMOVE_NEWS_ITEM":
            itemToRemove = action.payload
            updatedNewsData = state.newsData.filter(item => item !== itemToRemove);
            return {
                ...state,
                newsData: updatedNewsData,
            }
        default: return state

    }
}

export default NewsReducer
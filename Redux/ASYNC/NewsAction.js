export const FetchNewsRequest=()=>{
    return{
        type:"FETCH_NEWS_REQUEST"
    }
}

export const FetchNewsSuccess=(newsData)=>{
    return{
        type:"FETCH_NEWS_SUCCESS",
        payload:newsData
    }
}

export const FetchNewsFail=(error)=>{
    return{
        type:"FETCH_NEWS_FAIL",
        payload:error
    }
}

export const RemoveNewsItem = (item) => {
    return {
        type: "REMOVE_NEWS_ITEM",
        payload: item,
    };
};

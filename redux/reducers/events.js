const initalState = {
    eventsList: [],
    paginationProps: {
        currentPage: 1,
        postsPerPage: 2
    },
    loading: true
};

const events = (state = initalState, action) => {
    const { payload } = action;
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: !loading }
        case "SET_EVENTS":
            return { ...state, eventsList: payload }
        case "CHANGE_PAGINATE":
            return {
                ...state,
                paginationProps: {
                    ...state.paginationProps,
                    currentPage: payload,
                }
            }
        default:
            return state;
    }
}

export default events;




const initalState = {
    marketlist: []
};

const markets = (state = initalState, action) => {
    const { payload } = action;

    switch (action.type) {
        case "SET_MARKETS":
            return { ...state, marketlist: payload }
        default:
            return state;
    }
}

export default markets;

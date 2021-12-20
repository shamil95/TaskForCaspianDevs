const prefences = (state = { changeTheme: false }, action) => {
    switch (action.type) {
        case "TOGGLE_DARKTHEME":
            return { ...state, changeTheme: !state.changeTheme }
        default:
            return state;
    }
}

export default prefences;

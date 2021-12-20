import axios from "axios";

export const fetchEvents = (params) => async dispatch => {
    try {
        const res = await axios(`https://ltva.topaz.net.az/api/live-tv/events`, { params });
        dispatch({
            type: "SET_EVENTS",
            payload: res.data.item.events
        })

    } catch (error) {
        console.log(error);
    }
}

export const changeCurrentPage = (value) => {
    return {
        type: "CHANGE_PAGINATE",
        payload: value
    };
}



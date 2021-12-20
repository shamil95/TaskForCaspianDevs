import axios from "axios";

export const fetchMarkets = () => async dispatch => {
    try {
        //TODO MOVE TO SERVICE, ADD FETCHING
        const res = await axios.get("https://stltva.topaz.net.az/api/live-tv/markets");
        dispatch({
            type: "SET_MARKETS",
            payload: res.data.items
        })
    }
    catch (error) {
        console.log(error);
    }
}
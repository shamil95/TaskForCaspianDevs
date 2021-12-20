import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchMarkets } from "../../redux/actions/markets";
import style from "./Markets.module.css";
import Option from './Options/Option';

const Markets = () => {

    const dispatch = useDispatch();

    const markets = useSelector(state => state.markets.marketlist);

    useEffect(() => {
        dispatch(fetchMarkets());
    }, [])

    return (
        <div className={style.Markets}>
            <div className={style.Filter}>
                <Option />
            </div>
            <div className={style.MarketsHome}>
                {markets.map(market => (
                    <div className={style.col1}>
                        <div className={style.Leauge}>
                            <span>{market.name}</span>
                        </div>
                        <div className={style.Scores}>
                            {market.outcomes.map(outcome => (
                                <span>{outcome.name}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Markets

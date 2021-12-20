import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents,changeCurrentPage } from "../../redux/actions/events";
import Pagination from '../Pagination/Pagination';
import style from "./Events.module.css";

const Events = () => {

    const dispatch = useDispatch();

    const markets = useSelector(state => state.markets.marketlist);
    const events = useSelector(state => state.events.eventsList);
    const currentPage = useSelector(state => state.events.paginationProps.currentPage);
    const postsPerPage = useSelector(state => state.events.paginationProps.postsPerPage);
    const pageOffset = postsPerPage * (currentPage - 1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        const params = {
            postsPerPage,
            pageOffset
        }
        dispatch(fetchEvents(params));
    }, [])


    const paginate = (pageNumbers) => {
        dispatch(changeCurrentPage(pageNumbers))
    }

    return (
        <div className={style.Events}>
            {currentPosts.map(event => (
                <div key={event.programCode} className={style.Table}>
                    <div className={style.EventTable}>
                        <div className={style.programCode}><span>{event.programCode}</span></div>
                        <div className={style.Teams}>
                            <div className={style.Mbn}>{event.mbn}</div>
                            <div className={style.Clubname}>
                                <div>{event.teams.home.eng}</div>
                                <div>{event.teams.away.eng}</div>
                            </div>
                        </div>
                        <div className={style.matchStatusCode}>
                            <span>{event.liveStatistics.matchStatusCode}</span>
                            <span>{event.liveStatistics.eventTime}</span>
                            <div>
                                <h3>{event.liveStatistics.homeTeamScore}</h3>
                                <h3>{event.liveStatistics.awayTeamScore}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.LeftScore}>
                        {markets.map(market => {
                            const matchedMarkets = event.markets != null && event.markets.filter(eventMarket => eventMarket.marketRefId === market.id);
                            return (
                                <div className={style.col3}>
                                    {matchedMarkets[0] ? matchedMarkets[0].outcomes?.map(outcome => {
                                        return (
                                            <div className={style.col3score}>
                                                <span>{outcome.odd}</span>
                                            </div>
                                        )
                                    })
                                        :
                                        <div className={style.col3score}>
                                            <span>-</span>
                                        </div>}
                                </div>
                            )

                        })}
                    </div>
                </div>
            ))}
            <Pagination postsPerPage={postsPerPage} totalPosts={events.length - 1} paginate={paginate} />
        </div>
    )
}

export default Events

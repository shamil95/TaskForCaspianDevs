import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleDarkTheme } from '../../redux/actions/global';
import style from "./Navbar.module.css";

const Navbar = () => {

    const dispatch = useDispatch();

    const [showDate, setShowDate] = useState(new Date().toLocaleDateString());
    const [clocks, setClocks] = useState();

    const multiTheme = useSelector(state => state.prefences.changeTheme);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setClocks(time);
    }

    useEffect(() => {
        setInterval(updateTime, 1000)
    }, [])

    return (
        <div className={`${style.navbar}`}>
            <figure>
                <img src="https://ltv.topaz.net.az/static/media/topaz-logo.f7900910.svg" />
            </figure>
            <div className={style.clock}>
                <h4>{showDate}</h4>
                <h4>{clocks}</h4>
            </div>
            <button onClick={() => dispatch(toggleDarkTheme())} style={multiTheme ? { background: "black", color: "#fff" } : { background: "#fff", color: "black" }}>{multiTheme ? "light-theme" : "dark-theme"}</button>
        </div >
    )
}

export default Navbar

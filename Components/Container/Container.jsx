import React from 'react'
import { useSelector } from 'react-redux';

const Container = ({ children }) => {

    const multiTheme = useSelector(state => state.prefences.changeTheme);

    return (
        <div className={multiTheme ? "dark-theme" : ""}>
            {children}
        </div>
    )
}

export default Container

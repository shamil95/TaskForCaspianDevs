import React from 'react'
import style from "./Pagination.module.css"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ul className={style.Pagination}>
            {pageNumbers.slice(1, pageNumbers.length).map(number => (
                <li onClick={() => paginate(number)}>
                    {number}
                </li>
            ))}
        </ul>
    )
}

export default Pagination

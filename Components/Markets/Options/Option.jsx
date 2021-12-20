import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { fetchEvents,changeCurrentPage } from '../../../redux/actions/events';
import style from "../Markets.module.css";

const Option = () => {

    const dispatch = useDispatch();

    const postPerPage = useSelector(state => state.events.paginationProps.postsPerPage);
    const currentPage = useSelector(state => state.events.paginationProps.currentPage);

    // const index = postPerPage;
    // const size = currentPage;

    const options = [
        { label: "Hamisi", id: "" },
        { label: "Futbol", id: "1:sr:sport:1" },
        { label: "Tennis", id: "1:sr:sport:5" },
        { label: "Basketbol", id: "1:sr:sport:2" },
        { label: "Buz Hokeyi", id: "1:sr:sport:4" },
        { label: "Masaüstü Tennis", id: "1:sr:sport:20" },
        { label: "Voleybol", id: "1:sr:sport:23" }
    ]

    const handleChange = (selectedOption) => {

        const pageOffset = postPerPage * (currentPage - 1)


        const id = selectedOption.id;

        const Data = {
            sportTypeId: id,
            pageLimit: postPerPage,
            pageOffset: pageOffset
        }

        dispatch(fetchEvents(Data))
        dispatch(changeCurrentPage(1))
    }

    return (
        <div className={style.Option}>
            <Select onChange={handleChange} options={options} placeholder="Select Theme" />
        </div>
    )
}

export default Option

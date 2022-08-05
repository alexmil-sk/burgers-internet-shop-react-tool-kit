
import React from 'react';
import classes from './Pagination.module.scss';
import ReactPaginate from "react-paginate";
import {useDispatch} from "react-redux";
import {setCurrentPage} from '../../redux-toolkit/slices/filtersSlice.js';



function Pagination() {
  const dispatch = useDispatch();
  
  function onPageChange(e) {
    dispatch(setCurrentPage(e.selected + 1));
  }
  
  return (
    <div className={classes.root}>
      <ReactPaginate
        className={classes.pagination}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={onPageChange}
        pageRangeDisplayed={8}
        pageCount={5}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;

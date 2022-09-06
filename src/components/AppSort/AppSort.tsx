import React, {useState} from 'react';
import './AppSort.scss';
import {GrAscend, GrDescend} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {setSortType, setRadioOrder, setLimitPage, filterSelector} from '../../redux-toolkit/slices/filtersSlice.js';
import {ArrSortType} from '../../@types/types';



export const arrSortTypes: ArrSortType[] = [
  {name: 'популярности', sortProperty: 'rating'},
  {name: 'цене', sortProperty: 'price'},
  {name: 'алфавиту', sortProperty: 'name'}
];


function AppSort() {
  
  const dispatch = useDispatch();
  const {sortType, radioOrder, limitPage} = useSelector(filterSelector);
  const [toggleOpenPopup, setTogglesOpenPopup] = useState(false);
  
  function toggleSortHandle() {
    setTogglesOpenPopup(!toggleOpenPopup)
  }
  
  function getActiveSortType(sortObj: ArrSortType) {
    dispatch(setSortType(sortObj));
    setTogglesOpenPopup(false);
  }
  
  function getRadioOrder(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setRadioOrder(e.target.value));
  }
  
  function onChangeLimitPage(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setLimitPage(e.target.value));
  }
  
  return (
    <div className="sort">
      <div className="sort__label">
        <div className="sort__label-title">
          <strong>Сортировка по:</strong>
        </div>
        <div className="sort__label-btn" onClick={toggleSortHandle}>
          <span>{sortType.name}</span>
        </div>
        <div className="sort__label-radio_asc">
          <label>
            <input
              onChange={getRadioOrder}
              type="radio"
              name="radioOrder"
              value="desc"
              checked={radioOrder === 'desc'}
            />
            <span><GrAscend/></span>
          </label>
        </div>
        <div className="sort__label-radio_desc">
          <label>
            <input
              onChange={getRadioOrder}
              type="radio"
              name="radioOrder"
              value="asc"
              checked={radioOrder === 'asc'}
            />
            <span><GrDescend/></span>
          </label>
        </div>
        <div className="sort__label-select">
          <select
            onChange={onChangeLimitPage}
            value={limitPage}
          >
            <option value="">All</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className={toggleOpenPopup ? 'sort__popup' : 'sort__popup invisible'}>
        <ul>
          {
            arrSortTypes.map((obj, idx) =>
              <li
                onClick={() => getActiveSortType(obj)}
                className={sortType.name === obj.name ? "active" : ''}
                key={idx}
              >{obj.name}
              </li>)
          }
        </ul>
      </div>
      
      
      {/*{*/}
      {/*  isOpenPopup*/}
      {/*  ? (<div className="sort__popup">*/}
      {/*    <ul>*/}
      {/*      <li className="active">популярности</li>*/}
      {/*      <li>цене</li>*/}
      {/*      <li>алфавиту</li>*/}
      {/*    </ul>*/}
      {/*  </div>)*/}
      {/*  : null*/}
      {/*}*/}
    </div>
  );
}

export default AppSort;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";
import { getFilter } from "../../redux/selectors";
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filterWrapper}>
      <label className={s.filterLabel}>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;

import React, { memo } from "react";
import { Action } from "../../../reducer/app.reducer";

interface SearchProps {
  dispatch: React.Dispatch<Action>;
  resetFind: Function;
  resetCmd: Function;
}

const CloseBtn: React.FC<SearchProps> = ({ dispatch, resetFind, resetCmd }) => {
  const resetSearch = () => {
    dispatch({ type: "SET_SEARCH", payload: "" });
    dispatch({ type: "SET_SEARCH_RES_COUNTER", payload: 0 });
    dispatch({ type: "SET_CUR_SEARCH_RES", payload: 0 });
    resetCmd();
    resetFind();
  };

  return (
    <button className="search__close" onClick={resetSearch}>
      X
    </button>
  );
};

export default memo(CloseBtn);

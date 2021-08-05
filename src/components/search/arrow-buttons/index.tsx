import React, { memo } from "react";
import { State, Action } from "../../../reducer/app.reducer";

interface ArrowButtonsProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const ArrowButtons: React.FC<ArrowButtonsProps> = ({ state, dispatch }) => {
  return (
    <div className="search__arrows">
      <button
        disabled={state.searchResCounter === 0}
        onClick={() =>
          dispatch({
            type: "SET_CUR_SEARCH_RES",
            payload:
              state.curSearchRes === state.searchResCounter
                ? 1
                : state.curSearchRes + 1,
          })
        }
      >
        &uarr;
      </button>
      <button
        disabled={state.searchResCounter === 0}
        onClick={() =>
          dispatch({
            type: "SET_CUR_SEARCH_RES",
            payload:
              state.curSearchRes === 1
                ? state.searchResCounter
                : state.curSearchRes - 1,
          })
        }
      >
        &darr;
      </button>
    </div>
  );
};

export default memo(ArrowButtons);

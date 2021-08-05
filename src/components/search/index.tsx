import React from "react";
import { State, Action } from "../../reducer/app.reducer";
import { useKeyDown } from "../../hooks/useKeyDown";
import TextInput from "./text-input";
import CounterResult from "./counter-result";
import ArrowButtons from "./arrow-buttons";
import CloseBtn from "./close-btn";
import "./style.css";

interface SearchProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const Search: React.FC<SearchProps> = ({ state, dispatch }) => {
  const [findPress, resetFind] = useKeyDown("f");
  const [cmdPress, resetCmd] = useKeyDown("meta");

  return findPress && cmdPress ? (
    <div className="search">
      <TextInput
        state={state}
        dispatch={dispatch}
        findPress={findPress}
        cmdPress={cmdPress}
      />
      <CounterResult state={state} />

      <div className="search__seperator"></div>

      <ArrowButtons state={state} dispatch={dispatch} />
      <CloseBtn dispatch={dispatch} resetFind={resetFind} resetCmd={resetCmd} />
    </div>
  ) : null;
};

export default Search;

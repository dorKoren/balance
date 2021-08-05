import React, { memo } from "react";
import { State } from "../../../reducer/app.reducer";

interface CounterResultProps {
  state: State;
}

const CounterResult: React.FC<CounterResultProps> = ({ state }) => {
  return (
    <div className="search__counter-result">
      <span>{state.curSearchRes}</span>/<span>{state.searchResCounter}</span>
    </div>
  );
};

export default memo(CounterResult);

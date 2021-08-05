import React, { useRef, useEffect, memo } from "react";
import { State, Action } from "../../../reducer/app.reducer";

interface TextInputProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  findPress: boolean;
  cmdPress: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  state,
  dispatch,
  findPress,
  cmdPress,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;

    dispatch({ type: "SET_SEARCH", payload: value });

    if (value) {
      const regexp = new RegExp(`(${value})`, "gi");
      const totalSearchRes = (state.selectedFile.match(regexp) || []).length;
      dispatch({
        type: "SET_PARTS",
        payload: state.selectedFile.split(regexp),
      });
      dispatch({ type: "SET_SEARCH_RES_COUNTER", payload: totalSearchRes });

      totalSearchRes
        ? dispatch({ type: "SET_CUR_SEARCH_RES", payload: 1 })
        : dispatch({ type: "SET_CUR_SEARCH_RES", payload: 0 });
    } else {
      dispatch({ type: "SET_PARTS", payload: [state.selectedFile] });
      dispatch({ type: "SET_SEARCH_RES_COUNTER", payload: 0 });
      dispatch({ type: "SET_CUR_SEARCH_RES", payload: 0 });
    }
  };

  useEffect(() => {
    if (findPress && cmdPress) {
      inputRef.current!.focus();
    }
  }, [findPress, cmdPress]);

  return (
    <input
      id="search"
      className="search__input"
      placeholder="text"
      value={state.search}
      onChange={handleSearchChange}
      ref={inputRef}
    />
  );
};

export default memo(TextInput);

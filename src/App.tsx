import React, { useReducer } from "react";
import { reducer, initialState } from "./reducer/app.reducer";
import FileLoader from "./components/file-loader";
import FileContent from "./components/file-content";
import Search from "./components/search";
import "./App.css";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <FileLoader dispatch={dispatch} />
      <FileContent state={state} />
      <Search state={state} dispatch={dispatch} />
    </>
  );
};

export default App;

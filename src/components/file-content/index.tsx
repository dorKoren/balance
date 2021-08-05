import React from "react";
import { State } from "../../reducer/app.reducer";
import "./style.css";

interface FileContentProps {
  state: State;
}

const FileContent: React.FC<FileContentProps> = ({ state }) => {
  const { parts, search, curSearchRes, isFilePicked } = state;

  const getHighlightedText = () => {
    return parts.map((part, key) => {
      const isSearchWord = search === part.toLocaleLowerCase();
      const isActiveHiglight = key === 2 * curSearchRes - 1;
      const higlightActive =
        isSearchWord && isActiveHiglight ? "higlight--active" : "";

      return isSearchWord && search !== "" ? (
        <span key={key} className={`higlight ${higlightActive}`}>
          {part}
        </span>
      ) : (
        part
      );
    });
  };

  return isFilePicked ? (
    <p className="text-wrapper">{getHighlightedText()}</p>
  ) : (
    <p>Select a file to show details</p>
  );
};

export default FileContent;

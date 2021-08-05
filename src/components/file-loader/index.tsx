import React from "react";
import { Action } from "../../reducer/app.reducer";
import "./style.css";

interface FileLoaderProps {
  dispatch: React.Dispatch<Action>;
}

const FileLoader: React.FC<FileLoaderProps> = ({ dispatch }) => {
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    try {
      const content = await readFileContent(file);
      dispatch({ type: "SET_SELECTED_FILE", payload: content as string });
      dispatch({ type: "SET_IS_FILE_PICKED", payload: true });
      dispatch({ type: "SET_PARTS", payload: [content as string] });
    } catch (e) {
      console.log(e);
    }
  };

  const readFileContent = (file: File) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = (event: ProgressEvent<FileReader>) =>
        resolve(event.target!.result);
      reader.onerror = (error: ProgressEvent<FileReader>) => reject(error);
      reader.readAsText(file);
    });
  };

  return (
    <div className="file-loader">
      <label htmlFor="file">Upload File: </label>
      <input type="file" id="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileLoader;

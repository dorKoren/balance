export type State = {
  search: string;
  isFilePicked: boolean;
  selectedFile: string;
  parts: string[];
  searchResCounter: number;
  curSearchRes: number;
};

export type Action = {
  type: string;
  payload?: any;
};

const initialState: State = {
  search: "",
  isFilePicked: false,
  selectedFile: "",
  parts: [],
  searchResCounter: 0,
  curSearchRes: 0,
};

const reducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_SEARCH":
      return { ...state, search: payload };

    case "SET_IS_FILE_PICKED":
      return { ...state, isFilePicked: payload };

    case "SET_SELECTED_FILE":
      return { ...state, selectedFile: payload };

    case "SET_PARTS":
      return { ...state, parts: payload };

    case "SET_SEARCH_RES_COUNTER":
      return { ...state, searchResCounter: payload };

    case "SET_CUR_SEARCH_RES":
      return { ...state, curSearchRes: payload };

    default:
      return state;
  }
};

export { reducer, initialState };

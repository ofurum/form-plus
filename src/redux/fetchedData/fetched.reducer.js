import { dataTypes } from "./fetched.type";
import { sortAsc, sortDesc } from "./utils";

const INITIALIZE_STATE = {
  results: null,
  currentResult: [],
  currentPage: 1,
};

const filterCurrent = (state, { payload }) => {
  console.log(payload);
  const { newPage, offset } = payload;
  const index = newPage * offset;
  const nextPageInitialIndex = offset * (newPage - 1);
  const lastIndex = nextPageInitialIndex + (offset - 1);
  const newData = state.results.slice(nextPageInitialIndex, lastIndex);
  return {
    ...state,
    currentResult: newData,
    currentPage: newPage,
  };
};
const fetchedDataReducer = (state = INITIALIZE_STATE, action) => {
  if (action.type === dataTypes.FETCHED_DATA) {
    return {
      ...state,
      results: action.payload,
      currentResult: action.payload.splice(0, 49),
    };
  }
  if (action.type === dataTypes.PAGINATE_DATA) {
    return filterCurrent(state, action);
  }
  if (action.type === dataTypes.SORT_BY_ALPHABET) {
    return {
      ...state,
      sortByAlphabet: action.payload.location === "asc" ? sortAsc(state.currentResult, "name") : sortDesc(state.currentResult, "name"),
    };
  }
  return state;
};

export default fetchedDataReducer;

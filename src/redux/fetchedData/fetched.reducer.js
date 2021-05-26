import { dataTypes } from "./fetched.type";
import { sortAsc, sortDesc } from "./utils";

export const INITIALIZE_STATE = {
  results: null,
  currentResult: [],
  currentPage: 1,
  currentCategory: "All"
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

const filterTemplate = (state, {payload}) => {
   if(!payload.length) return { ...state, currentResult: state.results };
        return {
          ...state,
          currentResult: state.currentResult.filter((result) =>
            result.name.toLowerCase().includes(payload.toLowerCase())
          ),
        };
}

const filterDate = (state, {payload}) => {
     if (!payload.length) return { ...state, currentResult: state.results };
     return {
       ...state,
       currentResult:
         payload.toLowerCase() === "Default"
           ? state.result
           : state.currentResult.filter((result) =>
               result.created.includes(payload)
             ),
       currentCategory: payload,
     };
}

const filterCategory = (state, { payload }) => {
  if (!payload.length) return { ...state, currentResult: state.results };
  return {
    ...state,
    currentResult: payload.toLowerCase() === "All" ? state.result:  state.currentResult.filter((result) =>
      result.category.includes(payload)
    ),
    currentCategory: payload
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
      currentResult:
        action.payload.direction === "asc"
          ? sortAsc(state.results, "name")
          : sortDesc(state.results, "name"),
    };
  };

  if(action.type === dataTypes.FILTERED_TEMPLATES){
    window.scrollTo(0, 500)
    return  filterTemplate(state, action)
  };

  if(action.type === dataTypes.FILTERED_CATEGORY){
    return filterCategory(state, action)
  }
   if(action.type === dataTypes.FILTERED_DATE){
     return {
       ...state,
       currentResult:
         action.payload.dateDirection === "ascending"
           ? sortAsc(state.results, "created")
           : sortDesc(state.results, "created"),
     };
   };
  return state;
};

export default fetchedDataReducer;

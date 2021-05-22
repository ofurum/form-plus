import { createSelector } from "reselect";

const dataResults = (state) => state.dataFetched;

export const listOfDataResults = createSelector(
    [dataResults],
    (data) => data.results
)

export const currentPageCounter = createSelector(
    [dataResults],
    (item) => item.currentPage
);

export const currentResult  = createSelector(
    [dataResults],
    (data) => data.currentResult
)
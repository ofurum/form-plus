import { createSelector } from "reselect";

const dataResults = (state) => state.dataFetched;

export const listOfDataResults = createSelector(
    [dataResults],
    (data) => data.results
)
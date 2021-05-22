import {dataTypes } from './fetched.type'

export const setData = (data) => ({
  type: dataTypes.FETCHED_DATA,
  payload: data
});

export const paginateData = ({ newPage, offset }) => ({
  type: dataTypes.PAGINATE_DATA,
  payload: { newPage, offset },
});
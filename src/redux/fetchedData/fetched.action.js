import {dataTypes } from './fetched.type'

export const setData = (data) => ({
  type: dataTypes.FETCHED_DATA,
  payload: data
});
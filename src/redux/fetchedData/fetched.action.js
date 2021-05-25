import {dataTypes } from './fetched.type'

export const setData = (data) => ({
  type: dataTypes.FETCHED_DATA,
  payload: data
});

export const paginateData = ({ newPage, offset }) => ({
  type: dataTypes.PAGINATE_DATA,
  payload: { newPage, offset },
});

export const sortByAlphabet = (payload) => ({
  type: dataTypes.SORT_BY_ALPHABET,
  payload,
});

export const filterTemplates = (value) => ({
  type: dataTypes.FILTERED_TEMPLATES,
  payload: value
})

export const setCurrentCategory = (category) =>({
  type: dataTypes.FILTERED_CATEGORY,
  payload: category,
})
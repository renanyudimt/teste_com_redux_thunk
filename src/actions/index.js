import {
  ADD,
  CHANGE_NAME_FAIL,
  CHANGE_NAME_REQUEST,
  CHANGE_NAME_SUCCESS,
  REMOVE,
  CLEAR_ALL
} from "./../constants/redux"
import axios from "axios";

export const add = (value) => (dispatch) => {
  dispatch({
    type: ADD,
    payload: value
  })
}

export const remove = (value) => (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: value
  })
}

export const changeName = (name, counter) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_NAME_REQUEST,
    })

    const { data } = await axios.post("http://localhost:3000/api/hello", {
      name
    })

    if (data.success) {
      dispatch({
        type: CHANGE_NAME_SUCCESS,
        payload: data.name
      })
  
      dispatch({
        type: ADD,
        payload: counter + 1,
      })
    } else {
      dispatch({
        type: CHANGE_NAME_FAIL,
      })
    }
  } catch(err) {
    dispatch({
      type: CHANGE_NAME_FAIL,
    })
  }
}
import { GET_LOGS, LOGS_ERROR, SET_LOADING } from './types'

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading()

//     const res = await fetch('/logs')
//     const data = await res.json()

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }

// Get logs from the server
export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs')
    const data = await res.json()
  
    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.data
    })
  }

}


// Sets loading status to true
// export const setLoading = () => { type: SET_LOADING }

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
import { 
  GET_LOGS, 
  SEARCH_LOGS,
  ADD_LOG, 
  UPDATE_LOG,
  DELETE_LOG, 
  SET_CURRENT, 
  CLEAR_CURRENT,
  SET_LOADING, 
  LOGS_ERROR
} from './types'

// Get logs
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
      payload: e.response.statusText
    })
  }
}

// Search logs
export const searchLogs = searchFor => async dispatch => {
  try {
    setLoading()

    const res = await fetch(`/logs?q=${searchFor}`)
    const data = await res.json()
  
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    })
  }
}

// Add new log
export const addLog = log => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
  
    dispatch({
      type: ADD_LOG,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    })
  }
}


// Update log
export const updateLog = log => async dispatch => {
  try {
    setLoading()

    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
  
    dispatch({
      type: UPDATE_LOG,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    })
  }
}

// Delete log
export const deleteLog = id => async dispatch => {
  try {
    setLoading()

    await fetch(`/logs/${id}`, { method: 'DELETE' })
  
    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (e) {
    dispatch({
      type: LOGS_ERROR,
      payload: e.response.statusText
    })
  }
}

// Sets current log to use in edit form
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

// Clears current log. Used after edit form is closed
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

// Sets loading status to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
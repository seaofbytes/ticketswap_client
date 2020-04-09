import request from 'superagent'

const baseUrl = 'http://localhost:4000'
export const fetchEvents = () => (dispatch, getState) => {
  request
    .get(`${baseUrl}/event`)
    .then(response => {
      const parsedEvents = JSON.parse(response.text)
      dispatch(allEvents(parsedEvents))
    })
    .catch(error => console.log(error))
}

export const updateEvent = (event, id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .put(`${baseUrl}/event/${id}`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(event)
    .then(response => {
      dispatch(updatedEvent(response.body))
    })
    .catch(error => console.log(error))
}

export const createEvent = event => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(event)
    .then(response => {
      dispatch(newEvent(response.body))
    })
    .catch(error => console.log(error))
}

export const fetchSingleEvent = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/event/${id}`)
    .then(response => {
      const parsedEvent = JSON.parse(response.text)
      console.log('RESPONSE FROM SINGLE EVENT ACTION ', parsedEvent)
      dispatch(singleEvent(parsedEvent))
    })
    .catch(error => console.log(error))
}

const newEvent = event => {
  return {
    type: 'NEW_EVENT',
    payload: event
  }
}

const allEvents = events => {
  return {
    type: 'ALL_EVENTS',
    payload: events
  }
}

const singleEvent = event => {
  return {
    type: 'SINGLE_EVENT',
    payload: event
  }
}

const updatedEvent = event => {
  return {
    type: 'UPDATED_EVENT',
    payload: event
  }
}

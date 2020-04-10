import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const fetchSingleTicket = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/ticket/${id}`)
    .then(response => {
      const parsedTicket = JSON.parse(response.text)
      dispatch(singleTicket(parsedTicket))
    })
    .catch(error => console.log(error))
}

export const updateTicket = (ticket, id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .put(`${baseUrl}/ticket/${id}`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(ticket)
    .then(response => {
      dispatch(updatedTicket(response.body))
    })
    .catch(error => console.log(error))
}

export const fetchTickets = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/event/${id}/tickets/`)
    .then(response => {
      const tickets = JSON.parse(response.text)
      dispatch(allTickets(tickets))
    })
    .catch(error => console.log(error))
}

export const createTicket = ticket => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/ticket`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(ticket)
    .then(response => {
      console.log(response.body)
      dispatch(newTicket(response.body))
    })
    .catch(error => console.log(error))
}

const allTickets = tickets => {
  return {
    type: 'ALL_TICKETS',
    payload: tickets
  }
}

const newTicket = ticket => {
  return {
    type: 'NEW_TICKET',
    payload: ticket
  }
}

const singleTicket = ticket => {
  return {
    type: 'SINGLE_TICKET',
    payload: ticket
  }
}

const updatedTicket = ticket => {
  return {
    type: 'UPDATED_TICKET',
    payload: ticket
  }
}

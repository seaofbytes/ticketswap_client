import request from 'superagent'

const baseUrl = 'http://localhost:4000'
export const fetchRisk = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/risk/${id}`)
    .then(response => {
      const risk = JSON.parse(response.text)
      dispatch(getRisk(risk))
    })
    .catch(error => console.log(error))
}

const getRisk = ticket => {
  return {
    type: 'GET_RISK',
    payload: ticket
  }
}

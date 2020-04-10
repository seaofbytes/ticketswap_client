import request from 'superagent'

const baseUrl = 'http://localhost:4000'
export const fetchComments = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/ticket/${id}/comment`)
    .then(response => {
      dispatch(allComments(JSON.parse(response.text)))
    })
    .catch(error => console.log(error))
}

export const createComment = (text, id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .post(`${baseUrl}/comment`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send({
      text: text,
      ticketId: id,
      userId: user.userId
    })
    .then(response => {
      dispatch(newComment(response.body))
    })
    .catch(error => console.log(error))
}

const newComment = comment => {
  return {
    type: 'NEW_COMMENT',
    payload: comment
  }
}

const allComments = comments => {
  return {
    type: 'ALL_COMMENTS',
    payload: comments
  }
}

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_RISK':
      return action.payload

    default:
      return state
  }
}

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SINGLE_EVENT':
      return action.payload

    default:
      return state
  }
}

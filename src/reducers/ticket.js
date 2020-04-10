const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_TICKET':
      return [...state, action.payload]

    case 'UPDATED_TICKET':
      return [action.payload]

    case 'ALL_TICKETS':
      return action.payload

    default:
      return state
  }
}

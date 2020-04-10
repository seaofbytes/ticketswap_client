const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload

    case 'NEW_EVENT':
      return [...state, action.payload]

    case 'SINGLE_EVENT':
      return action.payload

    case 'UPDATED_EVENT':
      return [action.payload]
    default:
      return state
  }
}

export default (state, action) => {
    switch(action.type) {
      case 'SET_LOCATION':
        return {
          ...state,
          location: action.payload
        }
      case "SET_POINTED":
        return {
          ...state,
          pointed: action.payload
        } 
      case 'SET_OPEN':
        return {
          ...state,
          open: action.payload
        }
      default:
        return state;
    }
  }
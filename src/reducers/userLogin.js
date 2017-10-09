const initialStateUser = {isLoggedIn: false, user: undefined}

const userLogin = (state = initialStateUser, action) => {
    switch (action.type) {
      case 'SET_LOGIN_STATUS':
        return {
          ...state,
          isLoggedIn: action.isLoggedIn
        }
      
      case 'SET_USER':
        return {
          ...state,
          user: action.user
        }

      default:
        return state
    }
  }
  
  export default userLogin
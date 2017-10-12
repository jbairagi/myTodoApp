const token= window.localStorage.getItem('token')
var jwtDecode = require('jwt-decode');

const initialStateUser = () => {
  if(token === null) return {isLoggedIn: false, user: undefined}
  
  else{
    const isRoleManager = (jwtDecode(token).role === 'manager' ) ? true : false
    const user = jwtDecode(token).name
    return {isRoleManager: isRoleManager, isLoggedIn: true, user: user};
  }
}

const userLogin = (state = initialStateUser(), action) => {
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
    
    case 'SET_USER_ROLE':
      return {
        ...state,
        isRoleManager: action.isRoleManager
      }
    
    case 'CLEAR_STORE':
      state=[];
      return state

    default:
      return state
  }
}

export default userLogin
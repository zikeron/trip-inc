const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: {},
      };
    case 'REGISTER_REQUEST':
      console.log(action.payload, '<------------payload');
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

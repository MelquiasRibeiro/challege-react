/* eslint-disable no-case-declarations */
export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      const uptatedUsers= state.users.filter(user => user.email !== action.payload)
      localStorage.setItem("users", JSON.stringify(uptatedUsers));
      return {
        ...state,
        users:uptatedUsers
      }
    case 'ADD_USER':
      const newUsers=[action.payload, ...state.users]
      localStorage.setItem("users", JSON.stringify(newUsers));
      return {
        ...state,
        users: newUsers
      }
    case 'EDIT_USER':
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.email === updateUser.email) {
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }

    default:
      return state;
  }
}

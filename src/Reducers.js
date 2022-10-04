function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodos = {
        title: action.title,
        description: action.description,
        author: action.author,
        isChecked: action.isChecked,
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
      };
      return [newTodos, ...state];
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    todos: todoReducer(state.todos, action),
  };
}

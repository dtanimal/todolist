function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        username: action.username,
        access_token: action.access_token,
      };
    case "REGISTER":
      return {
        username: action.username,
        access_token: action.access_token,
      };
    case "LOGOUT":
      return null;
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
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
        id: action._id,
      };
      return [newTodos, ...state];
    case "TOGGLE_TODO":
      const toggleTodo = state.map((todo) => {
        if (todo._id === action._id) {
          return { ...todo, dateCompleted: !todo.dateCompleted };
        }
        return todo;
      });
      return toggleTodo;
    case "DELETE_TODO":
      return state.filter((todo) => todo._id !== action._id);
    case "FETCH_TODOS":
      return action.todos;
    case "CLEAR_TODOS":
      return [];
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

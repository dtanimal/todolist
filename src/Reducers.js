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
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted,
        id: action.id,
      };
      return [newTodos, ...state];
    case "TOGGLE_TODO":
      const toggleTodo = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, dateCompleted: !todo.dateCompleted };
        }
        return todo;
      });
      return toggleTodo;
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
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

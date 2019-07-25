import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    {
      id: 1,
      task: "Wash Clothes",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    },
    {
      id: 2,
      task: "Clean Dishes",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    },
    {
      id: 3,
      task: "Study",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    },
    {
      id: 4,
      task: "Clean Room",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    },
    {
      id: 5,
      task: "Wash Car",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    },
    {
      id: 6,
      task: "Meditate",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    },
    {
      id: 7,
      task: "Exercise",
      dateTime: "June 26th 2019, 5:15:00 am",
      done: false
    }
  ],
  count: 10
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = { id: ++state.count, ...action.payload };
      console.log("State count: ", state.count);
      return {
        ...state,
        todos: [...state.todos, newTodo],
        count: ++state.count
      };
    case REMOVE_TODO:
      //console.log(typeof action.payload);
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    case UPDATE_TODO:
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, index),
        action.payload,
        ...state.todos.slice(index + 1)
      ];
      return {
        ...state,
        todos: updatedTodos
      };
    case TOGGLE_TODO:
      // find index of todo task to be toggled
      const i = state.todos.findIndex(
        todo => todo.id === action.payload
      );
      const changedTodos = state.todos.slice();
      changedTodos[i] = {...changedTodos[i], done: !changedTodos[i].done}
      return {
        ...state,
        todos: changedTodos
      };
    default:
      return state;
  }
};

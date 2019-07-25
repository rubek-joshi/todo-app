export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};

export const updateTodo = updatedTodo => {
  return {
    type: UPDATE_TODO,
    payload: updatedTodo
  }
}

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}
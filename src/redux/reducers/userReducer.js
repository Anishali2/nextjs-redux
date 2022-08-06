// create state
const initialState = {
    todo: [],
    isLoading:false
}
export default function todo(state = initialState, action) {
    switch (action.type) {
       
        case 'ADD_TODO': {
          return Object.assign({}, state, {
            todo: state.todo.concat({
              id: "action.id",
              text: action.text,
              isLoading: true
            })
          })
        }
        // case 'REMOVE_TODO': {
        //   return Object.assign({}, state, {
        //     todos: state.todos.filter(todo => todo.id !== action.id)
        //   })

        // }
       
        default:
          return state
      }
  }
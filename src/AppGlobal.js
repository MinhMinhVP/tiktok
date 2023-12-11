import { useStore,actions } from "./store"

function App(){

    const [state,dispatch]=useStore()
    const {todos,todoInput}=state
 


    const handleAdd = ()=>{
        dispatch(actions.addTodoInput(todoInput))
    }
    console.log(todos);
    return (
        <div>
            <input
                value={todoInput}
                placeholder="Enter todo ..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo,index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
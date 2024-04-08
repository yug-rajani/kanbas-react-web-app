import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
    const API = `${API_BASE}/a5/todos`;

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState<{ id: number; title: string; description: string; due: string; completed: boolean; }[]>([]);

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    const [errorMessage, setErrorMessage] = useState(null);
    const deleteTodo = async (todo: { id: any; title?: string; description?: string; due?: string; completed?: boolean; }) => {
        try {

            const response = await axios.delete(`${API}/${todo.id}`);
            console.log(response.data);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const removeTodo = async (todo: { id: number; title: string; }) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const updateTodo = async () => {
        try {

            const response = await axios.put(`${API}/${todo.id}`, todo);
            console.log(response.data);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };


    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}>
                Create Todo
            </a>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <br /><br />

            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <br />
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <br />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} />
            <br />
            <label>
                <input value={todo.completed.toString()} type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label>
            <br />
            <button className="btn btn-primary btn-sm"
                onClick={postTodo}> Post Todo </button>

            <button className="btn btn-warning btn-sm mx-1"
                onClick={updateTodo}>
                Update Todo
            </button>


            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>

            <br />

            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description: e.target.value
                })} />
            <br />
            <a href={`${API}/${todo.id}/description/${todo.description}`}>
                Describe Todo ID = {todo.id}
            </a>

            <br />

            <input
                type="checkbox" checked={todo.completed}
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked
                })} />
            <a className="mx-1"
                href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Complete Todo ID = {todo.id}
            </a>

            <br />

            <button className="btn btn-primary btn-sm mx-5 my-1"
                onClick={createTodo} >
                Create Todo
            </button>
            <br />
            <button className="btn btn-success btn-sm mx-5"
                onClick={updateTitle} >
                Update Title
            </button>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <ul>
                {todos.map((todo: { id: number, title: string, description: string, due: string, completed: boolean }) => (
                    <li key={todo.id}>
                        {todo.title}
                        <input className="mx-1"
                            checked={todo.completed}
                            type="checkbox" readOnly />
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                        <button className="mx-1 btn btn-warning btn-sm"
                            onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                        <button className="mx-1 btn btn-danger btn-sm"
                            onClick={() => removeTodo(todo)} >
                            Remove
                        </button>
                        <button onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default WorkingWithArrays;
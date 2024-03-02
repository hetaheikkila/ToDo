import { useState } from "react";
import TodoTable from "./TodoTable";

export default function TodoList() {

    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        event.preventDefault();
        console.log("insert new description to the box");
        setTodos([...todos, todo]);
    }
    const deleteByIndex = (index) => {
        console.log(index);
        setTodos(todos.filter((todo, i) => i !== index));
    }


    return (
        <>
            <form onSubmit={addTodo}>
                <p> <label>Description </label><input type="text" name="desc" value={todo.desc} onChange={inputChanged} /></p>
                <p><label>Date </label><input type="text" name="date" value={todo.date} onChange={inputChanged} /></p>
                <input type="submit" value="add" />

            </form>
            <TodoTable todos={todos} poistaTodo={deleteByIndex} />
        </>
    );
}
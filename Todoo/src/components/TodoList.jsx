import { useState, useRef } from "react";
import TodoTable from "./TodoTable";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function TodoList() {

    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);
    const [columnDefs] = useState([
        { field: 'desc', sortable: false, filter: true },
        { field: 'date', filter: true },
        { field: 'priority', filter: true, cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }, }
    ]);
    const gridRef = useRef();


    const addTodo = (event) => {
        event.preventDefault();
        console.log("insert new description to the box");
        setTodos([...todos, todo]);
    }
    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    };


    return (
        <>
            <input
                placeholder="Description"
                onChange={e => setTodo({ ...todo, desc: e.target.value })}
                value={todo.desc} />
            <input
                placeholder="Date"
                onChange={e => setTodo({ ...todo, date: e.target.value })}
                value={todo.date} />
            <input
                placeholder="Priority"
                onChange={e => setTodo({ ...todo, priority: e.target.value })}
                value={todo.priority} />
            <button onClick={addTodo}>Add</button>
            <button onClick={handleDelete}>Delete</button>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columnDefs}
                    rowSelection="single"
                    animateRows={true}
                />
            </div>
        </>
    );
}
import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import DatePicker from "./DatePicker";

export default function TodoList() {

    const [todo, setTodo] = useState({ desc: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);
    const [columnDefs] = useState([
        { field: 'desc', sortable: false, filter: true, floatingFilter: true },
        { field: 'date', filter: true, floatingFilter: true },
        { field: 'priority', filter: true, floatingFilter: true, cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }, }
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
    const handleDateChange = (event) => {
        setTodo({ ...todo, date: event.target.value })
    }


    return (
        <>
            <h3>ToDo lista</h3>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">

                <TextField
                    label="Description"
                    name="desc"
                    value={todo.desc}
                    onChange={e => setTodo({ ...todo, desc: e.target.value })} />

               

                    <DatePicker value={todo.date} onChange={handleDateChange}/> 

                <TextField
                    label="Priority"
                    name="priority"
                    value={todo.priority}
                    onChange={e => setTodo({ ...todo, priority: e.target.value })} />

                <Button variant="contained" onClick={addTodo}>
                    Add
                </Button>
                <Button variant="contained" onClick={handleDelete}>
                    Delete
                </Button>

            </Stack>
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
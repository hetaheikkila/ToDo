

export default function TodoTable(props){


    return (
<table>
        <tbody>
            <tr><th>Todos</th></tr>
            {props.todos.map((todo, index) => (
                <tr key={index}>
                    <td>{todo.desc}</td>
                    <td>{todo.date}</td>
                    <td><button onClick={() => props.poistaTodo(index)}>Delete</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    );
}
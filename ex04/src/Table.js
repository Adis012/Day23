const Table = (props) => {
    const {characterDate, removeCharacter} = props;

    return (
        <table>
            <tableHeader />
            <TableBody characterDate={characterDate} removeCharacter={removeCharacter} />
        </table>
    )
    }

    <tr key={index}>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
        <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
    </tr>

export default Table;
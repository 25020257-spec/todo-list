
function Render({ list, onList }) {
    function FinishWork(id) {
        const completedList = list.map((toDo) => { return (toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo) });
        onList(completedList)
    }
    function Delete(event) {
        const newList = list.filter((toDo) => toDo.Work !== event.target.value);
        onList(newList)
    }
    return (
        <>
            {list.map((toDo) => {
                return <tr key={toDo.id} ><td>{toDo.id}</td>
                    <td style={{ textDecoration: toDo.completed ? "line-through" : "none" }} >{toDo.Work}</td>
                    <td><input type="checkbox" checked={toDo.completed} onChange={() => { FinishWork(toDo.id) }} /></td>
                    <td><button value={toDo.Work} onClick={Delete}>Xóa</button></td>
                </tr >
            })}
        </>
    )
}
export default Render;
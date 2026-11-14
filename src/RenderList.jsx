
function Render({ list, RenderFinish, RenderDelete }) {

    function FinishWork(id) {
        RenderFinish(id)
    }
    function Delete(id) {

        RenderDelete(id)
    }


    return (
        <>
            {list.map((toDo) => {
                return <tr key={toDo.id} ><td>{toDo.id}</td>
                    <td style={{ textDecoration: toDo.completed ? "line-through" : "none" }} >{toDo.Work}</td>
                    <td><input type="checkbox" checked={toDo.completed} onChange={() => { FinishWork(toDo.id); }} /></td>
                    <td><button value={toDo.Work} onClick={() => Delete(toDo.id)}>Xóa</button></td>

                </tr >
            })}
        </>
    )
}
export default Render;
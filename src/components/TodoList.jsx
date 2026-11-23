
function Render({ list, RenderFinish, RenderDelete, RenderRewrite }) {
    //sửa

    return (
        <table>
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Công việc</td>
                    <td>Đã làm</td>
                </tr>

            </thead>
            <tbody>
                {list && list.length > 0 ? list.map((toDo, index) => {
                    return <tr key={toDo.id} ><td>{index + 1}</td>
                        <td style={{ textDecoration: toDo.completed ? "line-through" : "none" }} >{toDo.work}</td>
                        <td><input type="checkbox" checked={toDo.completed} onChange={() => { RenderFinish(toDo.id); }} /></td>
                        <td><button onClick={() => RenderDelete(toDo.id)}>Xóa</button></td>
                        <td><button onClick={() => RenderRewrite(toDo)}>Sửa</button></td>
                    </tr >
                }) : <tr><td colSpan="3">Chưa có công việc nào</td></tr>}
            </tbody>
        </table >

    )
}
export default Render;
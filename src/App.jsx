import { useState } from 'react'
import Render from "./RenderList.jsx"
function App() {
  const [TodoList, setTodo] = useState([])
  const [id, setId] = useState(1)
  const [Work, setWork] = useState("")
  function handleSubmit(event) {
    event.preventDefault();
    if (!Work.trim()) {
      alert("Vui lòng nhập tên công việc")
      setWork("");
      return;
    }
    else if (TodoList.some((user) => user.Work === Work)) {
      alert("Công việc bị trùng");
      return;
    }

    const newWork = { id: id, Work: Work, completed: false }
    setTodo([...TodoList, newWork]);
    setId(prev => prev + 1);
    alert("Đã thêm thành công");
    setWork("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={Work} onChange={(event) => setWork(event.target.value)} placeholder="Enter..."></input>
        <button type="submit">Thêm</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Công việc</td>
            <td>Đã làm</td>

          </tr>

        </thead>
        <tbody>

          <Render list={TodoList} onList={setTodo} ></Render>
        </tbody>
      </table>


    </>
  )
}

export default App

import { useState } from 'react'
import Render from "./RenderList.jsx"
import Filter from "./Filter.jsx"
function App() {
  const [TodoList, setTodo] = useState([])
  const [id, setId] = useState(1)
  const [Work, setWork] = useState("")
  const [filter, setFilter] = useState("all")
  //lọc
  const newList = TodoList.filter((toDo) => {
    if (filter === "unFinish") return !toDo.completed;
    else if (filter === "Finish") { return toDo.completed; }
    return true;
  })
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
  function handleDelete(id) {
    const newList = TodoList.filter((Todo) => Todo.id !== id);
    setTodo(newList)
  }
  function handleFinish(id) {
    const newList = TodoList.map((Todo) => Todo.id === id ? { ...Todo, completed: !Todo.completed } : Todo);
    setTodo(newList)
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
          <Render list={newList} RenderDelete={handleDelete} RenderFinish={handleFinish}></Render>

        </tbody>
      </table>
      <div><button value="all" onClick={() => setFilter("all")}>Tất cả</button>
        <button value="unFinish" onClick={() => setFilter("unFinish")}>Chưa xong</button>
        <button value="finish" onClick={() => setFilter("Finish")}>Đã xong</button>
      </div>





    </>
  )
}

export default App

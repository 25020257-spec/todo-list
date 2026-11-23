
import Render from "./components/TodoList.jsx"
import Filter from "./components/TodoFilter.jsx"
import Form from "./components/TodoForm.jsx"
import { useTodo } from "./useTodo.jsx"
import "./App.css"
function App() {
  const [handleSubmit, setWork, work, handleCancel, editingId, newList, handleDelete, handleFinish, reWrite, filter, setFilter, deleteAll] = useTodo();
  return (
    <>

      <Form handleSubmit={handleSubmit} setWork={setWork} work={work} handleCancel={handleCancel} editingId={editingId} ></Form>
      <Render list={newList} RenderDelete={handleDelete} RenderFinish={handleFinish} RenderRewrite={reWrite}></Render>
      <Filter filter={filter} setFilter={setFilter} deleteAll={deleteAll}></Filter>

    </>
  )
}



export default App

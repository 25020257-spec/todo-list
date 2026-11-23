import { useLocalStorage } from "./useLocalStorage.jsx"
import { useState } from "react"
export function useTodo() {
    const [todoList, setTodo] = useLocalStorage();
    const [editingId, setEditingId] = useState(null)
    const [work, setWork] = useState("")
    const [filter, setFilter] = useState("all")
    //lọc
    const newList = todoList.filter((toDo) => {
        if (filter === "doing") return !toDo.completed;
        else if (filter === "done") return toDo.completed;
        return true;
    })

    //Nhập thêm công việc
    function handleSubmit(event) {
        event.preventDefault();
        const text = work.trim()
        if (!text) {
            alert("Vui lòng nhập tên công việc")
            return;
        }
        if (todoList.some((user) => user.work === text)) {
            alert("Hãy thay đổi tên công việc (trùng)");
            return;
        }
        if (editingId === null) {
            const newWork = { id: Date.now(), work: text, completed: false }
            setTodo([...todoList, newWork]);
            setWork("");
        }
        else {
            setTodo(prev => prev.map((Todo) => Todo.id === editingId ? { ...Todo, work: text } : Todo));
            setEditingId(null);
            setWork("")
        }
    }
    //code để xử lí từ component con(RenderList)
    function handleDelete(id) {
        if (confirm("Bạn có chắc chắn muốn xóa công việc này")) {
            setTodo(prev => prev.filter((Todo) => Todo.id !== id));
            if (id === editingId) {
                handleCancel();
            }
        }
    }
    function handleFinish(id) {
        setTodo(prev => prev.map((Todo) => Todo.id === id ? { ...Todo, completed: !Todo.completed } : Todo))
    }
    //Sửa
    function reWrite(toDo) {
        setEditingId(toDo.id);
        setWork(toDo.work);
    }
    //Hủy sửa
    function handleCancel() {
        setEditingId(null);
        setWork("")
    }
    //Xóa tất cả
    function deleteAll() {
        if (confirm("Bạn có chắc chắn muốn xóa tất cả cac việc đã xong không ?")) {
            setTodo(prev => prev.filter((Todo) => !Todo.completed));
            if (todoList.some((toDo) => toDo.id === editingId && toDo.completed)) { handleCancel(); }
        }
    }
    return [handleSubmit, setWork, work, handleCancel, editingId, newList, handleDelete, handleFinish, reWrite, filter, setFilter, deleteAll]
}
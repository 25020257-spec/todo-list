import { useState, useEffect } from "react"
export function useLocalStorage() {
    const [todoList, setTodo] = useState(() => {
        try {
            const storeList = localStorage.getItem("tDo");
            return storeList ? JSON.parse(storeList) : [];
        }
        catch (error) { console.error("Dữ liệu tải xuống bị lỗi"); return [] }

    })
    //lưu localStorage
    useEffect(() => { localStorage.setItem("tDo", JSON.stringify(todoList)) }, [todoList])
    return [todoList, setTodo];
}
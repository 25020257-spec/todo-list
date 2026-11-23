
function Filter({ filter, setFilter, deleteAll }) {
    return (
        <div><button value="all" onClick={() => setFilter("all")} className={` btn ${filter === "all" ? "active" : ""}`}>Tất cả</button>
            <button value="doing" onClick={() => setFilter("doing")} className={`btn ${filter === "doing" ? "active" : ""}`}>Chưa xong</button>
            <button value="done" onClick={() => setFilter("done")} className={`btn ${filter === "done" ? "active" : ""}`}>Đã xong</button>
            <button onClick={deleteAll}>Xóa các việc hoàn thành</button>
        </div>
    )
}
export default Filter;
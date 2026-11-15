function Form({ work, setWork, handleCancel, handleSubmit, editingId }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={work} onChange={(event) => setWork(event.target.value)} placeholder="Enter..."></input>
            <button type="submit">{editingId !== null ? "Sửa" : "Thêm"}</button>
            <button type="button" onClick={handleCancel}>{editingId !== null ? "HỦY" : "XÓA TRẮNG"}</button>
        </form>
    )
}
export default Form
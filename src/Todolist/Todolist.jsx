import { useState } from "react";

const Todolist = () => {
    const [inputValue, setInputValue] = useState();
    const [todolist, setTodolist] = useState([]);

    const FormHandler = (e) => {
        e.preventDefault()
        setTodolist((prev) => [...prev, inputValue])

        setInputValue("")
    };
    const deleteHandler = (task) => {
        const removeTask = todolist.filter((list) => list !== task);
        setTodolist(removeTask)
    };
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="bg-black px-5 pb-4 rounded-2 text-white">
                    <h1 className="ms-2 py-3">To Do List</h1>
                    <form className="d-flex" onSubmit={FormHandler}>
                        <input type="text" value={inputValue} className="form-control" placeholder="Enter your task..." onChange={(e) => {
                            setInputValue(e.target.value);
                        }} />
                        <button type="submit" className="btn btn-success ms-2 px-3">Add</button>
                    </form>
                    <div className="mt-2">
                        {todolist.map((task) => {
                            return <div className="d-flex justify-content-between py-2">
                                <h3>{task}</h3>
                                <button onClick={() => deleteHandler(task)} className="btn btn-danger ms-2">Delete</button>
                            </div>;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todolist;


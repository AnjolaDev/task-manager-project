import { useState } from "react";

function TaskForm({ addTask }) {
    // Form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const [priority, setPriority] = useState("low")
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!title.trim()) return; 

        // New task object
        const newTask = {
            _id: Date.now().toString(), // temporary unique ID
            title,
            description,
            status,
            priority,
        };

        addTask(newTask);
        setTitle("");
        setDescription("");
        setStatus("pending");
        setPriority("low");
    };

    return (
        <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
                <input 
                type="text" 
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner transition uppercase tracking-wide font-semibold"
                />

                <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description (optional)"
                className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-inner transition uppercase tracking-wide font-medium"/>
            
                {/* === NEW: Status and Priority dropdowns === */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Status */}
                <div className="flex flex-col">
                    <label className="font-bold uppercase text-sm mb-1">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                {/* Priority */}
                <div className="flex flex-col">
                    <label className="font-bold uppercase text-sm mb-1">Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            {/* Submit */}
            <button type="submit" className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 shadow-md uppercase tracking-wide font-bold">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;
function TaskItem({ task, onDelete, onUpdate }) {

    // Priority color
    const priorityColor =
    task.priority === "low"
    ? "text-green-600"
    : task.priority === "medium"
    ? "text-yellow-600"
    : "text-red-600"
    return (
        <div className="border-3 border-transparent rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 p-[-1px]">
        <div className="bg-white rounded-lg p-5 shadow-md transition hover:shadow-xl">
            <h3 className={`text-lg font-semibold ${task.status === "done" ? "line-through text-gray-400 italic" : "text-gray-800"
            } uppercase tracking-wide`}
            >
                {task.title}
                </h3>

            {/* Description (optional) */}
            {task.description && (
                <p className="text-sm text-gray-600 mt-1 italic font-medium tracking wide">{task.description}</p>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-3 text-sm">
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                    {/* Status dropdown */}
                    <div>
                        <span className="font-bold uppercase tracking-wide">
                        Status:
                        </span>
                        <select 
                        value={task.status} 
                        onChange={(e) => onUpdate(task._id, { status: e.target.value })} 
                        className="ml-1 border rounded px-2 py-1 text-sm shadow-sm focus:ring-1 focus:ring-purple-400">
                            <option value="pending">Pending</option>
                            <option value="in-progress">In-Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>

                    {/* Priority dropdown */}
                    <div>
                        <span className="font-bold uppercase tracking-wide">
                        Priority:
                        </span>
                        <select 
                        value={task.priority} 
                        onChange={(e) => onUpdate(task._id, { priority: e.target.value })} 
                        className="ml-1 border rounded px-2 py-1 text-sm shadow-sm focus:ring-1 focus:ring-purple-400">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <span className={`ml-2 font-semibold ${priorityColor}`}>{task.priority.toUpperCase()}</span>
                    </div>
                </div>

            {/* Delete button */}
            <button 
            onClick={() => onDelete(task._id)} 
            className="text-red-600 hover:text-red-800 text-sm mt-2 sm:mt-0 font-bold uppercase tracking-wide">
                Delete
            </button>
            </div>            
        </div>
        </div>
    );
}

export default TaskItem;
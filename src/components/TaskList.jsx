import TaskItem from "./TaskItem";

function TaskList({ tasks, loading, deleteTask, updateTask })
{
    // If tasks are still loading 
    if (loading) 
        return (
            <p className="text-center text-gray-500 mt-6">Loading tasks...</p>
        );
    
    // If there are no tasks
    if (tasks.length === 0) 
        return (
            <p className="text-center text-gray-400 mt-4">No tasks found.</p>
        );
    
    // If tasks exist, display them
    return (
        <div className="max-w-3xl mx-auto space-y-4 mt-6">
            {tasks.map((task) => (
            <TaskItem 
            key={task._id} 
            task={task} 
            onDelete={deleteTask}
            onUpdate={updateTask}
            />
        ))}
        </div>
    );
}

export default TaskList;
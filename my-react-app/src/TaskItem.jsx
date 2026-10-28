import Cl from "./CL.jsx";

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm shadow-stone-900/[0.03]">
            <span className={`min-w-0 flex-1 break-words text-sm ${task.completed ? "text-stone-400 line-through" : "text-stone-800"}`}>
                {task.text}
            </span>
            <Cl
                isDone={task.completed}
                onDone={onToggle}
                onDelete={onDelete}
            />
        </li>
    );
}

export default TaskItem;
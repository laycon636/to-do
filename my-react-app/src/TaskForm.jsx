import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTask = task.trim();
        if (!trimmedTask) return;

        onAddTask(trimmedTask);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a new task"
                aria-label="New task"
                className="min-w-0 flex-1 rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
            />
            <button
                type="submit"
                className="rounded-xl bg-emerald-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 active:scale-[0.98]"
            >
                Add task
            </button>
        </form>
    );
}

export default TaskForm;
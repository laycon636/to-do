import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <section className="mt-9" aria-labelledby="task-list-heading">
            <h2
                id="task-list-heading"
                className="mb-4 text-sm font-semibold uppercase tracking-wider text-stone-500"
            >
                Your tasks <span className="text-stone-400">({tasks.length})</span>
            </h2>
            {tasks.length === 0 ? (
                <p className="rounded-xl border border-dashed border-stone-300 px-4 py-8 text-center text-sm text-stone-500">
                    No tasks yet. Add one above to get started.
                </p>
            ) : (
                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={() => onToggleTask(task.id)}
                            onDelete={() => onDeleteTask(task.id)}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default TaskList;
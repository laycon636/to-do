import { useRef, useState } from "react";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const nextTaskId = useRef(0);

    const handleAddTask = (text) => {
        const newTask = {
            id: nextTaskId.current++,
            text,
            completed: false,
        };
        setTasks((currentTasks) => [...currentTasks, newTask]);
    };

    const handleToggleTask = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        );
    };

    const handleDeleteTask = (taskId) => {
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== taskId),
        );
    };

    return (
        <main className="min-h-screen bg-stone-100 px-4 py-12 text-stone-800 sm:px-6">
            <section className="mx-auto w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-9">
                <header className="mb-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                        Your day, at a glance
                    </p>
                    <h1 className="font-[Manrope] text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                        Todo List
                    </h1>
                    <p className="mt-2 text-sm text-stone-500">
                        Capture a task and make a little progress.
                    </p>
                </header>
                <TaskForm onAddTask={handleAddTask} />
                <TaskList
                    tasks={tasks}
                    onToggleTask={handleToggleTask}
                    onDeleteTask={handleDeleteTask}
                />
            </section>
        </main>
    );
}

export default TodoList;
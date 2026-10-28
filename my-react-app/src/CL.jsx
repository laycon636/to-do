function Cl({ isDone, onDone, onDelete }) {
    return (
        <div className="flex shrink-0 items-center gap-2">
            <button
                type="button"
                onClick={onDone}
                aria-pressed={isDone}
                className="rounded-lg border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-600 transition hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
                {isDone ? "Undo" : "Done"}
            </button>
            <button
                type="button"
                onClick={onDelete}
                className="rounded-lg px-2 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                aria-label="Delete task"
            >
                Delete
            </button>
        </div>
    );
}

export default Cl;
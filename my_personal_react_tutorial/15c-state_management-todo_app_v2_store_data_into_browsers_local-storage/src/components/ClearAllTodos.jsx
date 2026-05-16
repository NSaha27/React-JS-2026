function ClearAllTodos({ onClearAllTodos }) {
  return (
    <div className="mt-6 flex justify-center">
      <button
        className="bg-red-500 py-2.5 px-5 text-lg text-white font-semibold rounded-3xl cursor-pointer transition-[0.2s] hover:bg-red-600"
        onClick={onClearAllTodos}
      >
        Clear All
      </button>
    </div>
  );
}

export default ClearAllTodos;

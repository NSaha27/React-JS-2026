function Content({ theme }) {
  return (
    <main
      className={`min-h-[90vh] flex justify-center items-center ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <h1
        className={`text-4xl font-extrabold capitalize ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`}
      >
        Toggle Background
      </h1>
    </main>
  );
}

export default Content;

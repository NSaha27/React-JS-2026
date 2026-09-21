import { Link } from "react-router";

function Welcome() {
  return (
    <div className="w-1/3 rounded-xl p-8 shadow-2xl bg-cyan-600 flex flex-col gap-16">
      <h1 className="text-center text-3xl font-extrabold capitalize text-white">
        Welcome to Task Scheduler
      </h1>
      <Link
        to="/display-tasks"
        className="py-4 px-12 rounded-lg shadow-lg bg-gray-100 text-xl font-semibold text-cyan-600 text-center capitalize cursor-pointer transition hover:bg-white"
      >
        Display Tasks
      </Link>
    </div>
  );
}

export default Welcome;

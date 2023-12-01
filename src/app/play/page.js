import TodoList from '../ui/play/TodoList';
import AddTask from '../ui/play/AddTask';

export const getAllTodos = async () => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export default async function Play() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">TODO Play</h1>
        <AddTask />
      </div>
      <div className="text-center">
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
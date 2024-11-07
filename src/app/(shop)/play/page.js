import TodoList from '../../ui/play/TodoList';
import AddTask from '../../ui/play/AddTask';
import Search from '../../ui/play/Search';

export const getAllTodos = async (query) => {
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });
  const todos = await res.json();
  const finalTODOs = query ? todos.filter(todo => todo?.text?.includes(query)): todos;
  return finalTODOs;
};

export default async function Play({searchParams: {query}}) {
  console.log(query);
  const tasks = await getAllTodos(query);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">TODO Play</h1>
        <AddTask />
      </div>
      <div className="text-center border-t border-black p-2">
        <Search />
        <TodoList tasks={tasks} />
      </div>
    </main>
  );
}
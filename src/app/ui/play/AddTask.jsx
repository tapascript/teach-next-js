'use client'

import { addTodo } from "@/app/actions/todo-actions";
import { useRouter } from "next/navigation";
const AddTask = () => {
  const router = useRouter();

  const addTodoItem = (formData) => {
    addTodo(formData);
    router.refresh();
  }
  
  return(
    <form action={addTodoItem}>
      <div>
        <label htmlFor="task"></label>
        <input 
          type="text" 
          id="task" 
          name="task"
          placeholder="Add a task"
          className="rounded p-1 placeholder:text-purple-300" />
      </div>
      <div className="p-4">
        <button 
          className="bg-purple-500 text-white p-2 text-md rounded-lg"
          type="submit">Add a Task</button>
      </div>
    </form>
  )
}

export default AddTask;
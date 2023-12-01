'use server'

export async function addTodo(todo) {
  
  let uuid = crypto.randomUUID();
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "id": uuid,
      "text": `${todo.get('task')}`
    }),
  });
  const addedTodo = await res.json();
  return addedTodo;
}
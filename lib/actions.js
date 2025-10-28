"use server";

import { redirect } from "next/navigation";
import { dbConnect } from "./dbConnect";
import { Todo } from "./models/todos";
import { revalidatePath } from "next/cache";

dbConnect();

// Create Todo
export async function addTodo(formData) {
  const title = formData.get("title");
  const body = formData.get("body");

  await Todo.create({ title, body, isDone: false });
  redirect("/todo"); 
}

// Toggle done
export async function toggleTodo(id, isDone) {
  await Todo.findByIdAndUpdate(id, { isDone });
  revalidatePath("/todos");
}

// Update todo
export async function updateTodo(id, data) {
  await Todo.findByIdAndUpdate(id, data);
  revalidatePath("/todos");
}

// Delete todo
export async function deleteTodo(id) {
  await Todo.findByIdAndDelete(id);
  revalidatePath("/todos");
}
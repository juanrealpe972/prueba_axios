import axios from "axios";

export const getTasksRequest = async () =>
  await axios.get("http://localhost:972/tasks");

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:972/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:972/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:972/tasks/${id}`);

export const updateTaskRequest = async (id, newCambios) =>
  await axios.put(`http://localhost:972/tasks/${id}`, newCambios);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:972/tasks/${id}`, {done});

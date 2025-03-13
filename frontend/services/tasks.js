import api from '../utils/axios';

// Get all tasks
export const getAllTasks = async () => {
  try {
    const response = await api.get('/tasks');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to fetch tasks');
  }
};

// Get task by ID
export const getTaskById = async (taskId) => {
  try {
    const response = await api.get(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to fetch task');
  }
};

// Create new task
export const createTask = async (taskData) => {
  try {
    const response = await api.post('/tasks', taskData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to create task');
  }
};

// Update task
export const updateTask = async (taskId, taskData) => {
  try {
    const response = await api.put(`/tasks/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to update task');
  }
};

// Delete task
export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Failed to delete task');
  }
};
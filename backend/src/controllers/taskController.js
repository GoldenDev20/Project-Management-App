const prisma = require('../utils/db');

// Create a new task
const createTask = async (req, res) => {
  const { title, description, status, projectId } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        projectId,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create task' });
  }
};

// Get all tasks for a project
const getTasks = async (req, res) => {
  const { projectId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: { projectId: parseInt(projectId) },
    });
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch tasks' });
  }
};

module.exports = { createTask, getTasks };
const prisma = require('../utils/db');

// Create a new project
const createProject = async (req, res) => {
  const { name, userId } = req.body;
  try {
    const project = await prisma.project.create({
      data: {
        name,
        userId,
      },
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project' });
  }
};

// Get all projects for a user
const getProjects = async (req, res) => {
  const { userId } = req.params;
  try {
    const projects = await prisma.project.findMany({
      where: { userId: parseInt(userId) },
    });
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch projects' });
  }
};

module.exports = { createProject, getProjects };
const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');

const router = express.Router();

router.post('/', createProject);
router.get('/:userId', getProjects);

module.exports = router;
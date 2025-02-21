const prisma = require('../utils/db');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password, // In a real app, hash the password before saving
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists' });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && user.password === password) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };
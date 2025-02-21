const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Use the DATABASE_URL from .env
    },
  },
});

module.exports = prisma;
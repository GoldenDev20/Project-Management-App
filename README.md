# Project Management App

A simple and customizable project management tool inspired by ClickUp. Built with React, Node.js, Express.js, PostgreSQL, and Prisma.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GoldenDev20/Project-Management-app.git

2. Navigate to the backend folder:
    cd backend

3. Install dependencies:
    npm Install

4. Set up the database:
    Update the .env file with your database credentials.
    Run Prisma migrations:
        npx prisma migrate dev --name init

5. Start the backend server:
    npm Start

6. Navigate to the frontend folder and repeat steps 3-5.

#### **Usage**
```markdown
## Usage

- Register a new user at `/api/users/register`.
- Login at `/api/users/login`.
- Create projects and tasks using the respective endpoints.


API Documentation
## API Documentation

### Users
- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Login a user.

### Projects
- **POST /api/projects**: Create a new project.
- **GET /api/projects/:userId**: Get all projects for a user.

### Tasks
- **POST /api/tasks**: Create a new task.
- **GET /api/tasks/:projectId**: Get all tasks for a project.

Contributing 
## Contributing

Contributions are welcome! Please read our [Contribution Guidelines](CONTRIBUTING.md) for details.

License
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
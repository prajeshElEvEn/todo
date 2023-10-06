# ToDo

![ToDo App](todo-app.png)

## Overview

This is a simple ToDo web application built using the MERN stack (MongoDB, Express, React, and Node.js) with Redux Toolkit for state management. The app allows users to create, read, update, and delete tasks. It also categorizes tasks into "To Do," "In Progress," and "Done" categories using the Eisenhower Matrix.

## Features

- User authentication (register and login)
- Create, read, update, and delete tasks
- Organize tasks using the Eisenhower Matrix (Quadrants: Urgent & Important, Not Urgent & Important, Urgent & Not Important, Not Urgent & Not Important)
- Drag-and-drop functionality to change task status
- User-friendly and responsive design
- Data stored in a MongoDB database
- Redux Toolkit for state management
- Node.js and Express for the backend server

## Installation

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB server is running)

### Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd todo-app
   ```

3. Install the server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install the client dependencies:

   ```bash
   cd ../client
   npm install
   ```

5. Configure environment variables:

   - Create a `.env` file in the `server` directory and set the following variables:

     ```
     MONGO_URI=your-mongodb-connection-uri
     JWT_SECRET=your-secret-key
     ```

6. Start the server (from the `server` directory):

   ```bash
   npm start
   ```

7. Start the client (from the `client` directory):

   ```bash
   npm start
   ```

8. The app should now be running. Open your web browser and visit:

   ```
   http://localhost:3000
   ```

## Usage

- Register for a new account or log in if you already have an account.
- Create tasks by filling out the form and clicking "Add Task."
- Drag and drop tasks into the appropriate Eisenhower Matrix quadrant.
- Update and delete tasks using the provided buttons.
- Log out when finished.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. We welcome contributions from the community.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or issues, please feel free to contact us at [your-email@example.com](mailto:your-email@example.com).

Thank you for using our ToDo app!

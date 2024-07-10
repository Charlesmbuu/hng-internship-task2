Sure! Here's a README file for your project:

---

# User Authentication & Organisation Management API

This is a Node.js application that provides user authentication and organisation management functionalities using Express, Sequelize, and PostgreSQL. The application includes endpoints for user registration, login, and organisation management, along with proper validations and JWT-based authentication.

## Table of Contents

- [User Authentication & Organisation Management API](#user-authentication--organisation-management-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Running Tests](#running-tests)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User Registration and Login
- JWT-based authentication
- Organisation creation and management
- User and organisation relationship management
- Validation and error handling

## Prerequisites

- Node.js
- PostgreSQL
- pgAdmin (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Database Setup

1. Install PostgreSQL and pgAdmin.
2. Create a new PostgreSQL database named `user_auth_db`.
3. Create a database user with appropriate privileges.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
DATABASE_USERNAME=your_db_username
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=user_auth_db
DATABASE_HOST=localhost
JWT_SECRET=your_generated_jwt_secret
```

## Usage

1. Run database migrations to set up the database schema:

   ```bash
   npx sequelize-cli db:migrate
   ```

2. Start the application:

   ```bash
   npm start
   ```

3. The application will be running at `http://localhost:3000`.

## API Endpoints

### User Authentication

- **Register:** `POST /auth/register`
  
  Request Body:
  ```json
  {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string"
  }
  ```

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "Registration successful",
    "data": {
      "accessToken": "eyJh...",
      "user": {
        "userId": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "phone": "string"
      }
    }
  }
  ```

- **Login:** `POST /auth/login`
  
  Request Body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "Login successful",
    "data": {
      "accessToken": "eyJh...",
      "user": {
        "userId": "string",
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "phone": "string"
      }
    }
  }
  ```

### Organisation Management

- **Get User Record:** `GET /api/users/:id` (Protected)

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "<message>",
    "data": {
      "userId": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "phone": "string"
    }
  }
  ```

- **Get User Organisations:** `GET /api/organisations` (Protected)

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "<message>",
    "data": {
      "organisations": [
        {
          "orgId": "string",
          "name": "string",
          "description": "string"
        }
      ]
    }
  }
  ```

- **Get Single Organisation:** `GET /api/organisations/:orgId` (Protected)

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "<message>",
    "data": {
      "orgId": "string",
      "name": "string",
      "description": "string"
    }
  }
  ```

- **Create Organisation:** `POST /api/organisations` (Protected)

  Request Body:
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "Organisation created successfully",
    "data": {
      "orgId": "string",
      "name": "string",
      "description": "string"
    }
  }
  ```

- **Add User to Organisation:** `POST /api/organisations/:orgId/users` (Protected)

  Request Body:
  ```json
  {
    "userId": "string"
  }
  ```

  Successful Response:
  ```json
  {
    "status": "success",
    "message": "User added to organisation successfully"
  }
  ```

## Running Tests

1. Create a `tests` directory in the root of the project.
2. Add test files as described in the acceptance criteria.
3. Run the tests using a testing framework like Jest or Mocha.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---
.

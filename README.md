<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

(Due to technical issues, the search service is temporarily unavailable.)

Here’s a comprehensive **README.md** file for your NestJS Blog API project. You can customize it further based on your needs.

---

# Blog API with NestJS 🚀

This is a **Blog API** built with **NestJS**, featuring user authentication, CRUD operations for posts, categories, and comments, and integration with **PostgreSQL** using **TypeORM**. The API also includes **Swagger documentation** for easy testing and exploration.

---

## Features

- **User Authentication**:
  - JWT-based authentication.
  - User registration and login.
- **CRUD Operations**:
  - Create, read, update, and delete **posts**.
  - Create, read, update, and delete **categories**.
  - Create, read, update, and delete **comments**.
- **Database Integration**:
  - **PostgreSQL** with **TypeORM**.
  - Entities for users, posts, categories, and comments.
- **API Documentation**:
  - **Swagger** integration for API exploration.
- **Pagination, Filtering, and Search**:
  - Pagination for posts and comments.
  - Filtering and search functionality.

---

## Technologies Used

- **Backend Framework**: [NestJS](https://nestjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Authentication**: [Passport.js](http://www.passportjs.org/) with JWT
- **API Documentation**: [Swagger](https://swagger.io/)
- **Validation**: [class-validator](https://github.com/typestack/class-validator) and [class-transformer](https://github.com/typestack/class-transformer)
- **Password Hashing**: [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [PostgreSQL](https://www.postgresql.org/)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (optional but recommended)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   - Create a PostgreSQL database (e.g., `blog_api`).
   - Update the `.env` file with your database credentials:
     ```env
     DB_HOST=localhost
     DB_PORT=5432
     DB_USERNAME=your_db_username
     DB_PASSWORD=your_db_password
     DB_NAME=blog_api
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Run migrations** (if needed):

   ```bash
   npm run typeorm migration:run
   ```

5. **Start the server**:

   ```bash
   npm run start:dev
   ```

6. **Access the API**:
   - The API will be running at `http://localhost:3000`.
   - Swagger documentation will be available at `http://localhost:3000/api`.

---

## API Endpoints

### Authentication

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Log in and get a JWT token.

### Users

- **GET /users**: Get all users (protected route).
- **GET /users/:id**: Get a user by ID (protected route).

### Posts

- **POST /posts**: Create a new post (protected route).
- **GET /posts**: Get all posts (with pagination and search).
- **GET /posts/:id**: Get a post by ID.
- **PUT /posts/:id**: Update a post (protected route).
- **DELETE /posts/:id**: Delete a post (protected route).

### Categories

- **POST /categories**: Create a new category (protected route).
- **GET /categories**: Get all categories.
- **GET /categories/:id**: Get a category by ID.
- **PUT /categories/:id**: Update a category (protected route).
- **DELETE /categories/:id**: Delete a category (protected route).

### Comments

- **POST /comments**: Create a new comment (protected route).
- **GET /comments**: Get all comments (with pagination).
- **GET /comments/:id**: Get a comment by ID.
- **PUT /comments/:id**: Update a comment (protected route).
- **DELETE /comments/:id**: Delete a comment (protected route).

---

## Folder Structure

```
src/
├── auth/                  # Authentication module
├── users/                 # Users module
├── posts/                 # Posts module
├── categories/            # Categories module
├── comments/              # Comments module
├── database/              # Database configuration
├── app.module.ts          # Root module
├── main.ts                # Application entry point
```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=blog_api
JWT_SECRET=your_jwt_secret_key
```

---

## Running the Project

- **Development mode**:

  ```bash
  npm run start:dev
  ```

- **Production mode**:
  ```bash
  npm run build
  npm run start:prod
  ```

---

## Testing the API

- Use **Swagger UI** at `http://localhost:3000/api` to explore and test the API.
- Use tools like **Postman** or **cURL** for manual testing.

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Passport.js Documentation](http://www.passportjs.org/)

---

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Happy coding! 🚀

---

<!-- some files to install and what they mean -->

## Packages installed some of them used in authentication

Installed Packages Breakdown
This project uses the following packages to handle authentication, environment configuration, and password security:

1. @nestjs/passport
   Description: Passport integration for NestJS.
   Purpose: Provides an easy way to implement authentication strategies in NestJS applications.
2. passport
   Description: The Passport authentication middleware.
   Purpose: A simple, flexible authentication middleware for Node.js, supporting a wide range of strategies for authentication.
3. passport-local
   Description: Local strategy for username/password authentication.
   Purpose: Allows for the use of local authentication, such as verifying username and password in the authentication process.
4. passport-jwt
   Description: JWT authentication strategy.
   Purpose: Provides a strategy for authenticating using JSON Web Tokens (JWTs), commonly used for securing APIs and web applications.
5. @nestjs/jwt
   Description: JWT utilities for NestJS.
   Purpose: Provides utilities for signing, verifying, and decoding JSON Web Tokens (JWTs), essential for token-based authentication in NestJS apps.
6. @nestjs/config
   Description: Load environment variables from .env.
   Purpose: Allows easy loading and access to environment variables, providing a convenient way to manage configuration settings.
7. bcrypt
   Description: For hashing passwords securely.
   Purpose: A library to hash passwords securely, which is essential for user authentication and protecting sensitive information.

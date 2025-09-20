# Lab 5 Part 1 - CRUD MVC Example

This is a Node.js MVC web application for managing Products and Suppliers, featuring RESTful APIs and Swagger documentation.

## Features
- CRUD operations for Products and Suppliers
- EJS templating with Bootstrap UI
- MongoDB database connection
- RESTful API endpoints
- Swagger UI for API documentation (`/api-docs`)

## Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd lab5p1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Swagger dependencies:
   ```bash
   npm install swagger-ui-express yamljs
   ```

## Usage
1. Start MongoDB (local or Atlas)
2. Run the app:
   ```bash
   npm start
   ```
3. Open your browser:
   - Main app: [http://localhost:3000](http://localhost:3000)
   - Swagger docs: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## API Documentation
- The API is described in `swagger.yaml`.
- Access interactive docs at `/api-docs` after starting the app.



# web2-1
1. Project Description

This project is a simple backend application built using Node.js and Express.js.
The main goal of the project is to demonstrate how to create a REST API with basic CRUD (Create, Read, Update, Delete) operations.

The application stores data in a JSON file instead of a database, which makes the project simple and easy to understand for educational purposes.
All API endpoints were tested using Postman.

2. Technologies Used

Node.js

Express.js

JavaScript

JSON

Postman

3. Project Structure
project-folder/
│
├── server.js        // main server file
├── data.json        // JSON file used as data storage
├── package.json     // project configuration and dependencies
├── package-lock.json
└── node_modules/    // installed dependencies

4. Server Setup

The server is created using Express.
Middleware express.json() is used to parse JSON data from incoming requests.

The server runs on port 3000.

5. Demo Routes

The following demo routes were implemented to test server functionality:

Method	Route	Description
GET	/	Checks if the server is running
GET	/hello	Returns a test JSON message
GET	/time	Returns the current server time
GET	/status	Returns server status
6. Data Storage

All data is stored in a file called data.json.
The file contains an array of objects.

Example structure:

{
  "objects": []
}


Each object contains the following fields:

id – unique identifier

name – object name

topic – object category

createdAt – creation date

7. CRUD API Endpoints

The following CRUD routes were implemented:

Method	Route	Description
GET	/objects	Returns all objects
POST	/objects	Creates a new object
PUT	/objects/:id	Updates an object by ID
DELETE	/objects/:id	Deletes an object by ID
Example object:
{
  "id": 1712345678901,
  "name": "Prepare assignment",
  "topic": "University",
  "createdAt": "2025-01-01T12:34:56.789Z"
}

8. API Testing

All API endpoints were tested using Postman:

GET request to retrieve all objects

POST request to create a new object

PUT request to update an existing object

DELETE request to remove an object

Each request returned the expected response.

9. Conclusion

This project helped me understand how REST APIs work and how backend logic can be implemented using Node.js and Express without a database.
It also provided practical experience with JSON file storage and API testing using Postman.

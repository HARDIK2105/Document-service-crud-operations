# Project Overview

This project is a CRUD use MongoDB and express with TypeScript. It is a simple application that allows you to create, read, update, and delete documents.  The application is built with Node.js, Express, MongoDB, and TypeScript.  

# Features

- Create documents
- Read documents
- Update a document
- Delete a document


## Getting Started

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (optional)

## Installation

1. Clone the repository to your local machine

```bash

git clone  : https://github.com/
    
 ```

2. Install dependencies

```bash

npm install
    
 ```

3. Start the application

```bash

npm run  start
    
 ```

4. Open the application in your browser


```bash

http://localhost:3000/documents
    
  ```


## Usage

### Create a document

```bash

POST  : http://localhost:3000/documents
    
  ```
  You can use Postman to test the API endpoints. The request body should be in JSON format.

  use the following JSON format to create a document

  ```json

{
    "key": "document name",
    "content": "updated content",
    "createdBy": "username",
    "updatedBy": "username",
    "accessLevel": "private"
}
    
  ```


### Get document
    
 ```bash

GET  : http://localhost:3000/documents

GET  : http://localhost:3000/documents/:id

```

### Update a document

```bash


PUT  : http://localhost:3000/documents/:id

```


### Delete a document

```bash

DELETE  : http://localhost:3000/documents/:id

```


## Built With

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)



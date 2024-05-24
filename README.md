# Node.js File System Project

1.This project demonstrates how to create an Express server in Node.js that interacts with the file system to create and retrieve text files.

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

- Node.js installed on your machine
- Postman (optional) for testing the API endpoints

2.Navigate to the project directory:
cd nodejs-file-system

3.Install dependencies:
npm install

UASGE:

1.Start the server:
node server.js

2.Use Postman or any other tool to interact with the API endpoints:
    GET /createFile: Creates a text file with the current timestamp in the files directory.
    GET /getAllFiles: Retrieves a list of all text files in the files directory.

API Documentation:

You can find the documentation for the API endpoints in Postman. Import the provided NodeJS_File_System_API.postman_collection.json file into Postman to view and test the endpoints.

Project Structure

   server.js: Contains the Express server setup and API endpoint definitions.
   files/: Directory where text files are stored.

Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to see added.


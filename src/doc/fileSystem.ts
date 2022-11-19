/**
 * 
 * import {promises as fsPromises} from fs;
// or
import {promises as fs} from fs;

File System Flags
File System Flags are used for identifying read/write operations available when opening a file.

r - allows for the reading of a file
r+ - allows for the reading and writing of a file, will overwrite content in the file
w+ - allows for the reading and writing of a file, will create a file if it does not yet exist
a - allows for reading and writing of a file and will append new content to the end of the file, not overwriting current content
a+ - allows for reading and writing of a file, will create a file if it does not yet exist, 
and will append new content to the end of the file, not overwriting current content
Writing to a File
.open() - Used to open a file. Takes a filename and flag as arguments.
const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', a+);
}
.write() - Used to write to a file that is already open. Takes data, and options as arguments.
const writeData = async () => {
  const myFile = await fsPromises.open('myfile.txt', a+);
  await myFile.write('add text');
}
.writeFile() - Used to write to a file, overwriting any content that may already exist in the file. 
Takes a filename, data, and options as arguments.
const writeData = async () => {
  const myFile = await fsPromises.writeFile('myfile.txt', 'add text');
}

---------------------------------------
Install the csvtojson module with npm i csvtojson.
Install type definitions for csvtojson with npm i --save-dev @types/csvtojson.
Import csvtojson into our index.ts for use.
Create an endpoint for convert. View the documentation for csvtojson to see how to use it.
Map the data from the csv input file to the json output file.
Start up the project and visit the endpoint to see that the json file is created.


---------------------------------------
WebSocket APIs
Websocket APIs are stateful and allow for real-time communication between the user and the server allowing for one user to know what another user is doing. Websockets do not use the HTTP protocol and have their own WebSocket protocol.

The most popular library for working with WebSockets in Node.js is socket io.
https://socket.io/

---------------------------------------------------

A note on GraphQL
GraphQL isn't specifically a type of API, although it is generally referred to as one. GraphQL is a query language for working with APIs. It's becoming increasingly popular and does work well with Express. Once you're familiar with REST APIs it's very easy to learn GraphQL.

New Terms
Term	Definition
GraphQL	A query language used for working with APIs
REST	Representational State Transfer, a method for working with data.
RESTful	Term to describe an API that is implemented following REST principles. Often used interchangeably with REST (e.g. REST/RESTful APIs).
Websocket API	A type of stateful API that allows the server to know what the user is doing and vice versa
https://graphql.org/
 */
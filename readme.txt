This project is done based on:
https://www.codementor.io/olawalealadeusi896/building-simple-api-with-es6-krn8xx3k6

expressjs - Expressjs is a nodejs web application framework that gives us the ability to create quick and easy APIs.
momentjs - This gives us the ability to validates and manipulates dates.
uuid npm package](https://www.npmjs.com/package/uuid)
babeljs - Since we'll be writing all our JavaScript code using ES6, babeljs will help in converting our ES6 codes to ES5.
babel watch - This is needed for development. One thing that babel watch package does is to compile our code and reload the server each time we make changes to our code.


Steps done:

1. Installation of npm and node.
2. Project folder creation.
3. npm init 
    to initialise node project in the project folder. This will create package.json
4. Installation of express, moment and uuid packages
    npm install --save express moment uuid
5. Install babel
    npm install --save-dev @babel/cli @bel/core @babel/preset-env
6. Once done, check package.json for the dependencies and dev dependencies.
7. Setup express server in server.js
8. Setup babel and babel-watch for the project
9. Implement Reflection model and controller and set REST endpoints in server.js for operations.
10. Test using postman with the endpoint http://localhost:3000/api/v1/reflections

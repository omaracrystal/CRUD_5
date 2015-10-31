# CRUD ASSESMENT 5

# Full Stack CRUD Assessment - todo

Week of 10/19/2015.

## Server-Side Only

> Time yourself. Shoot for under an hour!

1. Create the project structure.
1. Utilize the resource of your choice - i.e., vehicles, superheroes, planets, coding schools, cookies, eclipses...
1. Create the RESTful route structure.
1. Setup MongoDB, Mongoose, and define your schema.
1. Update each route to connect to the database and return JSON. Test with cURL, HTTPie, or Postman.

# TO DO:

1. **Set up Project Structure**
  - In terminal =
    ```
    yo galvanize-express
    npm install
    npm install mongoose --save
    npm install dotenv -- save
    ```
  - Now check your package.json file. It should update the dependences to include mongoose and dotenv. It should look similar to this:
    ```
    {
      "name": "_example",
      "version": "0.0.0",
      "private": true,
      "scripts": {
        "start": "node ./server/bin/www"
      },
      "dependencies": {
        "body-parser": "~1.13.2",
        "cookie-parser": "~1.3.5",
        "debug": "~2.2.0",
        "dotenv": "^1.2.0",
        "express": "~4.13.1",
        "mongoose": "^4.2.3",
        "morgan": "~1.6.1",
        "serve-favicon": "~2.3.0",
        "swig": "^1.4.2"
      },
      "devDependencies": {
        "browser-sync": "2.9.6",
        "gulp": "^3.9.0",
        "gulp-jshint": "^1.11.2",
        "gulp-nodemon": "^2.0.4",
        "jshint-stylish": "^2.0.1"
      }
    }
    ```
  - Your project structure should look something like this:

  ![Structure](./client/images/structure.png)

  - **Commit!**

2. Finish updating structure:
  - Now find ``app.js`` under ``server`` directory. Place on top another requirement:
    ```
    var dotenv = require('dotenv');
    dotenv.load();
    ```
  - Now place ``.env`` at the bottom of ``.gitignore`` file. We are setting up the environment variables and hiding them within the .gitignore file.
  - Now add .env file to root directory through the terminal
    ```
    touch .env
    ```
  - **Commit!**

2.

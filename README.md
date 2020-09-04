# Spaced Repetition Capstone - Wikket's Guide to Hozen

Application completed by Michael Oh and Chrissy Harmon.

Live Site: https://guide-to-hozen.vercel.app/register

API Repo: https://github.com/charmonica/michaelO-chrissy-spaced-repetition-api

## About

Wikket's Guide to Hozen is a spaced repetititon application implemented with Javascript. The app uses a singly linked list to cycle through questions, showing words that have been answered incorrectly more often than those answered correctly. The base language used is a silly send-up to World of Warcraft, featuring the Hozen.

## Setup

To setup the application

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application *Cypress.io* for running browser integration tests

The project expects you have the Spaced repetition API project setup and running on http://localhost:8000.

Find instructions to setup the API here https://github.com/Thinkful-Ed/spaced-repetition-api.

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

## Screenshots

# Registration

![Registration](./ReadmeImg/signup.png)

# Login

![Login](./ReadmeImg/login.png)

# Dashboard (partial)

![Dashboard](./ReadmeImg/partialdashboard.png)

# Learning

![Learning](./ReadmeImg/learning.png)



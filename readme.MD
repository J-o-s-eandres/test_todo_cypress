

```markdown
# Cypress Test for To-Do List 🧪🧪🧪🧪

This repository contains a Cypress test suite for a To-Do List web application. The test suite includes the creation of tasks and the deletion of those tasks.

## Installation

To run these tests, you will need Node.js and Cypress installed on your system. If you haven't already, you can install Cypress using the following commands:

```bash
npm install
```

## Test Description 🧪🧪🧪🧪

The test suite consists of a single test case that creates and deletes 10 tasks in a To-Do List application. Each task is randomly selected from a list of predefined tasks, and it is added to the list. After creating the tasks, the test then proceeds to delete them one by one.

The test flow can be summarized as follows:

1. Visit the To-Do List web application.
2. Create 10 tasks by clicking the input field, typing a random task description, and hitting the "Enter" key.
3. Delete each task one by one by clicking the delete icon.

## Running the Tests 🔬🔬🔬

To run the tests, execute the following command:

```bash
npx cypress run
```

This command will run the Cypress test suite, which will automatically open a browser window to perform the tests. The browser will be controlled by Cypress to simulate user interactions.

## Custom Task Selection

The tests use a custom function called `getTaskRandom()` to select a random task description from a predefined list of tasks. If you want to modify the list of tasks, you can edit the list inside the `getTaskRandom()` function in the test script.

## Test Results 🔬🔬🔬📊 📊 📊 



After running the tests, Cypress will generate test results, including information on passed and failed tests. You can view the results in the Cypress test runner interface or generate HTML reports for a more detailed analysis.

<img src="image.png" alt="Mi Imagen" width="150" height="100">

## License

This Cypress test suite is provided under the [MIT License](LICENSE).
```

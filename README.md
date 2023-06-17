# Time Tracker App

This project was bootstrapped with Vite, a fast and lightweight development server for React applications.
Tailwind was also used for styling the application

## Preview

![Screenshot of the app.](/src/assets/images/screenshot.png "The Time Tracker App.")

## Getting Started

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 12 or above)
- npm (or yarn)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/khasmir04/time-tracker-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd time-tracker-app
    ```

3. Install the dependencies

    ```bash
    npm install
    ```

### Development

To start the development server, run the following command:

```bash
npm run dev
```

This will launch the development server and open the application in your default browser. The server will automatically reload the application whenever you make changes to the source code.

### Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create an optimized production build of the application in the dist directory. You can then deploy this build to a web server of your choice.

## Running the server (Json-Server)

### Setting up

1. On a separate directory, start by installing the json-server and lodash

    ```bash
    npm install -g json-server lodash
    ```

2. Create a db.json file and write the following:

    ```bash
    {
      "tasks": [],
      "user": {
        "id": "user1",
        "firstName": "trafalgar",
        "lastName": "law",
        "position": "middle software engineer",
        "username": "admin",
        "password": "password"
      }
    }
    ```

As you can see, the password is indicated here, there is no authentication in this app and the focus is just on the time tracker. Login and Register pages are just for the story.

3. Create a server.js file and add the following codes:

    ```bash
    const jsonServer = require('json-server');
    const server = jsonServer.create();
    const router = jsonServer.router('./db.json');
    const middlewares = jsonServer.defaults();
    const _ = require('lodash');

    server.use(middlewares);
    server.use(jsonServer.bodyParser);

    server.post('/timeEntries', (req, res, next) => {
      const entries = router.db.get('timeEntries');
      const id = _.isEmpty(entries) ? 1 : _.maxBy(entries, 'id').id || 0;
      req.body.id = id + 1;
      next();
    });

    server.use(router);
    server.listen(3000, () => {
      console.log('JSON Server is running');
    });
    ```

4. Start the JSON Server by running the following command:

    ```bash
    node server.js
    ```

5. You can access the endpoints using the following URL

    ```bash
    http://localhost:3000/tasks
    ```

### Loggin In

1. You can login using the following credentials:

username: admin
password: password

Note: Register and Login is mostly for the story only, this sample application is focused on the functionality of the Time Tracker

### Using the app

1. Create a task by selecting a Project, inputting the number of hours and the description for the task. Click Add Task button once done.

Filling up the form:
![Step 1](/src/assets/images/step1.png "Filling up the form")

Task Created:
![Step 1.1](/src/assets/images/step2.png "Task Created")

2. Now that a task has been created, click the start icon. This will show that the timer is running. You can also try to pause the task by clicking the pause icon.

Timer running:
![Step 2](/src/assets/images/step3.png "Timer running")

3. Let us also try to delete a task by clicking the delete icon.

Deleting task:
![Step 3.1](/src/assets/images/step4.png "Deleting task")

Empty task:
![Step 3.2](/src/assets/images/step5.png "Empty task")

Hooray! Now we are back to having empty tasks.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/)

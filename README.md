## Nodejs Sequelize RESTAPI PostgreSQL

This is a simple REST API using Javascript Technologies and PostgreSQL.

- nodejs
- express
- postgreSQL
- sequelize

## Modeling

This is the basic relationship that we are using in this example

![](./docs/diagram.png)

## Project Structure

```bash
.
├── package.json
└── src
    ├── app.js
    ├── controllers
    │   ├── project.controller.js
    │   └── task.controller.js
    ├── database
    │   └── database.js
    ├── index.js
    ├── models
    │   ├── Project.js
    │   └── Task.js
    └── routes
        ├── projects.routes.js
        └── tasks.routes.js

5 directories, 12 files
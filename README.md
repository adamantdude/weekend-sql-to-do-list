# Weekend To Do List

## Description

_Duration: 4 Hour Sprint_

This is a JavaScript solo project done by a student of Prime Digital Academy that aims to fill a 'To Do List' need that is server-capable and utilizes an SQL database to keep track of tasks. 

## Screen Shot

![To Do List Pic](./TODOLISTv1.png?raw=true)
![To Do List Pic v2](./TODOLISTv2.png?raw=true)
![To Do List Pic v2-2](./TODOLISTv2-2.png?raw=true)

### Prerequisites

Database + Server
- Postgres + Postico (SQL)
- Node ( Or other server software )

## Installation

1. Create a database named `weekend-to-do-app`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install` to get all required dependencies,
4. Run `npm start` in your terminal,
5. Open your browser of choice and surf to `localhost:5000` to start the program

## Usage

1. User types into text box their desired task to keep track of
2. User clicks the `add task` button to append the task in the text box to the list
3. User clicks the `complete` button of any task completed on the list
4. User clicks the `delete` button of any task they wish to remove


## Built With

JavaScript Dependencies
- jQuery
- Express
- pg
- Body-Parser
- Sweetalert 2

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)
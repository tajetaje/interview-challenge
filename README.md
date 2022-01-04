# Lexcelon Programing Assignment

The goal of this assignment is to test your problem-solving skills. We want to throw you into an unfamiliar situation and see how you are able to work independently, solving problems you may not always be familiar with.

You will be evaluated on the following:
- Ability to problem solve.
- Frequent and descriptive Git commits.
- Clean, consistent, functional, and commented code.

We do not want to take a ton of your time, so the tasks should be fairly straightforward. Try not to overly complicate them. Let us know if you're completely stumped.

## Overview

Within this repository, there are two main folders for you: [client/](client) and [server/](server). The client/ folder contains a React website. The server/ project contains a NodeJS server. The projects are already set up with most everything you will need in order to run them. When completed, the React client will make a request to the NodeJS server and will receive a list of US states (along with some accompanying information). The React client will then display that data on a table. See the below image for an example!

![UI Example](UI%20Example.png)

## Tasks

### Task 1: Try to run both projects.
Fork this repository (top right of page) into your own GitHub repo. Using a terminal, putty, or something similar, clone the repo to your computer and run the React client project and the NodeJS server project separately. Check out the READMEs in each project for more information on how to run them. Neither project should have any errors when you first run them.

### Task 2: Create a MySQL server on your local machine.
Follow the installation guide [here](https://dev.mysql.com/downloads/mysql/) to install MySQL. You'll need MySQL server as well as MySQL Workbench so you can view your data. Once you have installed MySQL, use the credentials and information you used during setup to populate an environment variables configuration file. There is an example provided in server/config/.env.example. Duplicate this in the same folder and name it ".env".

### Task 3: Create a Sequelize Model to hold state statistical information.
In the server/models folder, create a sequelize model called StateInformation. There is an example model provided in this folder to help familiarize yourself with Sequelize. Make sure to export the model inside server/models/index.js. To see the list of fields you need, look at the seed data for the class, seeders/000-demo-states.js

Note: Sequelize behind the scenes will convert your fields to snake_case. Use camalcase when creating your model. 

### Task 4: Create a server route that returns a list of US states and supporting information.
In the server/routes/index.js file, you will find a TODO comment where you should create a GET route with the path '/states'. Make the route return all data from the model you created (`StateInformation`)

### Task 5: Customize the header with some Lexcelon flair.
The UI is looking a little plain to me. Can you make the blue header Lexcelon green (`const LEXCELON_GREEN`) instead? Could you also add the lexcelon logo (found in client/src/images/LexcelonLogo.png) to the header? See target image above for example.

### Task 6: Show the state 'Percentage' column as a percentage instead of a decimal.
Currently, the values in the 'Percentage' column of the table are shown as 0.####. Make the values show up as a percentage instead (max 2 decimal places). See target image above for example.

## Helpful Links
Check out each README ([client](client) and [server](server)) for helpful links to more documentation!

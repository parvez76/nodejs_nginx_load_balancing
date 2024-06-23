Dockerizing Node JS & Nginx load balancing

This project demonstrates setting up a node web application with Express and Nginx load balancing using Docker Compose.

Prerequisites:

Docker

Docker Compose

How to Use: Clone the Repository git clone cd

Build and Run Containers:

docker-compose up --build

Access the Application:

Open your web browser and go to http://localhost

to check the load balancing go to http://localhost/app

Refresh the page multiple times to observe load balancing between node instances (node 1 and node 2).


# Login-and-SignUp API:
This project includes a frontend (React) and a backend (Node.js with MongoDB) setup using Docker. The services are managed with Docker Compose for easy deployment and concurrent execution.

# Prerequisites
Before you start, make sure you have the following installed on your machine:

Docker
Docker Compose
Running the Project with Docker
1. Clone the Repository
First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/Login-and-SignUp-API.git

cd Login-and-SignUp-API
```
2. Build and Run the Project with Docker Compose
To build and start the frontend, backend, and MongoDB containers, follow these steps:

```bash
docker-compose up --build
```
This command will:
Build the Docker images for both the frontend and backend.
Start the containers for the frontend, backend, and MongoDB database 

3. Access the Application
Once the containers are up and running, you can access the application using the following URLs:
```bash
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api
```
4. Rebuilding and Restarting the Containers
If you make any changes to the code, you can rebuild and restart the containers with:

```bash
docker-compose down
docker-compose up --build
```
This will:

Stop and remove the existing containers.
Rebuild the Docker images with the latest changes.
Restart the services.
Running the Project Concurrently
If you want to run the project concurrently without rebuilding the images every time, use:

```bash
docker-compose up
```
This command will start the containers without rebuilding them. It’s faster and suitable for when no code changes have been made.

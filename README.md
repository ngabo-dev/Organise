# Organise

## Overview

The main objective is to develop a minimal viable product (MVP) of the project
management web application using HTML, CSS, and JavaScript. Additionally, we created
and containerize the application using Docker to ensure it can be easily deployed and
scaled across different environments without any issues.

## How to Run the Application Locally

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the HTML file in your preferred web browser.

## Building the Docker Image and Running a Container

To containerize the HTML, CSS, and JavaScript files using Docker, follow these steps:

1. Make sure Docker is installed on your machine.
2. Clone the repository to your local machine if you haven't already.
3. Navigate to the project directory.
4. Create a Dockerfile in the project directory with the following content:

```Dockerfile
# Use a lightweight web server image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files into the container
COPY . /usr/share/nginx/html

# Open the terminal and run the following command to build the Docker image:
docker build -t project-name .
Replace project-name with the desired name for your Docker image.

Once the image is built successfully, you can run a container using the following command:
docker run -d -p 8080:80 project-name
This command will run a container in detached mode (-d) and map port 8080 on your local machine to port 80 inside the container.

Open your web browser and visit http://localhost:8080 to access the application running inside the Docker container.



This README.md provides instructions specifically for containerizing HTML, CSS, and JavaScript files using Docker and running the containerized application locally. Adjust the instructions as needed for your project.


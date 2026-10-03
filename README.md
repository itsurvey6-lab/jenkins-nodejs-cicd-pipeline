# Jenkins CI/CD Pipeline using Docker

## Objective

The objective of this project is to create a simple CI/CD pipeline using Jenkins and Docker to automate application build and deployment.

## Tools Used

* Jenkins
* Docker
* GitHub
* Node.js
* Express.js

## Pipeline Stages

### 1. Checkout

Jenkins pulls the latest source code from GitHub.

### 2. Build

A Docker image is built using the application's Dockerfile.

### 3. Test

Basic validation is performed by checking the created Docker image.

### 4. Deploy

The previous container is removed (if available) and a new container is deployed automatically.

## Workflow

Developer Push → GitHub → Jenkins → Build → Test → Deploy

## Outcome

Successfully implemented a Jenkins CI/CD pipeline that automatically builds and deploys a Dockerized Node.js application whenever changes are pushed to GitHub.

## Learning Outcomes

* Understanding Jenkins pipelines
* Writing a Jenkinsfile
* Docker image creation
* Automated deployment using Jenkins
* CI/CD workflow implementation

## Screenshots

screenshots of:

1. Jenkins Dashboard
2. Successful Pipeline Run
3. Docker Container Running
4. Application Running in Browser


Interview Answers
1. What is Jenkins and how is it used in CI/CD?

Jenkins is an open-source automation server used to automate software build, testing, and deployment processes. It helps implement Continuous Integration (CI) and Continuous Deployment (CD) pipelines.

2. What is a Jenkinsfile?

A Jenkinsfile is a text file that defines the CI/CD pipeline as code. It contains stages, steps, and automation instructions executed by Jenkins.

3. How do you create and configure Jenkins pipelines?
Install Jenkins
Create a Pipeline Job
Connect Git repository
Add Jenkinsfile
Configure build triggers
Run and monitor pipeline from Jenkins Dashboard
4. What are common stages in a Jenkins pipeline?
Checkout
Build
Test
Package
Deploy
Monitor
5. Difference between Declarative and Scripted Pipeline?
Declarative Pipeline	Scripted Pipeline
Easier syntax	More flexible
Structured format	Uses Groovy scripting
Recommended for beginners	Suitable for advanced workflows
Easier to maintain	More customization

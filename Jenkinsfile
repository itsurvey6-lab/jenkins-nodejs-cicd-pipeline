pipeline {
    agent any

    stages{

        stage('git checkout') {

            steps{
                git 'https://github.com/itsurvey6/jenkins-nodejs-cicd-pipeline.git'
            }
        }

        stage('Build Image') {

            steps{
                sh 'docker build -t jenkins-demo .'
            }
        }

        stage('Verify Docker Image'){

            steps{

                sh 'docker image inspect jenkins-demo:latest'

            }
        }

        stage('Deploy'){

            steps{

                sh '''
                    docker stop jenkins-demo || true
                    docker rm jenkins-demo || true

                    docker run -d --name jenkins-demo -p 3000:3000 jenkins-demo:latest
                '''

            }
        }

    }
}
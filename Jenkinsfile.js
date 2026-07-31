pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        RENDER_DEPLOY_HOOK = credentials('render-deploy-hook')
        SLACK_CHANNEL = '#allan_ip1'
        RENDER_URL = 'https://your-app.onrender.com'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST $RENDER_DEPLOY_HOOK'
            }
        }
    }

    post {
        failure {
            mail to: 'youremail@example.com',
                 subject: "Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                 body: "Tests failed. Check console output at ${env.BUILD_URL}"
        }
        success {
            slackSend(
                channel: env.SLACK_CHANNEL,
                message: "Deploy succeeded! Build #${env.BUILD_NUMBER} — ${env.RENDER_URL}"
            )
        }
    }
}
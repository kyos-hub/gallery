pipeline {
    agent any

    environment {
        SLACK_CHANNEL = '#allan_ip1'
    }

    stages {
        stage('Slack Test') {
            steps {
                echo 'Testing Slack notification'
            }
        }
    }

    post {
        success {
            slackSend(
                channel: env.SLACK_CHANNEL,
                message: "Test message from Jenkins pipeline — Slack integration works!"
            )
        }
    }
}
#!groovy

//noinspection GroovyAssignabilityCheck
properties(
  [[$class: 'GithubProjectProperty', displayName: 'Integration tests', projectUrlStr: 'https://github.com/hmcts/cmc-integration-tests'],
   pipelineTriggers([
     [$class: 'GitHubPushTrigger'],
     [$class: 'hudson.triggers.TimerTrigger', spec  : 'H 1 * * *']
   ])]
)

timestamps {
  node {
    stage('Checkout') {
      deleteDir()
      checkout scm
    }

    stage('Hello') {
      sh 'echo "Hello, World!"'
    }
  }
}


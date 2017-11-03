#!groovy

//noinspection GroovyAssignabilityCheck
properties(
  [[$class: 'GithubProjectProperty', displayName: 'Integration tests', projectUrlStr: 'https://git.reform.hmcts.net/cmc/integration-tests/'],
   pipelineTriggers([
     [$class: 'GitHubPushTrigger'],
     [$class: 'hudson.triggers.TimerTrigger', spec  : 'H 1 * * *']
   ])]
)

@Library(['Reform', 'CMC'])
import uk.gov.hmcts.cmc.integrationtests.IntegrationTests

IntegrationTests integrationTests = new IntegrationTests(env, this)

timestamps {
  node {
    try {
      def integrationTestsVersion

      stage('Checkout') {
        deleteDir()
        checkout scm
      }

      stage('Setup') {
        sh 'yarn install'
      }

      stage('Lint') {
        sh 'yarn lint'
      }

      stage('Build image') {
        integrationTestsVersion = dockerImage imageName: 'cmc/integration-tests'
      }

      stage('Run integration tests') {
        String composeFileBranch = env.CHANGE_BRANCH != null ? env.CHANGE_BRANCH : 'master'

        integrationTests.execute([
          'INTEGRATION_TESTS_VERSION': integrationTestsVersion,
          'INTEGRATION_TESTS_BRANCH': composeFileBranch,
          'CITIZEN_FRONTEND_VERSION': '5434923263249f85f38831d03ac71b6550e455fa',
          'TESTS_TAG'               : '@citizen'
        ])
      }
    } finally {
      sh "docker-compose down --remove-orphans"
    }

  }
}

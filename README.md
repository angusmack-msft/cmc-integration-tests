# CMC Integration tests

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This is the integration tests for CMC.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) >= v8.0.0
* [yarn](https://yarnpkg.com/)
* [codeceptjs](http://codecept.io/)

### Environment variables

Relevant environment variables that will be pulled from your environment:
- `IDAM_CMC_GOV_NOTIFY_API_KEY`: a mock key which does not cause Notify to send emails, ask around for it.
- `GOV_PAY_AUTH_KEY_CMC`: payments sandbox API key, also ask around for it

### Running the tests

First step is to start the environment for the tests to execute against:

```bash
$ ./bin/start-local-environment.sh
```

If you see the command exit with messages like *"service unhealthy"*
it may mean that docker has exceeded the container health check verifications limit. 
You can try re-running the command in that case, but if those messages persist then the problem is probably elsewhere.

After that you can run the tests:

```bash
$ ./bin/run-local-tests.sh
```

To run specific tests you can pass an argument to the run script:
```bash
$ ./bin/run-local-tests.sh 'CCJ'
```
You can use anything in the 'Scenario' or 'Feature' functions to target which tests to run.

If you want to shut down the environment use:

```bash
$ docker-compose down 
```

This environment will not persist data between restarts, so when you start again you'll get a fresh environment.

### Debugging

#### Watching the tests running

To watch the tests executing there's a debug selenium server setup which has a VNC server on it
On mac run `$ open vnc://localhost` the password is: `secret`

For more information see:
https://github.com/SeleniumHQ/docker-selenium#debugging

### Starting a local development environment

#### Setting up an IDAM User

The first time you will need to create a user to login with
Run: 
```bash
$ ./bin/create-idam-user.sh [optional-email] [optional-firstname] [optional-lastname]
```

To use the compose files defined in the project to start a local development environment, use:

```bash
$ ./bin/start-local-environment.sh
```

This will:
- start all the services beside the `citizen-frontend`, you'll need to start that one on it's own,
- mount database volumes, thanks to which your data will persist between environment restarts,
- expose container ports to the host, so all the APIs and databases will be directly accessible. Use `docker ps` or read the [compose file](./docker-compose.yml) to see how the ports are mapped.

To stop the environment use the same script, just make sure to pass the `local` parameter:

```bash
$ ./bin/stop-local-environment.sh
```

If you want to delete the volumes as well pass the `-v` flag:

```bash
$ ./bin/stop-local-environment.sh -v
```

### Loading CCD definition

In order to upload new definition file, put the definition file at location 
'docker/ccd-definition-import/data/CCD_Definition_CMC.xlsx'

```bash
$ docker-compose run ccd-importer
```

### Executing cross-browser testing on Saucelabs locally

In order to run tests against different browsers in [Saucelabs](https://saucelabs.com/) you'll need a slightly modified environment:

```bash
$ ./bin/cross-browser/start-environment.sh
```   

Then to run tests:

```bash
$ ./bin/cross-browser/run-tests.sh
```

You'll need additional environment variables to be able to access Saucelabs, please refer to [`docker-compose.cross-browser.yml`](docker-compose.cross-browser.yml) file for details.

## Developing

### Code style

We use [TSLint](https://palantir.github.io/tslint/) and [StandardJS](http://standardjs.com/index.html).

Running the checks:

```bash
$ yarn lint
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

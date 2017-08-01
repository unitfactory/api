# Contributing to the API Definition

#### IMPORTANT: Do not edit `/apiary.apib`

API Blueprint expects one API definition file. For maintainability purposes, we splitted up the file in parts, located in the `src` directory.  
See the [building](./docs/building.md) documentation for more information about how to build (locally). 


## Installing dependencies

```bash
docker pull apiaryio/client
npm install -g gulp-cli
npm install
```

## Linting

You can lint the apib file to make sure it's valid:

```bash
npm run lint
```

## Follow our guidelines

We are documenting our [API Design Guidelines](./docs/guidelines.md).  
Please follow our recommendations when making a pull request.


## Making a pull request

We follow `github flow` and make pull requests to master.  

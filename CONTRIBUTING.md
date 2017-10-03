# Contributing to the API Definition

#### IMPORTANT: Do not edit `/apiary.apib`

API Blueprint expects one API definition file. For maintainability purposes, we splitted up the file in parts, located in the `src` directory.

## Installing dependencies

```bash
npm install
```

### Building

Because we split up the blueprint files, we need to combine them into one `apiary.apib` file so that Apiary can render our documentation. This can be doing using the following command:

```bash
npm run build
```

There's also an included gulp file to automatically build the main file whenever you make modifications:

```bash
npm run watch
```

## Linting

You can lint the `apiary.apib` file to make sure it's valid:

```bash
npm run lint
```

## Preview

If you want to preview the output of the API Blueprint, you can run:

```bash
npm run preview
```

## Follow our guidelines

We are documenting our [API Design Guidelines](./docs/guidelines.md).
Please follow our recommendations when making a pull request.

## Making a pull request

We follow `github flow` and make pull requests to master.

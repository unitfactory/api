# Teamleader API

This repository contains the Teamleader API Definition (in [API Blueprint](https://apiblueprint.org/) format).  
We follow an [API-first]('./docs/api-first.md) development approach, so our implementation follows this definition for 100%.


## Published documentation

We publish a web version of this documentation on [http://apidocs.teamleader.eu/v2]() through Apiary.


## Branches

For now `master` is the current work in progress.  
As long as this definition is in `beta`, this will also be the published branch.

We also maintain a `v1` branch, that is not published, for historical purposes.


## How to contribute

See [CONTRIBUTING](CONTRIBUTING.md)


## FAQ/rules

- Use application/json for both requests and responses
- Use `number` type wherever it's *logical* to use a `number` (id's, prices, amounts, ...)

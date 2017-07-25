# Contributing to the API

The `master` branch is automatically published on Apiary if there are no syntax errors. The `v1` branch serves as an api-blueprint formatted copy of the legacy documentation.


## Adding missing functionality from old API to v2

1. Create branch off `v1` (e.g. `v1-time-tracking`). Document old API with api blueprint. PR to `v1` branch.
2. Create integration branch off `master` (e.g. `v2-time-tracking`)
3. Make small PRs with improvements to integration branch (e.g. `transform-addTimeTracking`)
4. Once all smaller PRs are approved, send PR of integration branch to `master` to publish.


## API Design Guidelines


### RPC

We are creating an *RPC*-style API, similar to the [Slack API](https://api.slack.com/methods).

These are common actions we use. *Note*:

 - **resource.list** - Get a list objects
 - **resource.info** - Information about a single object
 - **resource.create** - Create a new object
 - **resource.add** - Adding existing objects to a collection
 - **resource.update** - Update an existing object
 - **resource.delete** - Delete an existing object

Usually there will be other actions available for your resource. We need to make sure we make these as explicit and clear as possible.

### GET vs. POST

For actions, we require people to `POST` with a `json` body.
For retrieving data, we suggest to `GET` with query parameters.
For sake of simplicity, we also allow you to `POST` with your query as a json body.

```json
POST deals.list
{
  "page": {
    "size": 10,
    "number": 1
  },
  "filter": {
    "company_id": 123
  }
}
```

### Casing

For casing, we agreed the following:

- The objects are camelcased
- The actions are camelcased
- The parameters or object properties are snakecased

```
/someObject.someAction?some_parameter=value
```

### Format specifications

We wrote our own specification for the format of the response.  
You can read it [here](./specification.md) and look at some examples [here](./examples)

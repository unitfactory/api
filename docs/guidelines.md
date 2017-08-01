# Teamleader API Design Guidelines

## RPC

We are creating an *RPC*-style API, similar to the [Slack API](https://api.slack.com/methods).

These are common actions we use. *Note*:

 - **resource.list** - Get a list objects
 - **resource.info** - Information about a single object
 - **resource.create** - Create a new object (*try to look for better domain language*)
 - **resource.add** - Adding existing objects to a collection (*try to look for better domain language*)
 - **resource.update** - Update an existing object (*try to look for better domain language*)
 - **resource.delete** - Delete an existing object (*try to look for better domain language*)

Usually there will be other actions available for your resource. We need to make sure we make these as explicit and clear as possible.

## GET vs. POST

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

## Casing

For casing, we agreed the following:

- The objects are camelCased
- The actions are camelCased
- The parameters or object properties are snake_cased

```
/someObject.someAction?some_parameter=value
```

## Response format specification

We wrote our own specification for the format of the response.  
You can read it [here](./spec/specification.md) and look at some examples [here](./spec/examples)

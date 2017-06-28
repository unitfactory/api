# Contributing to the API

The `master` branch is the published branch on Apiary. `v1` serves as an api-blueprint formatted copy of the legacy documentation. 


## Adding missing functionality from old API to v2. 
 
1. Create branch off `v1` (e.g. `v1-time-tracking`). Document old API with api blueprint. PR to `v1` branch.
2. Create integration branch off `master` (e.g. `v2-time-tracking`) 
3. Make small PRs with improvements to integration branch (e.g. `transform-addTimeTracking`)
4. Once all smaller PRs are approved, send PR of integration branch to `master` to publish.


## API Design Guidelines


### RPC

We are creating an *RPC*-style API.  
We are often looking at how [Slack](https://api.slack.com/methods) approaches this.

```
/object.someAction
```

### GET vs POST

For actions, we require people to `POST` with a `json` body.
For retrieving data, we suggest to `GET` with query parameters.
For sake of simplicity, we also allow you to `POST` with your query as a json body.

_example needed_

### Casing

For casing, we agreed the following

- the objects are camelcased
- the actions are camelcased
- the parameters or object properties are snakecased

```
/someObject.someAction?some_parameter=value
```

### Response structue

We are using [jsonapi](http://jsonapi.org/) as an inspiration sometimes, but don't follow it 100% (for now?). 
So far we decided to follow these guidelines:

#### Wrap data in a data property
    
```json
{
  "data":{
     //one item
  }
}
```

or
    
```json
{
   "data":[
     {
        //one item
     },
     {
        //another item
     }
   ]
}
```

Currently, we are still discussing how to cope with embedded collections.
    

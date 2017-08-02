# Teamleader API Design Guidelines

## General guidelines

### RPC

We are creating an *RPC*-style API, similar to the [Slack API](https://api.slack.com/methods).

These are common actions we use. *Note*:

 - **resource.list** - Get a list objects
 - **resource.info** - Information about a single object
 - **resource.create** - Create a new object (*try to look for better domain language*)
 - **resource.add** - Adding existing objects to a collection (*try to look for better domain language*)
 - **resource.update** - Update an existing object (*try to look for better domain language*)
 - **resource.delete** - Delete an existing object (*try to look for better domain language*)

Usually there will be other actions available for your resource. We need to make sure we make these as explicit and clear as possible.


### Casing

For casing, we agreed the following:

- The objects are camelCased
- The actions are camelCased
- The parameters or object properties are snake_cased

```
/someObject.someAction?some_parameter=value
```


### Abbreviations

We avoid abbreviations, for clarity.

There are expeceptions however:

- `id`
- abbreviations common in the **domain**
  - `VAT`
  - (more possible, add when discovered)



## HTTP

### Methods : GET vs. POST

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


### Status codes

We try to interpret HTTP Status codes the right way:

- `200 Success` - Used for most [queries](#queries)
- `201 Created` - Used for [commands](#commands) that create an object
- `204 No content` - Used for [commands](#commands) that just need to `ack`

- `400 Bad request` - Used when the request is in the wrong format or doesn't validate 
- `401 Unauthorized` - Used when you don't provide a valid Oauth-token
- `403 Forbidden` - Used when you can't access the requested data, because of missing scopes or insufficient rights
- `404 Not found` - Used when requesting something by id, but the id doesn't exist (in your account)
- `500 Intenal Server Error` -  Used when there are uncatched exceptions


### Content-Type & Accept

Use `application/json` for both requests (`Accept`) and responses (`Content-Type`).


### Response format

We wrote our own specification for the format of the response.  
You can read it [here](./spec/specification.md) and look at some examples [here](./spec/examples)



## Designing endpoints

### Queries

If you write **read** endpoints, you might consider the following this:

- do I need to add filters on the request (might be relevant for `list` endpoints)


### Commands

For commands, we normally return an empty body.  
Except when we generated a new `id`, then we return it.

```json
{
  "id": 1
}
```

If you write **command** or **writing** endpoints, you might consider the following things:

- consider turning as much as possible into arrays to enable bulk actions later on  
(this is applicable on ids, but on other properties of the command as well...)

```json
POST contacts.tag
{
  "ids": [1,2,17],
  "tags": ['foo', 'bar', 'baz']
}
```


## Designing properties

### Date and time

For dates, also timezones might be relevant, so whenever this doesn't add to much confusion, using datetimes **with timezone information** is preferred.  
There might be a difference between reads and writes (where we can assume you are sending us your default timezone).

We always use a `string` for dates in `YYYY-MM-DD` format and a `string` for datetime is the `ISO8601` format (`->format('c')` in `php`).

We call fields that represent dates `...._on`.  
We call fields that represent times `...._at`.


### Money

We have added a datastructure for representing Money.

```json
{
    "amount": 123.03,
    "currency": "EUR"
}
```

We will use it whenever we represent money, both on **queries** and **commands**.


### Referring to other objects/data
    
When referring to other objects (by `id`) or data of those object, we **need** to represent it as an object (see [spec](./spec/specification.md)).  
Even if that is only for the `id`, we might want to add/embed more data later on and don't want to break backwards compatibility then.

The specification also says to include the `_type` for consistency and to be future proof.

```json
{
   "buyer" : {
      "_type": "contact",
      "id" : 1
   }
}

```

As you can see, like this it is also pretty clear when naming the fields different than the type.  
It increases flexibility in naming, which helps understandability.


### Meta data

According to the specification you can include `_meta` on almost every level.  
So if you want to include data that is not tied to the domain, you have to add it there.

- a _contact's creation date_ is not part of the domain*, so we add it in `_meta`.  
- an _invoice's creation date_ is important in the invoicing domain, so it is not in `_meta` data.

* we keep it for audition, synchronization, ... purposes, but in some cases this is arguable


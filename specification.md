# Teamleader API format

In order to build consistent endpoints, we developed our own response specification (after looking into more popular specifications, which were unfortunately not adoptable by RPC APIs).  

The specification is as light as possible and was focused around avoiding too much nesting, but at the same time allowing meta data, links, etc on the resources and collections.

Here we describe the rules we follow in our API responses.

## Examples

You can find examples of the specification in the [examples](./examples) directory,  
which contains [one with a single resource as root object](./examples/single-resource.json) and [a collection as root object](./examples/collection.json).


## Response format

All responses MUST be `json` and MUST have a [root object](#root-object).  


### Root object

The root object MUST be a `json` object.  

The root object MAY be empty.
The root object MAY be a single [resource](#resources).  
The root object MAY be a [collection](#collections).  

The root object MAY contain an [`_included` section](#side-loading-_included).  
The root object MAY contain an [`_errors` section](#errors).


### Resources

An resource MUST contain an `id` field.  
An resource MUST contain an `_type` field.  

An resource MAY have a [`_links` section](#links-_links).  
An resource MAY have an [`_actions` section](#actions-_actions).  
An resource MAY have an [`_meta` section](#meta-_meta).  

### Collections

A collection MUST be a `json` **object**.  
A collection MUST have an `_items` field, that contains a `json` array with the collection items.  
A collection item MUST be a [resource](#resources).  

A collection MAY have a [`_links` section](#links-_links).  
A collection MAY have an [`_actions` section](#actions-_actions).  
A collection MAY have an [`_meta` section](#meta-_meta).  

A collection MUST NOT contain any other fields than `_items`, `_links`, `_meta`, `_actions` (and `_included` in case it is the root object).  


### Fields

A field MAY be `null`.  
A field MAY be _scalar_.  
A field MAY be an object, in case it represent a value object e.g.  
A field MAY be a [resource](#resources).  
A field MAY be a [collection](#collections).  

A field name MUST NOT start with an `_`, to avoid naming conflicts with future specification versions.  


### Links (`_links`)

A links section MUST be a `json` object.  
A links section MAY be an empty object.  
A links sections' key represents the relationship of the link, it MUST be a string.  
A links sections' value MUST be a valid absolute URL. 


### Actions (`_actions`)

__TBD__


### Errors (`_errors`)

__TBD__


### Related data

There are two ways of including related data (depending on if the endpoint supports it):

- embedding data inline (through the `embed` request parameter)
- including side loaded data in the `_included` section (through the `include` request parameter)


#### Side loading `_included`

The included section MUST be a `json` object.  
The included section MAY be an empty object.  
The included sections' key MUST be a string that represents a `_type` of a [resource](#resources).  
The included sections' value is an object containing all included [resources](#resources) of that `_type` indexed by `id`.  

#### Embedding

__TBD__

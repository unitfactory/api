# Contributing to the API

The `master` branch is the published branch on Apiary. `v1` serves as an api-blueprint formatted copy of the legacy documentation. 

## Adding missing functionality from old API to v2. 
 
1. Create branch off `v1` (e.g. `v1-time-tracking`). Document old API with api blueprint. PR to `v1` branch.
2. Create integration branch off `master` (e.g. `v2-time-tracking`) 
3. Make small PRs with improvements to integration branch (e.g. `transform-addTimeTracking`)
4. Once all smaller PRs are approved, send PR of integration branch to `master` to publish.

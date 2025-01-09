# Firebase Nested Data Access Error

This repository demonstrates a common error when working with nested data in Firebase: attempting to access a deeply nested property without sufficient null checks.  This can lead to `TypeError` exceptions if any intermediate level is `null` or `undefined`.

The `bug.js` file contains code that reproduces the issue, and `bugSolution.js` provides a corrected version with appropriate null checks.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js`. You'll see an error indicating that `Cannot read properties of null (reading 'c')`.
3. Run `bugSolution.js`. You'll see a more robust handling of the nested data access.
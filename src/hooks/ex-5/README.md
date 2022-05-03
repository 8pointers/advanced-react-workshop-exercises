## Exercise (ex-5)

Design and implement a custom hook that can be used to work with async functions (functions returning promises).

It could/should support the following features:

- cause the component to rerender automatically when the async operation is initiated and completed (success or failure)
- have an ergonomic way of consuming the async operation result and failure reason
- provide progress info
- provide means to re-run the operation on demand
- provide means to re-run the operation declaratively

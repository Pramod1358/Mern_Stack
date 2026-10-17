# Async/Await Promise Example

This example shows how to use **Promises, async/await, and try-catch** in JavaScript.

### What it does

* Performs division after a 3-second delay.
* Resolves the Promise when the divisor is not `0`.
* Rejects the Promise when dividing by `0`.
* Uses `async/await` to handle the Promise.
* Uses `try-catch` to handle errors.

### Important Point

When a Promise is rejected inside a `try` block, JavaScript immediately moves to the `catch` block. The remaining statements inside that `try` block will not execute.

To continue execution after an error, use separate `try-catch` blocks.

### Example

```js
await ans(2, 2); // 1
await ans(2, 0); // Error
await ans(2, 1); // 2
```

This is a simple example to understand how **errors stop the current try block when using await**.

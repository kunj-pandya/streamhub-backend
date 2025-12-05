# 📘 Notes: asyncHandler Function

asyncHandler is a **helper function** that automatically catches `errors` from async route handlers so we don’t need to write try/catch in every controller.

```javascript
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };
```

## ✅ What It Does

- Wraps your async controller functions
- Catches any errors that occur inside them
- Sends those errors to Express’s next() → error middleware
- Prevents the server from crashing
- Keeps controllers clean (no need for try/catch everywhere)

## 🛠 Example Usage

```javascript
router.get(
  "/user/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  })
);
```

No **try/catch** needed — `asyncHandler` catches errors automatically.

## ⭐ Why It’s Useful

- Cleaner code
- Centralized error handling
- Works perfectly with custom `ApiError`
- Standard practice in modern Express apps

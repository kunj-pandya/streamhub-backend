# 📘 Notes: ApiError Class

ApiError is a **custom error** class used to create structured and consistent error responses in backend.

```javascript
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    ((this.statusCode = statusCode),
      (this.data = null),
      (this.message = message),
      (this.success = false),
      (this.errors = errors));

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
```

✅ What It Does

- Creates a custom error object for API
- Stores the status code, message, and extra error details
- Ensures every API error has a consistent format
- Generates a clean stack trace for debugging
- Works perfectly with **asyncHandler** and **Express error middleware**

## 📦 Error Response Structure

When thrown:

```javascript
throw new ApiError(404, "User not found");
```

It produces a structured error:

```json
{
  "statusCode": 404,
  "data": null,
  "message": "User not found",
  "success": false,
  "errors": []
}
```

## ⭐ Why It’s Useful

- Clean and predictable error responses
- Easier debugging
- No random error messages
- Makes larger apps more maintainable
- Standard practice in professional APIs

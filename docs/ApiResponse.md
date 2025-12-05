# 📘 Notes: ApiResponse Class

The ApiResponse class is used to send consistent and structured success responses from API.

```javascript
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    ((this.statusCode = statusCode),
      (this.data = data),
      (this.message = message),
      (this.success = statusCode < 400));
  }
}
```

## ✅ What It Does

- Wraps API responses in a standard format
- Makes all success responses consistent
- Automatically sets success = true for status codes below 400

## 📦 Response Structure

Every response created from this class looks like:

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Success",
  "success": true
}
```

## 🛠 Example Usage

```javascript
return res.status(200).json(new ApiResponse(200, user, "User fetched"));
```

## ⭐ Benefits

- Clean controller code
- Easy to read and maintain
- Frontend always receives the same response format

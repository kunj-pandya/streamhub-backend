## ✅ What is` process.exit()` ?

**process.exit()** is a Node.js method used to stop the application immediately.

It ends the current Node.js process and returns an exit code to the operating system.

## 🔢 Exit Codes

```
| Code | Meaning                                     |
| ---- | ------------------------------------------- |
| `0`  | Success — program ended normally            |
| `1`  | Failure — program ended because of an error |
```

## 🛠 Why is it used in backend projects?

1. Prevents the server from running in a broken state

- If DB fails, the app should not keep running.

2. Helps DevOps / deployment systems detect failure

- Tools like Docker, Railway, Render, PM2 read exit codes.

3. Helps debugging

- Exit code 1 clearly shows that something went wrong.

---

| Exit Code | Meaning                          |
| --------- | -------------------------------- |
| **0**     | Success                          |
| **1**     | General error (your app failed)  |
| **2**     | Wrong usage or invalid arguments |
| **126**   | Cannot execute file              |
| **127**   | File/command not found           |
| **130**   | Stopped manually (Ctrl + C)      |
| **137**   | Force-killed (memory issues)     |

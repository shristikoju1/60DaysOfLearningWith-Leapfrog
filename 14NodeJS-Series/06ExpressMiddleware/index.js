const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

// Middleware to parse JSON bodies
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}: ${req.method}: ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("Hello from Middleware2", req.myUserName);
  next();
});

// Routes
app.get("/users", (req, res, next) => {
  const html = `
     <ul>
     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  return res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
  //Always add X to custom headers
  res.setHeader("X-myName", "Shristi Koju"); //Custom Header

  // console.log("I am in get route", req.myUserName)
  console.log(req.headers);
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = parseInt(req.params.id, 10);
    const user = users.find((user) => user.id === id);

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  })
  .patch((req, res) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      // Update the user with the new data
      users[userIndex] = { ...users[userIndex], ...req.body };
      return res.json(users[userIndex]);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  })
  .delete((req, res) => {
    const id = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      return res.json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  });

// Create new user
app.post("/api/users", (req, res) => {
  // const newUser = { id: users.length + 1, ...req.body };
  // users.push(newUser);
  // return res.status(201).json(newUser);
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ Status: "success", id: users.length });
  });
});

app.listen(PORT, () => console.log("Server started on port", PORT));

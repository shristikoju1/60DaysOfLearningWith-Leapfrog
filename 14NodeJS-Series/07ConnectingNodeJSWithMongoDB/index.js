const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log("Mongo Error", err));

// Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
}, { timestamps: true });

const User = mongoose.model("user", userSchema);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}: ${req.method}: ${req.path}\n`,
    (err) => {
      if (err) console.log("Error writing to log file", err);
      next();
    }
  );
});

app.use((req, res, next) => {
  console.log("Hello from Middleware2", req.myUserName);
  next();
});

// Routes
app.get("/users", async (req, res) => {
  const allDBUsers = await User.find({});
  const html = `
    <ul>
      ${allDBUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
  `;
  return res.send(html);
});

// REST API
app.get("/api/users", async (req, res) => {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
});

app.route("/api/users/:id")
  .get(async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.json(user);
      } else {
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "An error occurred while fetching the user" });
    }
  })
  .patch(async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // This option returns the updated document
      );

      if (updatedUser) {
        return res.json(updatedUser);
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "An error occurred while updating the user" });
    }
  })
  .delete(async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (deletedUser) {
        return res.json({ message: "User deleted successfully" });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: "An error occurred while deleting the user" });
    }
  });

// Create new user
app.post("/api/users", async (req, res) => {
  console.log("Request Body:", req.body); // Log the request body

  const { firstName, lastName, email, gender, jobTitle } = req.body;
  if (!firstName || !lastName || !email || !gender || !jobTitle) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {
    const result = await User.create({
      firstName,
      lastName,
      email,
      jobTitle,
      gender,
    });

    return res.status(201).json({ msg: "success", user: result });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log("Server started on port", PORT));

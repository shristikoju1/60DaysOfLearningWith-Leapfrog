const User = require('../models/user')

async function handleGetAllUsers(req, res){
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
          return res.json(user);
        } else {
          return res.status(404).json({ error: "User not found" });
        }
      } catch (error) {
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user" });
      }
}

async function handleUpdateUserById(req, res) {
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
        return res
          .status(500)
          .json({ error: "An error occurred while updating the user" });
      }
}

async function handleDeleteUserById(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (deletedUser) {
          return res.json({ message: "User deleted successfully" });
        } else {
          return res.status(404).json({ message: "User not found" });
        }
      } catch (error) {
        return res
          .status(500)
          .json({ error: "An error occurred while deleting the user" });
      }
}

async function handleCreateNewUserById(req, res) {
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
}



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUserById,
}
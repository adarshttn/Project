const router = require("express").Router();
const Signuppost = require("../Models/SignupDb");
const bcrypt = require("bcrypt");

//User Will Signup and this data would be saved to Database
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new Signuppost({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const User = await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login => When user login in our webapp this one checks whether is he/she is already registered or not
router.post("/login", async (req, res) => {
  try {
    const user = await Signuppost.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (err) { 
    res.status(500).json(err);
} 
});



module.exports = router;
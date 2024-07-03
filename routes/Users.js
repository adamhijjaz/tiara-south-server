const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      email: email,
      password: hash,
      // isAdmin: isAdmin || false,
    });
    res.json("Success");
    
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ error: "User doesn't exist!" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ error: "Wrong email and password combination" });
    }

    const accessToken = sign(
      { email: user.email, id: user.id },
      "importantsecret"
    );
    res.json({
      token: accessToken,
      email: user.email,
      id: user.id,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to log in" });
  }
});

router.get("/auth", validateToken, async (req, res) => {
  res.json(req.user);
  console.log(req.user);
});

module.exports = router;

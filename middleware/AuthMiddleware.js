const { verify } = require("jsonwebtoken"); 

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) {
    return res.status(401).json({ error: "User not logged in!" });
  }

  try {
    console.log("Token:", res.accessToken);
    console.log("Email and Password :"+this.email, this.password)
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.status(401).json("Error Middleware: "+res.error);
  }
};

module.exports = { validateToken };

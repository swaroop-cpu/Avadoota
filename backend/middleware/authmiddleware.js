// const jwt = require("jsonwebtoken");
// const User = require("../models/user"); // Ensure you have a User model

// const protect = async (req, res, next) => {
//     let token;

//     // Check for the token in the Authorization header
//     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//         try {
//             // Extract the token
//             token = req.headers.authorization.split(" ")[1];

//             // Verify the token
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);

//             // Find the user and attach to the request object
//             req.user = await User.findById(decoded.id).select("-password");

//             next(); // Move to the next middleware or controller
//         } catch (error) {
//             console.error("Token verification failed:", error.message);
//             res.status(401).json({ message: "Not authorized, token failed" });
//         }
//     } else {
//         res.status(401).json({ message: "No token provided" });
//     }
// };

// module.exports = protect;


const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401).json({ message: "Not authorized, invalid token" });
        }
    } else {
        res.status(401).json({ message: "No token provided" });
    }
};

module.exports = protect;

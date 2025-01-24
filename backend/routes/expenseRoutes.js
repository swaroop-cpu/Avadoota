// // // const express = require("express");
// // // const { addExpense, getExpenses, updateExpense, deleteExpense } = require("../controllers/expenceController");
// // // const router = express.Router();

// // // router.post("/", addExpense);
// // // router.get("/", getExpenses);
// // // router.put("/:id", updateExpense);
// // // router.delete("/:id", deleteExpense);

// // // module.exports = router;
// // const express = require("express");
// // const { addExpense, getExpenses, updateExpense, deleteExpense } = require("../controllers/expenceController");
// // const protect = require("../middleware/authmiddleware"); // Import the middleware

// // const router = express.Router();

// // router.post("/", protect, addExpense); // Protect add expense
// // router.get("/", protect, getExpenses); // Protect get expenses
// // router.put("/:id", protect, updateExpense); // Protect update expense
// // router.delete("/:id", protect, deleteExpense); // Protect delete expense

// // module.exports = router;
// const express = require("express");
// const { addExpense } = require("../controllers/expenceController");
// const protect = require("../middleware/authmiddleware");

// const router = express.Router();

// router.post("/", protect, addExpense); // Add expense route

// module.exports = router;
const express = require("express");
const { addExpense, getExpenses, updateExpense, deleteExpense } = require("../controllers/expenceController");
const protect = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", protect, addExpense);
router.get("/", protect, getExpenses);
router.put("/:id", protect, updateExpense);
router.delete("/:id", protect, deleteExpense);

module.exports = router;

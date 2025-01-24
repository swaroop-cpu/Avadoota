// const mongoose = require("mongoose");

// const expenseSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     date: { type: Date, required: true },
//     amount: { type: Number, required: true },
//     category: { type: String, required: true },
//     description: { type: String },
// });

// module.exports = mongoose.model("Expense", expenseSchema);
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
});

module.exports = mongoose.model("Expense", expenseSchema);

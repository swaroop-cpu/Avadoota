

// // const Expense = require("../models/Expence");

// // exports.addExpense = async (req, res) => {
// //     const { date, amount, category, description } = req.body;

// //     try {
// //         if (!date || !amount || !category) {
// //             return res.status(400).json({ message: "Date, amount, and category are required" });
// //         }

// //         const expense = await Expense.create({
// //             user: req.user.id,
// //             date,
// //             amount,
// //             category,
// //             description,
// //         });

// //         res.status(201).json(expense);
// //     } catch (error) {
// //         console.error("Error adding expense:", error.message);
// //         res.status(500).json({ message: "Server error" });
// //     }
// // };

// const Expense = require("../models/Expense");

// exports.getExpenses = async (req, res) => {
//     try {
//         const expenses = await Expense.find({ user: req.user.id });
//         res.json(expenses);
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };

// exports.updateExpense = async (req, res) => {
//     const { id } = req.params;
//     const { date, amount, category, description } = req.body;

//     try {
//         const expense = await Expense.findByIdAndUpdate(
//             id,
//             { date, amount, category, description },
//             { new: true }
//         );
//         res.json(expense);
//     } catch (error) {
//         res.status(400).json({ message: "Unable to update expense" });
//     }
// };

// exports.deleteExpense = async (req, res) => {
//     const { id } = req.params;

//     try {
//         await Expense.findByIdAndDelete(id);
//         res.json({ message: "Expense deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ message: "Unable to delete expense" });
//     }
// };
const Expense = require("../models/Expence");

// Add an expense
exports.addExpense = async (req, res) => {
    const { date, amount, category, description } = req.body;
    try {
        const expense = await Expense.create({
            user: req.user.id,
            date,
            amount,
            category,
            description,
        });
        res.status(201).json(expense);
    } catch (error) {
        console.error("Error adding expense:", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update an expense
exports.updateExpense = async (req, res) => {
    const { id } = req.params;
    const { date, amount, category, description } = req.body;

    try {
        const expense = await Expense.findByIdAndUpdate(
            id,
            { date, amount, category, description },
            { new: true }
        );
        res.json(expense);
    } catch (error) {
        res.status(400).json({ message: "Unable to update expense" });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        await Expense.findByIdAndDelete(id);
        res.json({ message: "Expense deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Unable to delete expense" });
    }
};

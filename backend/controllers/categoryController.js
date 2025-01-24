const Category = require("../models/category");

exports.addCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await Category.create({ name, user: req.user.id });
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: "Unable to create category" });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({ user: req.user.id });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

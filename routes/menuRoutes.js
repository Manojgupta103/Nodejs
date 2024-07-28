const express = require("express");
const router = express.Router();
const menu = require("./../models/menu");

// Post method menu
router.post("/", async (req, res) => {
  try {
    const data1 = req.body;
    const newmenu = new menu(data1);
    const response = await newmenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error saving menu" });
  }
});

// Get Method - Menu
router.get("/", async (req, res) => {
  try {
    const data = await menu.find();
    console.log("data Fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching person" });
  }
});

router.get("/:taste", async (req, res) => {
  const taste = req.params.taste;
  try {
    const data = await menu.find({ taste: taste });
    console.log("data Fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching taste" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatemenuData = req.body;

    const response = await menu.findByIdAndUpdate(menuId, updatemenuData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "Menu not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error updating Menu" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await menu.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(404).json({ error: "Menu not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Menu Deleted Succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error deleting Menu" });
  }
});
module.exports = router;

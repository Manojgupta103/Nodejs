const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');

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
    console.log('data Fetched')
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching person" });
  }
});

router.get('/:taste', async(req, res)=> {
  const taste = req.params.taste
  try {
    const data = await menu.find({taste: taste});
    console.log('data Fetched')
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error fetching taste" });
  }
})
module.exports = router;
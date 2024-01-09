const express = require("express");
const contact = require("../models/contact");
const router = express.Router();

router.post("/post", async (req, res) => {
  try {
    const { name, number, address, city, state, message } = req.body;
    const newContact = new contact({ name, number, address, city, state, message });
    await newContact.save().then(() => {
      res.status(200).json({ message: "Data saved" });
    });
  } catch (error) {
    res.status(400).json({ message: "Error occurred" });
    console.log(error);
  }
});

module.exports = router;

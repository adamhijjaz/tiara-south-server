const express = require('express');
const router = express.Router();
const { Complaint } = require('../models'); // Assuming you have a Complaint model defined

// GET route to fetch complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.findAll();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST route to create a new complaint
router.post('/', async (req, res) => {
  const { username, subject, aduan } = req.body;

  try {
    const newComplaint = await Complaint.create({ username, subject, aduan });
    res.status(201).json(newComplaint);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

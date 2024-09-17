const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MdPassword } = require('react-icons/md');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for table data
const tableSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenumber: Number,
  password:String,
  confirmpassword:String
});

// Create the model
const TableData = mongoose.model('TableData', tableSchema);

// Define the API route to save data
app.post('/api/data', async (req, res) => {
  try {
    const newData = new TableData(req.body);
    await newData.save();
    res.status(200).send('Data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving data');
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

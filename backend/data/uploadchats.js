// uploadChats.js

const mongoose = require('mongoose');
const chats = require('./data');  // Import the chat data from your data.js file

// Connect to MongoDB (replace with your MongoDB URI if using MongoDB Atlas or other cloud services)
mongoose.connect('mongodb://localhost:27017/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected successfully");
}).catch(err => {
  console.error("MongoDB connection error:", err);
});

// Define the schema for the chat data
const chatSchema = new mongoose.Schema({
  isGroupChat: { type: Boolean, required: true },
  users: [{
    name: { type: String, required: true },
    email: { type: String, required: true }
  }],
  chatName: { type: String, required: true },
  groupAdmin: {
    name: { type: String },
    email: { type: String }
  }
});

const Chat = mongoose.model('Chat', chatSchema);

// Insert the data into the database
async function uploadChats() {
  try {
    // Insert the chats data into the 'Chats' collection
    const result = await Chat.insertMany(chats);
    console.log('Chats uploaded successfully:', result);
    mongoose.connection.close(); // Close the connection after uploading
  } catch (err) {
    console.error('Error uploading chats:', err);
  }
}

uploadChats();

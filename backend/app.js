const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // password encryption chnages in database
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
const connectDB = async () => {
    mongoose.connect("mongodb+srv://eisha123:hY3VSXXQnZVreBFc@cluster0.okjl9ij.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log("Successfully connected to MongoDB")
  
      }).catch((error) => {
        console.error("Unable to connect to MongoDB", error);
      })
  }

// Model and user schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
const User = mongoose.model('User', userSchema);

// Signup user
app.post('/signup', async (req, res) => {
    try {
console.log(req.body)
        const { email, password } = req.body;
        // const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(200).json({ message: 'SignUp Successfully', user: newUser });
        
    } catch (error) {
        res.status(501).json({ message: "SignUp Failed", error: error.message });
    }
});
// Login user 
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!email || !password) {
            return res.status(400).json({ message: 'empty feilds' });

        }
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: 'invalid Credational' });
        }
        res.status(200).json({ message: "user SingUp successfully", user })
    } catch (error) {
        res.status(500).json({ message: 'Login Failed', error: error.message });
    }
});

// Port env connection
const Port = process.env.PORT || 3001;
connectDB().then(() => {

    app.listen(Port, () => {
        console.log(`Server is running on port ${Port}`);
    });
  })
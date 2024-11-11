
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-k1GsSP1CD6Sf664V--ygJmW5D8EE5Qo",
  authDomain: "eleanor-3aa19.firebaseapp.com",
  projectId: "eleanor-3aa19",
  storageBucket: "eleanor-3aa19.appspot.com",
  messagingSenderId: "123977754592",
  appId: "1:123977754592:web:94371ab17c2e4c20f36d85",
  measurementId: "G-2KVH10BH2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// create acc
// app.post('/CreateUser', async (req, res) => {
//   try {
//     const { username, password, name, email } = req.body; // Get data from the request body

//     // Check if username already exists
//     const findUser = await UserModel.findOne({ username: username }); // Query database for the username

//     if (findUser) {
//       return res.status(400).json({ message: 'Username already exists' }); // Send error if username is taken
//     }

//     // If username doesn't exist, create a new user
//     const newUser = new UserModel({ username, password, name, email });
//     await newUser.save(); // Save the new user in the database

//     res.status(201).send({ message: 'Registered successfully!' }); // Success response
//   } catch (err) {
//     res.status(500).send({ message: 'Error registering', error: err.message }); // Handle error with status and message
//   }
// });


// log in
// app.post('/login', async (req, res) => {
//   try {
//     const { name, pass } = req.body;
//     const findUser = await UserModel.findOne({ username: name }); // Use findOne to check for existence

//     if (!findUser) {
//       return res.status(400).json({ message: 'Wrong username or password' }); // Updated error message
//     }
//     if (pass === findUser.password) {
//       res.status(200).json(findUser._id);
//     } else {
//       return res.status(400).send({ message: 'Wrong username or password' });
//     }
//   } catch (err) {
//     res.status(500).json({ message: 'Error login' }); // Corrected spelling and message
//   }
// })

// Get users 
// app.get("/Getuser", async (req, res) => {
//   try {
//     const { id } = req.query;
//     const findUser = await UserModel.findOne({ _id: id });
//     if (!findUser) {
//       return res.status(400).json({ message: 'User not found' });
//     }
//     res.status(200).json({
//       success: true,
//       name: findUser.name,
//       email: findUser.email,
//       username: findUser.username,
//       id: findUser.id,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching user data", error: err });
//   }
// });


// // forGet pass
// app.post('/getPass', async (req, res) => {
//   try {
//     const { name } = req.body; // Get username from request body
//     const findUser = await UserModel.findOne({ username: name }); // Find user by username

//     if (!findUser) {
//       return res.status(400).json({ success: false, message: 'Username does not exist' }); // Return error with success: false
//     }

//     res.status(200).json({ success: true, password: findUser.password }); // Return success with password
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Internal server error', error: err.message }); // Return error with success: false
//   }
// });





































// // forGet pass taken
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service:'gmail',
//   auth: {
//     user: 'eeleanor508@gmail.com', // Your email
//     pass: '7797596863', // Your email password (use an app password or OAuth for security)
//   },
// });

// app.post('/getPass', async (req, res) => {
//   try {
//     const { name } = req.body;
//     const findUser = await UserModel.findOne({ username: name });
//     if (!findUser) {
//       return res.status(400).json({ success: false, message: 'Username does not exist' });
//     }
//     if (!findUser.email) {
//       return res.status(400).json({ success: false, message: 'Email is not available for this user' });
//     }
//     const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

//     // Send email with the verification code
//     const mailOptions = {
//       from: 'eeleanor508@gmail.com',
//       to: 'fm883254@gmail.com',
//       // to: findUser.email,
//       subject: 'Your Verification Code',
//       text: `Hello ${findUser.username},\n\nYour verification code is: ${verificationCode}\n\nThank you!`,
//     };


//     // Send the email
//      transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ success: false, message: 'Failed to send verification email', error: error.message });
//       }

//       console.log('Email sent: ' + info.response);
//       // Return the password and indicate that the verification email was sent
//       res.status(200).json({
//         success: true,
//         password: findUser.password,
//         message: 'Verification code sent to your email',
//       });
//     });

//   } catch (err) {
//     console.error('Error fetching password:', err);g
//     res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
//   }
// });




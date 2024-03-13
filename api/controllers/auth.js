import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const login=async(req,res,next)=>{
    try {
        const { email, password } = req.body;

  // Find the doctor with the given email
  const doctor =  await User.findOne({ email: req.body.email });

  if (doctor && bcrypt.compare(password, doctor.password)) {
    // Update the last_login variable
    doctor.last_login = new Date();

    res.status(200).json({ message: 'Login successful', doctor });
  }
  else {
    res.status(401).json({ message: 'Incorrect email or password' });
    
  }
    } catch (err) {
        next(err)
    }
}

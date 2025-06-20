import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const router = Router();

// @route   POST /api/signup
router.post('/signup', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ msg: 'User created successfully' });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   POST /api/login
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

    // Success
    res.status(200).json({ msg: 'Login successful', user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ msg: 'Server Error' });
  }
});

export default router;

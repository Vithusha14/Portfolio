import { Router } from 'express';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../lib/sendEmail.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (mongoose.connection.readyState === 1) {
      const contact = new Contact({ name, email, subject, message });
      await contact.save();
    }

    const result = await sendContactEmail({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: 'Message received successfully',
      emailSent: result.sent,
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;

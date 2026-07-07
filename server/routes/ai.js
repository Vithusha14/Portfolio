import { Router } from 'express';
import { generateResponse } from '../../api/lib/aiKnowledge.js';
import { sendAiInquiryEmail } from '../lib/sendEmail.js';

const router = Router();

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const question = message.trim();
    const reply = generateResponse(question);

    sendAiInquiryEmail({ question, reply }).catch((err) => {
      console.error('AI inquiry email failed:', err);
    });

    res.json({ reply, message: reply });
  } catch (error) {
    console.error('AI chat error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

export default router;

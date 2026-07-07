import { generateResponse } from '../lib/aiKnowledge.js';
import { sendAiInquiryEmail } from '../lib/sendEmail.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

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

    res.status(200).json({ reply, message: reply });
  } catch (error) {
    console.error('AI chat error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
}

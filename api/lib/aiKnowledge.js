const portfolioKnowledge = {
  name: 'Vithusha Pathmanathan',
  role: 'Associate Software Engineer | Full Stack Developer | AI Application Developer',
  summary:
    'Final-year Software Engineering undergraduate at SLIIT with hands-on industry experience building production-grade full-stack and AI-powered applications at Nilavitech. Proficient in Java (Spring Boot), Python (FastAPI), and React (TypeScript), with experience in React Native, Next.js, AI/ML (LangChain, Groq, Google Gemini), AWS, and conversational AI systems.',
  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'C++', 'PHP', 'Kotlin', 'HTML', 'CSS'],
    frameworks: ['Spring Boot', 'FastAPI', 'React.js', 'Next.js', 'React Native', 'Node.js', 'Express.js'],
    ai: ['LangChain', 'Groq AI', 'Google Gemini', 'Dialogflow CX', 'OpenAI API', 'OpenCV'],
    cloud: ['AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Appwrite'],
    concepts: ['REST API Design', 'RBAC', 'Microservices', 'OOP', 'JWT Auth'],
  },
  experience: [
    'Nilavitech — Intern Software Engineer (Sep 2025 – Present)',
    'SPC Bazaar — e-commerce platform (spcbazaar.com.au)',
    'Tiger Express — cross-border logistics (tigerexpress.com.au)',
    'Account360 — accounting system (account360.tigerexpress.com.au)',
    'Money Exchange — LKR/INR to AUD (moneyexchange.tigerexpress.com.au)',
    'MedTrace AI Web — clinical intelligence (Gemini, FastAPI, Next.js)',
    'AI Receptionist — Dialogflow CX, Twilio, WebSocket',
    'Hospital Patient Portal — secure healthcare with OTP & JWT',
  ],
  education: [
    'BSc (Hons) IT — Software Engineering, SLIIT (Sep 2022 – Present, Final Semester)',
    "G.C.E. Advanced Level — Jaffna Vembadi Girls' High School (2019)",
    'Diploma in IT with Distinction — DMI Computer Education',
    'Diploma in English — College of English and IT Skills Development',
    'NVQ Level 03 — Computer Application Assistant (CAA)',
  ],
  projects: [
    'Event Booking Platform — Microservices (Node.js, MongoDB, React)',
    'Tax-Trail — AI mobile app, LangChain, Groq AI, UN SDG 10',
    'GreenLoop — Smart Waste Management, MERN, Stripe, Firebase',
    'Personal Finance Tracker, Country Finder, Food Delivery',
  ],
  certifications: [
    'Python for Beginners — University of Moratuwa',
    'Java Programming — Great Learning Academy',
    'React JS — Great Learning Academy',
    'UI/UX for Beginners — Great Learning Academy',
  ],
  activities: [
    'Secretary — Media Club, SLIIT Northern Uni (2023)',
    'Library Day Speech Competition — School Level',
  ],
  references: [
    'Ms. Bhagya Nathali Silva — Assistant Professor, SLIIT (nathali.s@sliit.lk)',
    'Ms. Uthpala Samarakoon — Senior Lecturer, SLIIT (uthpala.s@sliit.lk)',
  ],
  contact: {
    email: 'vithusha014@gmail.com',
    phone: '+94 77 392 4735',
    github: 'github.com/Vithusha14',
    linkedin: 'linkedin.com/in/vithusha-pathmanathan-8b356828a',
    location: 'Colombo, Sri Lanka',
  },
};

export function generateResponse(message) {
  const lower = message.toLowerCase();

  if (lower.includes('who') && (lower.includes('vithusha') || lower.includes('you') || lower.includes('are'))) {
    return `${portfolioKnowledge.name} is a ${portfolioKnowledge.role}.\n\n${portfolioKnowledge.summary}\n\nContact: ${portfolioKnowledge.contact.email}`;
  }

  if (lower.includes('skill') || lower.includes('technolog') || lower.includes('stack') || lower.includes('language')) {
    return `Technical skills (from CV):\n\n• Languages: ${portfolioKnowledge.skills.languages.join(', ')}\n• Frameworks: ${portfolioKnowledge.skills.frameworks.join(', ')}\n• AI/ML: ${portfolioKnowledge.skills.ai.join(', ')}\n• Databases: ${portfolioKnowledge.skills.databases.join(', ')}\n• Cloud/DevOps: ${portfolioKnowledge.skills.cloud.join(', ')}\n• Concepts: ${portfolioKnowledge.skills.concepts.join(', ')}`;
  }

  if (lower.includes('project')) {
    return `Academic & industry projects:\n\n${portfolioKnowledge.projects.map((p, i) => `${i + 1}. ${p}`).join('\n')}\n\nGitHub: ${portfolioKnowledge.contact.github}`;
  }

  if (lower.includes('experience') || lower.includes('intern') || lower.includes('nilavitech') || lower.includes('work')) {
    return `Work experience:\n\n${portfolioKnowledge.experience.map((e, i) => `${i + 1}. ${e}`).join('\n')}`;
  }

  if (lower.includes('education') || lower.includes('sliit') || lower.includes('degree')) {
    return `Education:\n\n${portfolioKnowledge.education.map((e, i) => `${i + 1}. ${e}`).join('\n')}`;
  }

  if (lower.includes('certif')) {
    return `Certifications:\n\n${portfolioKnowledge.certifications.map((c, i) => `${i + 1}. ${c}`).join('\n')}`;
  }

  if (lower.includes('reference')) {
    return `References:\n\n${portfolioKnowledge.references.join('\n')}`;
  }

  if (lower.includes('activit') || lower.includes('club')) {
    return `Extra activities:\n\n${portfolioKnowledge.activities.map((a, i) => `${i + 1}. ${a}`).join('\n')}`;
  }

  if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('reach')) {
    return `Contact ${portfolioKnowledge.name}:\n\n• Email: ${portfolioKnowledge.contact.email}\n• Phone: ${portfolioKnowledge.contact.phone}\n• GitHub: ${portfolioKnowledge.contact.github}\n• LinkedIn: ${portfolioKnowledge.contact.linkedin}\n• Location: ${portfolioKnowledge.contact.location}\n\nOpen to Associate Software Engineer roles.`;
  }

  if (lower.includes('cv') || lower.includes('resume')) {
    return `Download the CV from the portfolio "Download CV" button, or email ${portfolioKnowledge.contact.email} directly.`;
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return `Hello! I'm the AI assistant for ${portfolioKnowledge.name}. I answer questions based on her CV and portfolio. Ask about skills, Nilavitech projects, education, or certifications!`;
  }

  if (lower.includes('ai') || lower.includes('gemini') || lower.includes('langchain') || lower.includes('groq')) {
    return `AI experience:\n\n• MedTrace AI — Google Gemini clinical pipeline\n• AI Receptionist — Dialogflow CX, Twilio\n• Tax-Trail — LangChain & Groq AI\n• Hospital Portal — Gemini AI integration`;
  }

  if (lower.includes('spc') || lower.includes('bazaar')) {
    return `SPC Bazaar (spcbazaar.com.au) — E-commerce website for premium organic products. Vithusha built the MERN stack platform where admins update products and offers for customers.`;
  }

  if (lower.includes('tiger') || lower.includes('logistic')) {
    return `Tiger Express (tigerexpress.com.au) — Cross-border logistics platform Australia ↔ Sri Lanka & India. Built with Spring Boot, React, TypeScript, PostgreSQL, AWS. Features dynamic pricing, RBAC, and REST APIs.`;
  }

  if (lower.includes('account360') || lower.includes('accounting')) {
    return `Account360 (account360.tigerexpress.com.au) — All-in-one accounting & shop management system that can replace manual accountant workflows. Spring Boot, React, TypeScript, PostgreSQL.`;
  }

  if (lower.includes('money exchange') || lower.includes('exchange')) {
    return `Money Exchange (moneyexchange.tigerexpress.com.au) — Converts LKR/INR to AUD with balance management and transaction history. Built with Next.js & Spring Boot.`;
  }

  return `I'm ${portfolioKnowledge.name}'s AI assistant (trained on her CV). I can help with:\n\n• Skills & Technologies\n• Nilavitech Intern Projects\n• Academic Projects\n• Education & Certifications\n• Contact: ${portfolioKnowledge.contact.email}\n\nWhat would you like to know?`;
}

export default portfolioKnowledge;

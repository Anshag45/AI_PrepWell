# AI_PrepWell 🎯  
AI-powered Mock Interview Platform — voice-enabled, adaptive, and feedback-driven.  

## 🚀 Overview  
AI_PrepWell is a full-stack mock interview platform designed to help users practice job-interview questions in an interactive, realistic way. It uses AI (voice + language models) to generate dynamic, role-specific questions and provides structured, real-time feedback to help users improve interview performance.  

This tool aims to simulate real interview scenarios — users speak (voice), answer, and receive instant feedback and transcripts; ideal for students or job seekers preparing for interviews.  

## ✨ Features  

- 🎤 **Voice-enabled interviews**: Uses a voice interface (via Vapi AI) for realistic, spoken interview sessions.  
- 🤖 **AI question generation**: Questions are generated dynamically using Google Gemini API, tailored to role-specific mock interviews.  
- 📝 **Automated feedback & evaluation**: After each session, the system gives structured feedback with category-wise scores, transcripts, and improvement suggestions.  
- 🕓 **Interview history tracking**: Users can view and manage past sessions — helpful for tracking progress over time.  
- 🔄 **Adaptive & scalable**: Supports multiple interview sessions and generates varied question sets to avoid repetition.  

## 🛠 Tech Stack  

- **Frontend**: Next.js, React, TypeScript, shadcn/ui, Tailwind CSS  
- **Backend & Infrastructure**: Firebase (DB / Auth), REST APIs  
- **AI / Voice / Language Processing**: Vapi AI (voice), Google Gemini API  
- **Development Tools**: Git/GitHub, Chrome DevTools  

## 📁 Repository Structure  

    AI_PrepWell/
    ├── app/ # Next.js app — frontend UI
    ├── constants/ # Config & app constants
    ├── firebase/ # Firebase config & setup
    ├── lib/ # Utility / helper functions
    ├── public/ # Static assets (if any)
    ├── types/ # TypeScript type definitions
    ├── .gitignore # Ignored files
    ├── package.json # Project dependencies & scripts
    ├── tsconfig.json # TypeScript config
    ├── next.config.ts # Next.js config
    └── README.md # ← you're here


## ⚙️ Getting Started (Development)  

### Prerequisites  
- Node.js + npm (or yarn / pnpm / bun)  
- A Firebase project (for authentication / data storage)  
- Access credentials / API keys for Vapi AI and Google Gemini (if required)  

### Installation & Running Locally  


# Clone the repo  
git clone https://github.com/Anshag45/AI_PrepWell.git  
cd AI_PrepWell  

# Install dependencies  
npm install   # or yarn, pnpm, bun as per your setup  

# Add Firebase config & API keys  
# (Set environment variables or a config file as per project setup)  

Run the development server  
npm run dev  
Once the server is running, open your browser and go to http://localhost:3000 to start using AI_PrepWell.


  👤 Usage
  Sign up / log in (via Firebase Auth)
  
  Start a new mock interview session
  
  Speak aloud — the system records via voice input (Vapi AI)
  
  Receive AI-generated questions (via Google Gemini)
  
  Complete the interview and get instant feedback & a transcript
  
  Review past sessions via the “Interview History” section
  
  ✅ Project Status
  Stable / Work-in-Progress — Core functionalities (voice-based interview, AI question generation, feedback system) are functional. Additional features like improved UI, session analytics, or export options may be implemented in future versions.
  
  ✨ Potential Improvements / Roadmap
  Add custom interview templates (by role / domain)
  
  Improve UI/UX (better design, responsiveness, mobile support)
  
  Export transcripts and feedback (PDF, shareable link)
  
  Multi-user support (e.g. peer interviews / group mode)
  
  Add more voice/Lang-model providers for flexibility
  
  📬 Contributing
  Contributions are welcome! To contribute:
  
  Fork the repository
  
  Create a new branch (e.g. feature/xyz)
  
  Commit your changes and open a Pull Request
  
  Please ensure code style consistency (TypeScript, React best practices) and update dependencies as needed.
  
  🙌 Acknowledgements
  Built by Ansh Agarwal with React/Next.js, Firebase, Vapi AI & Google Gemini.
  Inspired by common interview-prep needs of students and job-seekers.

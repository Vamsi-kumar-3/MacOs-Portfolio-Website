import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setwindowState }) => {

    const commands = {

        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `I am H Vamsi Kumar, a Full Stack Developer specializing in MERN Stack development.

I have 6 months of hands-on experience working with React.js, JavaScript, Node.js, Express.js, and MongoDB.

I enjoy building responsive web applications, REST APIs, authentication systems, and user-focused interfaces.`
        },

        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap
Backend: Node.js, Express.js, MongoDB, Mongoose
State & Routing: Context API, Redux Toolkit, React Router
Concepts: CRUD Operations, Authentication, API Integration, State Management
Tools: Git, GitHub, VS Code, Vite, npm, Postman`
        },

        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Insta Clone - Full Stack Social Media Application
   MERN Stack, JWT Authentication, REST APIs
   User & Post CRUD, Follow Request System

2. E-Commerce Application
   React.js, Vite, Context API, React Router
   Tailwind CSS, Fake Store API

3. Mac OS Portfolio
   React.js, JavaScript, HTML5, CSS3, Tailwind CSS
   Interactive macOS-inspired portfolio website`
        },

        experience: {
            description: 'Display work experience',
            usage: 'experience',
            fn: () => `MERN Stack Intern @ BDreamz Global Solutions Pvt Ltd.
Apr 2026 - Present

- Created responsive web features using React.js, JavaScript, HTML5 and CSS3
- Developed RESTful APIs using Node.js and Express.js
- Implemented CRUD operations using MongoDB and Mongoose
- Connected React frontend features with backend APIs
- Worked with authentication and application state
- Tested APIs using Postman and resolved application bugs`
        },

        education: {
            description: 'Display education',
            usage: 'education',
            fn: () => `B.Tech in Computer Science and Engineering
Sreenivasa Institute of Technology and Management Studies
2022 - 2026
CGPA: 7.98 / 10`
        },

        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: vamsikumarh3@email.com
Phone: +91 9032872849
Location: Chennai, Navalur`
        },

        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Vamsi-kumar-3', '_blank')
                return 'Opening GitHub...'
            }
        },

        linkedin: {
            description: 'Open LinkedIn profile',
            usage: 'linkedin',
            fn: () => {
                window.open('https://linkedin.com/in/vamsi-kumar-h', '_blank')
                return 'Opening LinkedIn...'
            }
        },

        resume: {
            description: 'Open my resume',
            usage: 'resume',
            fn: () => {
                window.open('/vamsi.pdf', '_blank')
                return 'Opening resume...'
            }
        },

        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `GitHub: github.com/Vamsi-kumar-3
LinkedIn: linkedin.com/in/vamsi-kumar-h`
        },

        status: {
            description: 'View current status',
            usage: 'status',
            fn: () => `Status: Open to Opportunities

Looking for:
- Full Stack Developer
- MERN Stack Developer
- Frontend Developer`
        },

        certifications: {
            description: 'View certifications',
            usage: 'certifications',
            fn: () => `1. MERN Stack
   Besant Technologies, Chennai
   May 2026 - Present

2. MERN Stack Development
   Sheryians Coding School
   2025 - 2026`
        },

        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }


    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to Vamsi's Portfolio CLI! ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio.

I am H Vamsi Kumar,
a Full Stack Developer specializing in MERN Stack.

Experience:
6 Months of MERN Stack Development

You can explore my skills, projects,
experience and contact information
using terminal commands.

Type 'help' to see all available commands.

Try:
  • about
  • skills
  • projects
  • experience
  • education
  • contact
  • github
  • linkedin
  • resume

Happy exploring! 🚀
`


    return (
        <MacWindow
            windowName={windowName}
            setwindowState={setwindowState}
        >

            <div className="cli-window">

                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'vamsikumarh:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />

            </div>

        </MacWindow>
    )
}

export default Cli
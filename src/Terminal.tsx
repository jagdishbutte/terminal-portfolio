import React, { useState, useEffect } from "react";
import {
  Terminal as TerminalIcon,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface Command {
  input: string;
  output: React.ReactNode;
}

interface Project {
  name: string;
  tech: string;
  desc: string;
  link: string;
  git: string;
}

const Terminal = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const cvLink =
    "https://drive.google.com/file/d/1u7WnByM1psK5W-2ne3Lp2IE4MW0lSoSK/view?usp=sharing";
  const projects: Project[] = [
    {
      name: "Aidventure",
      tech: "React, Gemini AI",
      desc: "AI-powered trip planner",
      link: "https://aidventure-pi.vercel.app/",
      git: "https://github.com/jagdishbutte/Aidventure",
    },
    {
      name: "BookStory",
      tech: "MERN Stack",
      desc: "Online book selling platform",
      link: "https://book-story-plum.vercel.app/",
      git: "https://github.com/jagdishbutte/BookStory",
    },
    {
      name: "Shoppy",
      tech: "React, Freestore API",
      desc: "E-commerce Website",
      link: "https://shoppy-rose-six.vercel.app/",
      git: "https://github.com/jagdishbutte/E-commerce",
    },
    {
      name: "MusicMonk",
      tech: "JavaScript",
      desc: "Music streaming application",
      link: "https://jagdishbutte.github.io/Spotify-Clone/",
      git: "https://github.com/jagdishbutte/Spotify-Clone",
    },
  ];

  const availableCommands = {
    help: (
      <div className="text-green-400">
        Available commands:
        <br />
        - about: Learn about me
        <br />
        - skills: View my technical skills
        <br />
        - projects: See my projects
        <br />
        - contact: Get my contact info
        <br />
        - download: Download my CV
        <br />- clear: Clear the terminal
      </div>
    ),
    about: (
      <div className="text-blue-400">
        Hi, I'm Jagdish Butte! 👋
        <br />
        I'm a Full Stack Developer passionate about building innovative web
        applications.
        <br />I specialize in React, Node.js, and modern web technologies.
      </div>
    ),
    skills: (
      <div className="grid grid-cols-2 gap-4 text-yellow-400">
        <div>
          <strong>Frontend:</strong>
          <br />
          ▪ React
          <br />
          ▪ TypeScript
          <br />▪ Tailwind CSS
        </div>
        <div>
          <strong>Backend:</strong>
          <br />
          ▪ Node.js
          <br />
          ▪ Express
          <br />▪ MongoDB
        </div>
        <div>
          <strong>Programming Languages:</strong>
          <br />
          ▪ JavaScript
          <br />
          ▪ TypeScript
          <br />▪ C++
        </div>
        <div>
          <strong>Databases:</strong>
          <br />
          ▪ MongoDB
          <br />▪ MySQL
        </div>
        <div>
          <strong>Tools:</strong>
          <br />
          ▪ Git
          <br />
          ▪ VS Code
          <br />
          ▪ Postman
          <br />▪ Firebase
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="text-purple-400 cursor-pointer hover:text-purple-300"
          >
            {/* Project Name */}
            <div
              onClick={() => window.open(project.git, "_blank")}
              className="flex items-center"
            >
              → {project.name} (🐙code)
            </div>

            {/* Tech Stack */}
            <div className="text-gray-400 ml-2">
              <strong>Tech:</strong> {project.tech}
            </div>

            {/* Project Description */}
            <div className="text-gray-400 ml-2">{project.desc}</div>

            {/* Live Demo Link */}
            {project.link && (
              <div className="text-gray-400 ml-2 flex items-center">
                <ExternalLink size={14} className="mr-1" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300"
                >
                  Click to view live demo
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="text-cyan-400">
        <a
          href="https://linkedin.com/in/jagdishbutte"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-cyan-300"
        >
          💼 LinkedIn: linkedin.com/in/jagdishbutte
        </a>
        <a
          href="https://github.com/jagdishbutte"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-cyan-300"
        >
          🐙 GitHub: github.com/jagdishbutte
        </a>
        <a
          href="mailto:jagdishbutte@gmail.com"
          className="block hover:text-cyan-300"
        >
          📧 Email: jagdishbutte@gmail.com
        </a>
        <a href="tel:+917888242084" className="block hover:text-cyan-300">
          📞 Phone: +91 788-824-2084
        </a>
      </div>
    ),
    download: (
      <div className="text-pink-400">
        <a
          href={cvLink}
          className="underline text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to download my CV
        </a>
      </div>
    ),
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    setCommands([
      {
        input: "help",
        output: availableCommands.help,
      },
    ]);
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = currentInput.toLowerCase().trim();

      const newCommand: Command = {
        input: currentInput,
        output: availableCommands[cmd as keyof typeof availableCommands] || (
          <span className="text-red-400">
            Command not found. Type 'help' for available commands.
          </span>
        ),
      };

      if (cmd === "clear") {
        setCommands([]);
      } else {
        setCommands((prev) => [...prev, newCommand]);
      }

      setCurrentInput("");
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm md:text-base overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <TerminalIcon className="text-green-400" size={20} />
        <span className="text-gray-400">portfolio-terminal</span>
      </div>

      <div className="space-y-4">
        {commands.map((cmd, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 text-green-400">
              <ChevronRight size={16} />
              <span>{cmd.input}</span>
            </div>
            <div className="mt-2 ml-6">{cmd.output}</div>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <ChevronRight className="text-green-400" size={16} />
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent text-white focus:outline-none flex-1"
            autoFocus
          />
          <span
            className={`text-white ${showCursor ? "opacity-100" : "opacity-0"}`}
          >
            ▋
          </span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

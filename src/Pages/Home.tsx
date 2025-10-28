"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Download,
  ExternalLink,
  Code,
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Zap,
  Palette,
  Layers,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import avatar from "../assets/avatar.jpg"
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { useInView } from "../hooks/useInView"

interface HomeProps {
  darkMode: boolean
  setDarkMode: (mode: boolean) => void
}

const Portfolio = ({ darkMode, setDarkMode }: HomeProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [homeRef, homeHasBeenInView] = useInView();
  const [aboutRef, aboutHasBeenInView] = useInView();
  const [skillsRef, skillsHasBeenInView] = useInView();
  const [projectsRef, projectsHasBeenInView] = useInView();
  const [contactRef, contactHasBeenInView] = useInView();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["home", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  
    const socialLinks = [
    { icon: FaGithub, href: "https://github.com/saintyy1", gradient: "from-purple-600 to-pink-600" },
    { icon: FaXTwitter, href: "https://x.com/OlufowobiTolu", gradient: "from-cyan-600 to-blue-600" },
    { icon: Mail, href: "mailto:lufowobi69@gmail.com", gradient: "from-pink-600 to-orange-600" },
    ];

  const skills = [
    { name: "HTML5", level: 90, icon: "🎨", gradient: "from-orange-400 via-red-500 to-pink-500" },
    { name: "CSS3", level: 85, icon: "💎", gradient: "from-blue-400 via-cyan-500 to-teal-400" },
    { name: "JavaScript", level: 80, icon: "⚡", gradient: "from-yellow-400 via-orange-500 to-red-500" },
    { name: "React.js", level: 80, icon: "⚛️", gradient: "from-cyan-400 via-blue-500 to-indigo-600" },
    { name: "Tailwind", level: 85, icon: "🎯", gradient: "from-teal-400 via-cyan-500 to-blue-500" },
    { name: "Firebase", level: 90, icon: "🔥", gradient: "from-green-400 via-emerald-500 to-teal-600" },
    { name: "Git", level: 87, icon: "🚀", gradient: "from-orange-500 via-red-600 to-pink-600" },
    { name: "TypeScript", level: 75, icon: "💙", gradient: "from-blue-500 via-indigo-600 to-purple-700" },
  ]

  const projects = [
    {
      title: "ShopNow",
      description:
        "Full-featured shopping experience with advanced cart management, real-time inventory, and seamless checkout flow.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
      gradient: "from-purple-600 via-pink-600 to-red-600",
      image: project3,
      demoUrl: "https://saintyy1.github.io/Ecommerce-app/",
      githubUrl: "https://github.com/saintyy1/Ecommerce-app"
    },
    {
      title: "CS Flashcards",
      description:
        "An interactive flashcard app for learning computer science concepts with spaced repetition.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      image: project2,
      demoUrl: "https://saintyy1.github.io/FlashCard-Learning-app-main/index.html",
      githubUrl: "https://github.com/saintyy1/FlashCard-Learning-app-main"
    },
    {
      title: "NovlNest",
      description: "A novel platform for readers and writers to share and discover stories.",
      tech: ["React.ts", "Tailwind CSS", "Firebase", "Node.js"],
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      image: project1,
      demoUrl: "https://novlnest.com/",
      githubUrl: "https://github.com/saintyy1/Novel-app"
    },
    {
      title: "Insure",
      description:
        "A modern insurance landing page with responsive design and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-orange-500 via-red-600 to-pink-700",
      image: project4,
      demoUrl: "https://saintyy1.github.io/insure-landing-page/",
      githubUrl: "https://github.com/saintyy1/insure-landing-page"
    },
  ]

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-slate-950" : "bg-white"} transition-colors duration-700 overflow-x-hidden`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-[1000px] h-[1000px] rounded-full blur-[128px] transition-all duration-700 ease-out ${darkMode ? "opacity-10" : "opacity-5"}`}
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.3), rgba(245, 158, 11, 0.2))",
            top: `${mousePosition.y - 500}px`,
            left: `${mousePosition.x - 500}px`,
          }}
        />
        <div
          className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-purple-700/5 rounded-full blur-[100px] ${darkMode ? "opacity-100" : "opacity-50"}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/5 via-red-500/5 to-orange-500/5 rounded-full blur-[100px] ${darkMode ? "opacity-100" : "opacity-50"}`}
        />
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? `${darkMode ? "bg-slate-950/70" : "bg-white/70"} backdrop-blur-xl ${darkMode ? "border-white/5" : "border-slate-200"} border-b shadow-lg ${darkMode ? "shadow-black/5" : "shadow-slate-200/50"}` : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ✨ Tolu
            </div>

            <div
              className={`hidden md:flex items-center gap-1 ${darkMode ? "bg-slate-900/40" : "bg-slate-100"} backdrop-blur-xl rounded-full p-1.5 ${darkMode ? "border-white/5" : "border-slate-200"} border`}
            >
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                    activeSection === item.toLowerCase()
                      ? `${darkMode ? "bg-white/10 text-white shadow-lg shadow-white/5" : "bg-white text-slate-900 shadow-lg shadow-slate-200"}`
                      : `${darkMode ? "text-gray-400 hover:text-white hover:bg-white/5" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-full ${darkMode ? "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10" : "bg-slate-100 hover:bg-slate-200 border-slate-200 hover:border-slate-300"} border transition-all duration-300 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2.5 rounded-full ${darkMode ? "bg-white/5 hover:bg-white/10 border-white/5" : "bg-slate-100 hover:bg-slate-200 border-slate-200"} border transition-all duration-300 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden ${darkMode ? "bg-slate-950/95" : "bg-white/95"} backdrop-blur-2xl ${darkMode ? "border-white/5" : "border-slate-200"} border-t`}
          >
            <div className="px-6 py-6 space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-3 rounded-xl ${darkMode ? "hover:bg-white/5 text-gray-300 hover:text-white" : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"} transition-all text-sm font-medium`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" ref={homeRef} className={`relative min-h-screen flex items-center justify-center pt-20 ${darkMode ? "bg-slate-950" : "bg-white"} transition-opacity duration-700 ${homeHasBeenInView ? "opacity-100" : "opacity-0"}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 ${darkMode ? "bg-white/5" : "bg-slate-100"} backdrop-blur-xl ${darkMode ? "border-white/10" : "border-slate-200"} border rounded-full`}
            >
              <Sparkles className="text-yellow-400" size={16} />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Welcome to My Digital Playground
              </span>
              <Sparkles className="text-yellow-400" size={16} />
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Frontend
              </span>
              <span className="block bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl md:text-3xl font-medium ${darkMode ? "text-gray-400" : "text-slate-600"} max-w-3xl mx-auto leading-relaxed`}
            >
              Transforming Ideas into{" "}
              <span className={`${darkMode ? "text-white" : "text-slate-900"} font-semibold`}>Stunning</span> Digital
              Experiences
            </p>

            <p
              className={`text-base ${darkMode ? "text-gray-500" : "text-slate-500"} max-w-2xl mx-auto leading-relaxed`}
            >
              I craft pixel-perfect, blazing-fast, and user-centric web applications that leave lasting impressions.
              Let's build something extraordinary together! 🚀
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-white text-slate-950 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 flex items-center gap-2"
              >
                <Zap size={18} className="group-hover:rotate-12 transition-transform" />
                Explore My Work
              </button>

                <a href="/CV_Olufowobi_Tolu.pdf" download>
                    <button
                        className={`group px-8 py-4 ${
                        darkMode
                            ? "border-white/10 hover:bg-white/5 hover:border-white/20"
                            : "border-slate-300 hover:bg-slate-100 hover:border-slate-400"
                        } border rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                        darkMode ? "text-white" : "text-slate-900"
                        }`}
                    >
                        <Download size={18} className="group-hover:animate-bounce" />
                        Download CV
                    </button>
                </a>
            </div>

            <div className="flex justify-center gap-4 pt-8">
              {socialLinks.map(({ icon: Icon, href }, idx) => (
                    <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 ${
                        darkMode
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                            : "bg-slate-100 border-slate-200 hover:bg-slate-200 hover:border-slate-300"
                        } backdrop-blur-xl rounded-xl border hover:scale-110 transition-all duration-300`}
                    >
                        <Icon size={20} className={darkMode ? "text-gray-400" : "text-slate-600"} />
                    </a>
                ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <div
              className={`p-2 ${darkMode ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"} rounded-full border ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              <ChevronDown size={24} />
            </div>
          </button>
        </div>
      </section>

      <section id="about" ref={aboutRef} className={`relative py-32 px-6 lg:px-8 ${darkMode ? "bg-slate-950" : "bg-white"} transition-opacity duration-700 ${aboutHasBeenInView ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-500 rounded-full" />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
            </div>
            <p className={`text-lg ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
              Passionate Developer. Creative Thinker. Problem Solver.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <div
                className={`relative ${darkMode ? "bg-white/5" : "bg-slate-50"} backdrop-blur-xl rounded-3xl p-10 ${darkMode ? "border-white/10" : "border-slate-200"} border`}
              >
                <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 rounded-3xl shadow-2xl shadow-purple-500/20 transform hover:scale-105 hover:rotate-3 transition-all duration-500 overflow-hidden">
                        <img
                            src={avatar}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce">
                    ⚡
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Olufowobi Tolulope
                  </h3>
                  <p className="text-base font-medium text-pink-400">Frontend Developer</p>
                  
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className={`p-6 ${darkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:border-slate-300"} backdrop-blur-xl rounded-2xl border transition-all duration-300`}
              >
                <p className={`text-base ${darkMode ? "text-gray-300" : "text-slate-700"} leading-relaxed`}>
                  Hey there! 👋 I'm a{" "}
                  <span className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    passionate Frontend Developer
                  </span>{" "}
                  with a laser focus on creating jaw-dropping digital experiences that users absolutely love.
                </p>
              </div>

              <div
                className={`p-6 ${darkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:border-slate-300"} backdrop-blur-xl rounded-2xl border transition-all duration-300`}
              >
                <p className={`text-base ${darkMode ? "text-gray-300" : "text-slate-700"} leading-relaxed`}>
                  With{" "}
                  <span className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                    2+ years of experience
                  </span>
                  , I specialize in building lightning-fast, responsive web applications using cutting-edge
                  technologies. Clean code and pixel-perfect designs are my obsession! 🎨
                </p>
              </div>

              <div
                className={`p-6 ${darkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:border-slate-300"} backdrop-blur-xl rounded-2xl border transition-all duration-300`}
              >
                <p className={`text-base ${darkMode ? "text-gray-300" : "text-slate-700"} leading-relaxed`}>
                  When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source
                  projects, or mentoring aspiring developers. Let's build the future together! 🚀
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: "2+", label: "Years", gradient: "from-cyan-500 to-blue-600" },
                  { num: "20+", label: "Projects", gradient: "from-purple-500 to-pink-600" },
                  { num: "15+", label: "Clients", gradient: "from-orange-500 to-red-600" },
                ].map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity`}
                    />
                    <div
                      className={`relative ${darkMode ? "bg-slate-950" : "bg-white"} p-5 rounded-xl text-center ${darkMode ? "border-white/10" : "border-slate-200"} border`}
                    >
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                      >
                        {stat.num}
                      </div>
                      <div className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-500"} font-medium mt-1`}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" ref={skillsRef} className={`relative py-32 px-6 lg:px-8 ${darkMode ? "bg-slate-950" : "bg-white"} transition-opacity duration-700 ${skillsHasBeenInView ? "opacity-100" : "opacity-0"}`}>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <Palette className="text-cyan-400" size={28} />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Skills & Tools
              </h2>
              <Layers className="text-pink-400" size={28} />
            </div>
            <p className={`text-lg ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
              Mastering the tools that power modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                <div
                  className={`relative h-full ${darkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:border-slate-300"} backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-center space-y-3">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>
                      {skill.name}
                    </h3>
                    <div
                      className={`relative w-full h-1.5 ${darkMode ? "bg-white/10" : "bg-slate-200"} rounded-full overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div
                      className={`text-sm font-semibold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" ref={projectsRef} className={`relative py-32 px-6 lg:px-8 ${darkMode ? "bg-slate-950" : "bg-white"} transition-opacity duration-700 ${projectsHasBeenInView ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <Code className="text-cyan-400" size={28} />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <Sparkles className="text-yellow-400" size={28} />
            </div>
            <p className={`text-lg ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
              Showcasing my best work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div
                  className={`relative h-full ${darkMode ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-slate-50 border-slate-200 hover:border-slate-300"} backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-slate-950 via-slate-950/50" : "from-white via-white/50"} to-transparent`}
                    />
                  </div>

                  <div className="p-8 space-y-4">
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    >
                      {project.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"} leading-relaxed`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 ${darkMode ? "bg-white/5 border-white/10 text-gray-300" : "bg-white border-slate-200 text-slate-700"} backdrop-blur-xl border rounded-lg text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={`flex-1 py-3 bg-gradient-to-r ${project.gradient} rounded-xl font-semibold text-sm text-center hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-3 ${darkMode ? "border-white/20 hover:bg-white/5" : "border-slate-300 hover:bg-slate-100"} border rounded-xl font-semibold text-sm text-center hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${darkMode ? "text-white" : "text-slate-900"}`}
                      >
                        <Code size={16} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className={`relative py-32 px-6 lg:px-8 ${darkMode ? "bg-slate-950" : "bg-white"} transition-opacity duration-700 ${contactHasBeenInView ? "opacity-100" : "opacity-0"}`}>
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <Mail className="text-cyan-400" size={28} />
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <Sparkles className="text-yellow-400" size={28} />
            </div>
            <p className={`text-lg ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
              Ready to start your next project? Let's make it happen! 🚀
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div
              className={`relative ${darkMode ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"} backdrop-blur-xl rounded-3xl p-10 border`}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block mb-2 font-medium text-sm ${darkMode ? "text-gray-400" : "text-slate-700"}`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className={`w-full px-4 py-3 rounded-xl ${darkMode ? "bg-white/5 border-white/10 focus:border-white/30 text-white placeholder-gray-600" : "bg-white border-slate-300 focus:border-slate-400 text-slate-900 placeholder-slate-400"} border focus:outline-none transition-all text-sm`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block mb-2 font-medium text-sm ${darkMode ? "text-gray-400" : "text-slate-700"}`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      className={`w-full px-4 py-3 rounded-xl ${darkMode ? "bg-white/5 border-white/10 focus:border-white/30 text-white placeholder-gray-600" : "bg-white border-slate-300 focus:border-slate-400 text-slate-900 placeholder-slate-400"} border focus:outline-none transition-all text-sm`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block mb-2 font-medium text-sm ${darkMode ? "text-gray-400" : "text-slate-700"}`}>
                    Your Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your amazing project idea..."
                    required
                    className={`w-full px-4 py-3 rounded-xl ${darkMode ? "bg-white/5 border-white/10 focus:border-white/30 text-white placeholder-gray-600" : "bg-white border-slate-300 focus:border-slate-400 text-slate-900 placeholder-slate-400"} border focus:outline-none transition-all resize-none text-sm`}
                  ></textarea>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault()
                    alert("🚀 Message sent! I'll get back to you soon!")
                  }}
                  className="w-full py-4 bg-white text-slate-950 rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Send Message
                  <Sparkles size={18} />
                </button>
              </div>

              <div className={`mt-12 pt-10 ${darkMode ? "border-white/10" : "border-slate-200"} border-t`}>
                <p className={`text-center ${darkMode ? "text-gray-500" : "text-slate-500"} mb-6 text-sm font-medium`}>
                  Or connect with me on social media
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map(({ icon: Icon, gradient, href }, idx) => (
                    <a key={idx} href={href} target="_blank"
                        rel="noopener noreferrer" className="relative group">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity`}
                      />
                      <div
                        className={`relative p-4 bg-gradient-to-r ${gradient} rounded-xl hover:scale-110 transition-all duration-300 shadow-lg text-white`}
                      >
                        <Icon size={22} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={`relative py-12 px-6 ${darkMode ? "border-white/5" : "border-slate-200"} border-t`}>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ✨ Tolu
            </div>
            <p className={`${darkMode ? "text-gray-500" : "text-slate-500"} text-sm`}>
              Crafted with <span className="text-pink-500">❤️</span> and lots of{" "}
              <span className="text-yellow-400">☕</span> by Olufowobi Tolulope
            </p>
            <p className={`${darkMode ? "text-gray-600" : "text-slate-400"} text-xs`}>
              © 2024 All rights reserved. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

import profileImg from './assets/IMG_6926.jpg';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'journey', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Adhil
        </motion.div>
        <ul className="nav-menu">
          {['Home', 'About', 'Journey', 'Skills', 'Contact'].map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${item.toLowerCase()}`}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="highlight">Adhil</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="subtitle"
          >
            Cyber Security & Ethical Hacking Enthusiast
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-description"
          >
            Passionate about protecting digital assets and exploring the depths of cyber security. 
            Dedicated to ethical hacking, penetration testing, and building secure systems in an ever-evolving digital landscape.
          </motion.p>
          
          <div className="hero-buttons">
  <motion.button className="cta-button">
    Get In Touch
  </motion.button>

  <a
    href="https://github.com/adhil-pk"
    target="_blank"
    rel="noreferrer"
    className="cta-button"
  >
    GitHub Projects
  </a>

  <a
    href="/Adhil_CV.pdf"
    download
    className="cta-button"
  >
    Download CV
  </a>
</div>

        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="image-glow">
           <div className="profile-ring">
            <div className="profile-image">
             <img src={profileImg} alt="Adhil Profile" />
            </div>
          </div>
         </div>

        </motion.div>
      </div>
      
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <div className="header-line"></div>
        </motion.div>
        
        <motion.div
          className="glass-card about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0, 255, 255, 0.3)' }}
        >
          <p>
            I'm a dedicated cyber security professional with a passion for ethical hacking and digital defense. 
            My journey in the world of cyber security began with a curiosity about how systems work and how to protect them.
          </p>
          <p>
            With expertise in penetration testing, vulnerability assessment, and security analysis, I specialize in 
            identifying and mitigating potential threats before they can be exploited. I'm constantly exploring new 
            technologies, participating in CTF challenges, and staying ahead of emerging security trends.
          </p>
          <p>
            My approach combines technical excellence with creative problem-solving, always striving to build 
            more secure and resilient systems. Whether it's analyzing network traffic, reverse engineering malware, 
            or securing web applications, I'm committed to making the digital world a safer place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Journey Section
const Journey = () => {
  const journeyItems = [
    {
      year: '2023 - Present',
      title: 'Cyber Security Studies',
      description: 'Learning and practicing penetration testing fundamentals, malware basics, and security concepts. Actively improving skills through labs, CTF challenges, and hands-on security research.',
      icon: '🎓'
    },
    {
      year: '2022 - 2023',
      title: 'Network Security & Ethical Hacking',
      description: 'Completed structured training in network security, covering firewall concepts, intrusion detection systems, and ethical hacking fundamentals with hands-on lab practice.',
      icon: '🔐'
    },
    {
      year: '2021 - 2022',
      title: 'Linux & Web Security Fundamentals',
      description: 'Trained in network security fundamentals, including firewall configuration basics, intrusion detection concepts, and ethical hacking methodologies through practical labs.',
      icon: '💻'
    },
    {
      year: '2020 - 2021',
      title: 'Cyber Security Foundation',
      description: 'Started the journey into cyber security with foundational courses in networking, cryptography, and security principles.',
      icon: '🚀'
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Journey</h2>
          <div className="header-line"></div>
        </motion.div>
        
        <div className="timeline">
          {journeyItems.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="glass-card journey-card"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(0, 255, 255, 0.3)' }}
              >
                <div className="journey-icon">{item.icon}</div>
                <div className="journey-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skills = [
    { name: 'Ethical Hacking', level: 70 },
    { name: 'Cyber Security', level: 60 },
    { name: 'Linux Administration', level: 78 },
    { name: 'Web Vulnerability Testing (Burp Suite)', level: 65 },
    { name: 'AI-based front-end Design', level: 85 },
    { name: 'Red Team Techniques', level: 65 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Expertise</h2>
          <div className="header-line"></div>
        </motion.div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0, 255, 255, 0.3)' }}
            >
              <h3>{skill.name}</h3>
              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    access_key: "736e23c6-a425-4d5e-8b8d-28a6ce3c81d8", // 🔴 your key
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    alert("Something went wrong!");
  }
};


  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <div className="header-line"></div>
        </motion.div>
        
        <motion.div
          className="glass-card contact-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {submitted ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">✓</div>
              <p>Thank you! Your message has been sent successfully.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="glow-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="glow-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  className="glow-input"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Contact />
      
      <footer className="footer">
        <p>&copy; 2026 Adhil. All rights reserved.</p>
        <p className="footer-tagline">Securing the Digital Future</p>
      </footer>
    </div>
  );
};

export default App;

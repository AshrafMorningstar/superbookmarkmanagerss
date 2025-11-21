export function generatePortfolio() {
    const files = new Map();

    // HTML file
    files['index.html'] = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<body>
    <header>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h1>Welcome to My Portfolio</h1>
                <p>Full Stack Developer | Open Source Enthusiast</p>
            </div>
        </section>

        <section id="about" class="about">
            <h2>About Me</h2>
            <div class="about-content">
                <img src="profile-placeholder.jpg" alt="Profile Picture">
                <div class="about-text">
                    <p>Hi! I'm a passionate developer with experience in full-stack web development.
                       I love creating elegant solutions to complex problems.</p>
                    <div class="skills">
                        <h3>Skills</h3>
                        <ul>
                            <li>JavaScript/TypeScript</li>
                            <li>React/Node.js</li>
                            <li>Python/Django</li>
                            <li>SQL/NoSQL</li>
                            <li>DevOps/CI-CD</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="projects">
            <h2>Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <img src="project1-placeholder.jpg" alt="Project 1">
                    <h3>Project 1</h3>
                    <p>A full-stack web application built with React and Node.js</p>
                    <a href="#" class="button">View Project</a>
                </div>
                <div class="project-card">
                    <img src="project2-placeholder.jpg" alt="Project 2">
                    <h3>Project 2</h3>
                    <p>Mobile-first responsive website with modern CSS features</p>
                    <a href="#" class="button">View Project</a>
                </div>
                <div class="project-card">
                    <img src="project3-placeholder.jpg" alt="Project 3">
                    <h3>Project 3</h3>
                    <p>Python-based data analysis and visualization tool</p>
                    <a href="#" class="button">View Project</a>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <h2>Contact Me</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="button">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <div class="social-links">
            <a href="https://github.com/AshrafMorningstar" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
        <p>&copy; 2025 Portfolio. Created by Ashraf Morningstar</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>`;

    // CSS file
    files['styles.css'] = `/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Navigation */
header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1000;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
}

nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
}

nav a:hover {
    color: #0066cc;
}

/* Hero section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* Sections */
section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

/* About section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
}

.about-content img {
    width: 100%;
    border-radius: 50%;
}

.skills ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style: none;
    margin-top: 1rem;
}

.skills li {
    background: #f0f0f0;
    padding: 0.5rem 1rem;
    border-radius: 20px;
}

/* Projects section */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-card h3 {
    padding: 1rem;
}

.project-card p {
    padding: 0 1rem 1rem;
}

/* Contact section */
.contact form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #0066cc;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

.button:hover {
    background: #0052a3;
}

/* Footer */
footer {
    background: #333;
    color: white;
    padding: 2rem;
    text-align: center;
}

.social-links {
    margin-bottom: 1rem;
}

.social-links a {
    color: white;
    font-size: 1.5rem;
    margin: 0 0.5rem;
}

/* Responsive design */
@media (max-width: 768px) {
    .about-content {
        grid-template-columns: 1fr;
    }

    .about-content img {
        max-width: 300px;
        margin: 0 auto;
    }
}`;

    // JavaScript file
    files['script.js'] = `// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Log form data (replace with actual form submission)
    console.log('Form submitted:', data);
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('Message sent successfully!');
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});`;

    // README
    files['README.md'] = `# Portfolio Website

A modern, responsive portfolio website template.

## Features

- Responsive design
- Smooth scroll navigation
- Project showcase
- Contact form
- Skills section
- Social media links

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome icons

## Usage

1. Replace placeholder images with your own
2. Update content in index.html
3. Customize styles in styles.css
4. Modify form handling in script.js

## Credits

Generated by GitHub Activity Bot
Created by: Ashraf Morningstar
GitHub: https://github.com/AshrafMorningstar`;

    return files;
}
import React, { useState } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [expandedCGPA, setExpandedCGPA] = useState(false);

  // Sample data - Replace with your actual information
  const personalInfo = {
    name: "Krish Teckchandani",
    title: "B.Tech Computer Science Student at IIT Jodhpur",
    email: "krish2005tech@gmail.com",
    phone: "+91 9667164576",
    location: "Delhi, India",
    linkedin: "https://linkedin.com/in/krish-teckchandani",
    github: "https://github.com/krish2005tech",
   about: "Software developer with strong foundations in computer science and hands-on experience in building secure, scalable systems. Skilled across full-stack development, machine learning pipelines, and cloud-native engineering. Passionate about solving complex problems, optimizing performance, and applying software engineering best practices."
  };

 const skills = [
  "C++", "Python", "JavaScript", "Golang", "SQL",
  "React", "Node.js", "Flask", "FastAPI", "Django",
  "MongoDB", "Redis", "Docker", "Kubernetes", "Git/GitHub","Kafka",
  "TensorFlow", "PyTorch", "Pandas", "NumPy",
  "AWS", "Google Cloud Platform", "Linux", "Computer Vision","Postman"
];

const projects = [
  {
    name: "VoidShare: Encrypted Decentralized P2P File Sharing System",
    image: "/images/voidshare.jpg",
    description: [
      "Designed a secure peer-to-peer file sharing system using WebRTC and modern cryptographic standards",
      "Implemented AES-256, ECC, and RSA for end-to-end confidentiality and integrity",
      "Built resilient chunk-based transfers with real-time progress, session cleanup, and fault tolerance"
    ],
    github: "https://github.com/Krish2005tech/VoidShare"
  },
  {
    name: "Skribix: Hand-drawn Sketch Recognition Pipeline",
    image: "/images/Skribix.jpg",
    description: [
      "Engineered an ML pipeline using classical CV (HOG, BoVW, edge detection) and CNN architectures",
      "Achieved 81% accuracy using PCA + SVM on processed edge features",
      "Built an end-to-end workflow reducing manual intervention by 80% and improving operational speed"
    ],
    github: "https://github.com/Krish2005tech/Skribix"
  },
  // {
  //   name: "Multi-Gas Sensor Array Visualization App",
  //   image: "https://images.unsplash.com/photo-1581093448798-5b9a4d3c1f5d?w=400&h=250&fit=crop",
  //   description: [
  //     "Developed a real-time environmental monitoring app for ESP32 and Raspberry Pi hardware platforms",
  //     "Integrated Golang automation scripts achieving 95% accurate peak detection in sensor CSV files",
  //     "Implemented Google Drive API sync for continuous cloud-based data updates"
  //   ],
  //   github: "https://github.com/krish2005tech"
  // },
  {
    name: "Ignus’25 Web Development",
    image: "/images/ignus.jpg",
    description: [
      "Contributed to the official Ignus’25 website, enhancing accessibility and performance for 10,000+ users",
      "Improved responsiveness and reduced load time by 34%",
      "Implemented optimizations using React.js, Next.js, Tailwind CSS, and Django"
    ],
    github: "https://ignus-25.vercel.app/"
  }
];

const certificates = [
  { name: "AWS Cloud Essentials", url: "https://www.credly.com/badges/a16e21c7-a79a-4369-8740-a9057c9fd43d/linked_in_profile" },
  { name: "Google Cloud CyberSecurity Certificate", url: "https://www.credly.com/badges/08077681-ff00-4ecf-a0ad-0318f7c371ad/linked_in_profile" },
  {name:"Introduction to Containers w/ Docker, Kubernetes & OpenShift",url:"https://www.coursera.org/account/accomplishments/verify/H7ZO5QMABBS4"},
  {name:"Cisco: Introduction to Cybersecurity",url:"https://www.credly.com/badges/e877100d-cf9f-47b2-86d4-d31c4469d34d/linked_in_profile"},
  {name:"Google Cloud Computing Foundations Certificate",url:"https://www.credly.com/badges/fdf08908-e8a7-4c03-ad69-930dacb93eb8/linked_in_profile"},
  {name:"Oracle Cloud Infrastructure 2025 Certified Foundations Associate",url:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=FCE6C1341DBA5FC7EE0D493CEAFC0FED530C79867E2821965A9C2CAD577A4B37"},
  {name:"Introduction to FinOps",url:"https://verify.skilljar.com/c/zpspjuxaoqmc"},
];

const positions = [
  { title: "Vice President - Board of Academic Interaction, IITJ", period: "2025 - Present" },
  {title:"Core Member - DevLub Labs, IIT Jodhpur", period: "2024 - Present"},
  {title:"Festival Cheif - Varchas 2025",period:"2025"},
  { title: "Support Team Member - Placement & Training Cell, IIT Jodhpur", period: "2024 - 2025" },
  { title: "Assistant Head - Web Development, IGNUS’25", period: "2024 - 2025" },
  { title: "Assistant Head - Events, Sandstone Summit 4.0", period: "2024" }
];

const courses = [
  "Data Structures and Algorithms",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
  "Database Management Systems",
  "Deep Learning",
  "Cyber Security",
  "Computer Vision",
  "Computer Architecture",
  "Design and Analysis of Algorithms",
  "Principles of Programming Languages",
  "Pattern Recognition and Machine Learning",
  "Probability, Statistics and Stochastic Processes",
  "Introduction to Computer Science",
  "Linear Algebra",
  "Multivariable Calculus"
];
  const education = {
    class10: { board: "CBSE", percentage: "99.3%", year: "2021" },
    class12: { board: "CBSE", percentage: "96.6%", year: "2023" },
    college: {
      name: "IIT Jodhpur",
      degree: "B.Tech Computer Science",
      cgpa: "9.69",
      year: "2023-Present",
     subjects : [
  { name: "Data Structures and Algorithms", grade: "A" },
  { name: "Software Engineering", grade: "A-" },
  // { name: "Computer Networks", grade: "A" },
  { name: "Operating Systems", grade: "A" },
  { name: "Database Management Systems", grade: "A" },
  // { name: "Deep Learning", grade: "A" },
  // { name: "Cyber Security", grade: "A" },
  // { name: "Computer Vision", grade: "A" },
  { name: "Computer Architecture", grade: "A" },
  { name: "Design and Analysis of Algorithms", grade: "A" },
  { name: "Principles of Programming Languages", grade: "B" },
  { name: "Pattern Recognition and Machine Learning", grade: "A*" },
  { name: "Probability, Statistics and Stochastic Processes", grade: "A" },
  { name: "Introduction to Computer Science", grade: "A" },
  { name: "Linear Algebra", grade: "A" },
  { name: "Multivariable Calculus", grade: "A" }
]
    }
  };

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const cardClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${cardClass} shadow-lg sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
      <div className="flex-1 w-full sm:w-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{personalInfo.name}</h1>
        <p className={`text-base sm:text-xl mb-2 sm:mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {personalInfo.title}
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="sm:w-4 sm:h-4"/>
                  <a href={`mailto:${personalInfo.email}`}><span>{personalInfo.email}</span></a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="sm:w-4 sm:h-4" />
                  <a href={`tel:${personalInfo.phone}`}><span>{personalInfo.phone}</span></a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="sm:w-4 sm:h-4"/>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
                <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base text-center"
              >
                Hire Me
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-lg ${hoverClass} transition-colors`}
              >
                {darkMode ? <Sun size={24} className="sm:w-6 sm:h-6"/> : <Moon size={24} className="sm:w-6 sm:h-6"/>}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {personalInfo.about}
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`px-6 py-3 rounded-full ${cardClass} ${hoverClass} transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg`}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => window.open(project.github, '_blank')}
                className={`${cardClass} rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex flex-col md:flex-row">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full md:w-80 h-64 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                      {/* <Github size={20} /> */}
                       <ExternalLink size={20} />
                    </div>
                    <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="space-y-3">
            {certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 ${cardClass} rounded-lg ${hoverClass} transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.name}</span>
                  <ExternalLink size={18} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Positions of Responsibility */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Positions of Responsibility</h2>
          <div className="space-y-3">
            {positions.map((pos, idx) => (
              <div key={idx} className={`p-4 ${cardClass} rounded-lg`}>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{pos.title}</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {pos.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Important Courses Taken</h2>
          <div className="flex flex-wrap gap-3">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`px-6 py-3 rounded-full ${cardClass} ${hoverClass} transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg`}
              >
                {course}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className={`${cardClass} rounded-lg shadow-lg overflow-hidden`}>
            <table className="w-full">
              <thead className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <tr>
                  <th className="px-6 py-4 text-left">Level</th>
                  <th className="px-6 py-4 text-left">Institution/Board</th>
                  <th className="px-6 py-4 text-left">Score</th>
                  <th className="px-6 py-4 text-left">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="px-6 py-4 font-semibold">{education.college.degree}</td>
                  <td className="px-6 py-4">{education.college.name}</td>
                  <td className="px-6 py-4">{education.college.year}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setExpandedCGPA(!expandedCGPA)}
                      className={`px-4 py-2 rounded-lg ${hoverClass} transition-colors font-semibold`}
                    >
                      CGPA: {education.college.cgpa} {expandedCGPA ? '▲' : '▼'}
                    </button>
                  </td>
                </tr>
                <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="px-6 py-4 font-semibold">Class 12th</td>
                  <td className="px-6 py-4">{education.class12.board}</td>
                  <td className="px-6 py-4">{education.class12.percentage}</td>
                  <td className="px-6 py-4">{education.class12.year}</td>
                </tr>
                <tr className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className="px-6 py-4 font-semibold">Class 10th</td>
                  <td className="px-6 py-4">{education.class10.board}</td>
                  <td className="px-6 py-4">{education.class10.percentage}</td>
                  <td className="px-6 py-4">{education.class10.year}</td>
                </tr>
              </tbody>
            </table>
            {expandedCGPA && (
              <div className={`p-6 border-t ${darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
                <h4 className="font-bold text-lg mb-4">Subject-wise Grades</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {education.college.subjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between p-3 ${cardClass} rounded-lg`}
                    >
                      <span>{subject.name}</span>
                      <span className="font-bold">{subject.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${cardClass} shadow-lg mt-16`}>
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg ${hoverClass} transition-colors`}
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg ${hoverClass} transition-colors`}
            >
              <Linkedin size={24} />
            </a>
          </div>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
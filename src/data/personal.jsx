import { FaLinkedin, FaGithub, FaTwitter, FaResearchgate } from "react-icons/fa"; // Import social icons


const Personal = {
  name: "Kazi Md. Tanvir Anzum",
  cv_link: "https://www.google.com",
  designation: "Lecturer",
  department: "Industrial Engineering & Management",
  institution: "Khulna University of Engineering & Technology",
  city: "Khulna",
  country: "Bangladesh",
  email1:"anzumtanvir052@gmail.com",
  email2:"",
  phone: "+880 123 456 7890",
  office: "Academic Building D, Room 102, KUET, Khulna",
  address: " Address is here",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/professor", icon: <FaLinkedin className="w-6 h-6 text-white hover:text-[#8a36fe]" /> },
    { name: "GitHub", url: "https://github.com/professor", icon: <FaGithub className="w-6 h-6 text-white hover:text-[#8a36fe]" /> },
    { name: "Twitter", url: "https://twitter.com/professor", icon: <FaTwitter className="w-6 h-6 text-white hover:text-[#8a36fe]" /> },
    { name: "ResearchGate", url: "https://www.researchgate.net/profile/Professor", icon: <FaResearchgate className="w-6 h-6 text-white hover:text-[#8a36fe]" /> },
  ]

}

export default Personal;
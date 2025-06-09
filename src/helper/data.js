import Java from "../assets/image/Blog/java-thumbnail.jpg";
import GO from "../assets/image/Blog/go-programming-language5.png";
import Golang from "../assets/image/Blog/go-programming-language6.png";
import test from "../assets/image/portforio/pikaso-composition.jpg";

export const blog__Post = [
  {
    id: 1,
    image: Java,
    lengthComments: 5,
    date: "June 15, 2023",
    title: "How to Improve Your Website's User Experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.",
  },
  {
    id: 2,
    lengthComments: 8,
    image: GO,
    date: "May 15, 2023",
    title: "How to Improve Your Website's User Experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.",
  },
  {
    id: 3,
    lengthComments: 10,
    date: "October 28, 2024",
    image: Golang,
    title: "How to Improve Your Website's User Experience",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.",
  },
];

export const data_Information = {
  education: [
    {
      id: 1,
      years: "2023 - 2025",
      education: "Master in Computer Science",
      univesity: "Harvard University",
    },
  ],
  experience: [
    {
      id: 1,
      persent: "2025 Present",
      skils: "React.js developer",
      sourcePeactic: "Apadana",
    },
    {
      id: 2,
      persent: "2024 Present",
      skils: "Java Script developer",
      sourcePeactic: "Jonas",
    },
  ],
  skills: [
    { id: 1, skill: "HTML & CSS", graid: 90 },
    { id: 2, skill: "Tailwind CSS", graid: 80 },
    { id: 3, skill: "Bootstrap", graid: 50 },
    { id: 4, skill: "Java Script", graid: 60 },
    { id: 5, skill: "Git&Github", graid: 55 },
    { id: 6, skill: "React.js", graid: 40 },
    { id: 7, skill: "JQuery", graid: 40 },
    { id: 8, skill: "Adobe Photoshop", graid: 75 },
    { id: 9, skill: "Adobe Illustrator", graid: 65 },
  ],
  language: [
    { id: 1, skill: "reading", graid: 60 },
    { id: 2, skill: "speaking", graid: 50 },
    { id: 3, skill: "listening", graid: 55 },
    { id: 4, skill: "grammar", graid: 70 },
  ],
};
export const portForioData = [
  {
    id: 1,
    title: "Creative Design",
    category: "Design",
    description: "UI/UX Design",
    Image: test,
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "Design",
    description: "UI/UX Design",
    Image: test,
  },
  {
    id: 3,
    title: "Web Application",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 4,
    title: "E-commerce Website",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 5,
    title: "Brand Identity",
    category: "Branding",
    description: "Branding",
    Image: test,
  },
  {
    id: 6,
    title: "Corporate Branding",
    category: "Branding",
    description: "Branding",
    Image: test,
  },
];
export const navItems = [
  { id: "home", label: "Home", offset: -150 },
  { id: "about", label: "About", offset: -100 },
  { id: "services", label: "Services", offset: -100 },
  { id: "portfolio", label: "Portfolio", offset: -100 },
  { id: "testimonials", label: "Testimonials", offset: -100 },
  { id: "blog", label: "Blog", offset: -150 },
  { id: "contact", label: "Contact", offset: -150 },
];
// Static list of testimonial data
export const testimonials = [
  {
    image: "https://www.course-api.com/images/people/person-1.jpeg",
    name: "Susan Smith",
    revioe:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
    education: "CEO, Tech Solutions Inc.",
  },
  {
    image: "https://www.course-api.com/images/people/person-2.jpeg",
    name: "Anna Johnson",
    revioe:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
    education: "Marketing Director, Brandify Co.",
  },
  {
    image: "https://www.course-api.com/images/people/person-4.jpeg",
    name: "Peter Jones",
    revioe:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
    education: "Lead Developer, CodeCraft LLC",
  },
];

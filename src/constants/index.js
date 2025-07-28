import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "kali linux", icon: c },
  { title: "nessus", icon: cpp },
  { title: "SIEM", icon: python },
  { title: "pentesting", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Member in NSRC",
    company_name: "Nataional Cybersecuirty Research Councile",
    icon: eduskill,
    iconBg: "#161329",
    date: "Jan 2025",
    points: [
      "Providing Expert Input on Cyber Threats  Share knowledge and updates on the latest cyber threats, attacks, and defense strategies to support the councils initiatives.",
      "Supporting Awareness and Research Efforts Contribute to cybersecurity awareness programs and assist in research activities that help protect national digital infrastructure.",
    ],
  },
  {
    title: "cybersecurity Analyst",
    company_name: "Mallareddy university",
    icon: eduskill,
    iconBg: "#161329",
    date: "Jan 2024",
    points: [
      "Cybersecurity Expertise and Training: Conducting hands-on workshops and training sessions to educate students on advanced cybersecurity tools and techniques, including penetration testing, incident response, and ethical hacking practices.",
      "Mentorship and Curriculum Development: Guiding students in developing practical skills through interactive labs and projects while enhancing the university's cybersecurity curriculum to align with industry standards.",
    ],
  },
  {
    title: "cybersecurity Traine",
    company_name: "Skiligence-Be futture Relevant",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2021",
    points: [
      "Workshop Conduction and Industry Outreach: Organized and led impactful cybersecurity workshops for premier institutions, including IITs and VNIT Nagpur, delivering hands-on training in ethical hacking, network security, and advanced cybersecurity tools.",
      "Skill Development and Corporate Training: Provided tailored cybersecurity training programs to companies, equipping professionals with practical knowledge in penetration testing, threat analysis, and incident response.",
      "Extensive Workshop Experience: Conducted numerous workshops across various colleges and universities, focusing on interactive, practical learning to bridge the gap between theoretical knowledge and real-world cybersecurity challenges.",
    ],
  },
];

export const projects = [
  {
    name: "Siem-project-ibm",
    description:
      "Application-Security-Analyzer-Using-SIEM-Tool",
    tags: [
      { name: "IBM", color: "blue-text-gradient" },
      { name: "kali", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
      { name: "WIN", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/uduthashashidhar/Siem-project-ibm",
  },
  {
    name: "honeypot",
    description:
      "A honeypot is a security mechanism designed to act as a decoy system, intentionally set up to attract cyber attackers, gather intelligence on their methods, and detect potential threats.",
    tags: [
      { name: "SHELL", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/uduthashashidhar/honeypot1",
  },
  {
    name: "p4wnpa1",
    description:
      "P4wnP1 A.L.O.A. by MaMe82 is a framework which turns a Rapsberry Pi Zero W into a flexible, low-cost platform for pentesting, red teaming and physical engagements ... or into A Little Offensive Appliance",
    tags: [
      { name: "HID Script", color: "blue-text-gradient" },
      { name: "CLI", color: "green-text-gradient" },
      { name: "kali", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/uduthashashidhar/p4wnpa1",
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string[];
  features: string[];
  links: {
    live?: string;
    github?: string;
  };
  status: "deployed" | "prototype" | "active";
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "student-automated-attendance",
    title: "Student Automated Attendance System",
    tagline: "NFC + Face Verification for zero-proxy attendance",
    description:
      "An attendance system that combines NFC card authentication with real-time face verification to reduce manual logging errors.",
    longDescription:
      "Each student taps an NFC card and is verified through a live camera check using OpenCV before attendance is recorded, helping prevent proxy entries. Records are handled by a Node.js backend for easy tracking. The system combines hardware-level NFC authentication with computer vision to create a dual-factor identity check, making proxy attendance practically impossible.",
    tech: ["Python", "OpenCV", "NFC Hardware", "Node.js"],
    category: ["IoT", "AI/ML", "Backend"],
    features: [
      "NFC card tap authentication",
      "Real-time face verification via OpenCV",
      "Proxy-entry prevention",
      "Node.js backend for record tracking",
      "Live camera integration",
    ],
    links: {},
    status: "prototype",
    featured: true,
  },
  {
    slug: "gesture-controlled-vehicle",
    title: "Gesture-Controlled Assistive Vehicle Interface",
    tagline: "Palm gestures → real-time vehicle control for visually impaired users",
    description:
      "An assistive mobility prototype with an interactive test simulation that translates directional palm gestures into real-time vehicle controls for visually impaired users.",
    longDescription:
      "Embedded sensors capture the direction of the palm, and the simulation allows the control logic to be tested safely before it is used on the vehicle. Developed as 'Sight Into Touch' at the 30-Hour Hackathon at SNS College of Technology, Coimbatore. The system aims to provide independent mobility solutions for visually impaired users through intuitive gesture-based control.",
    tech: ["Python", "Embedded Sensors", "Simulation Engine"],
    category: ["IoT", "AI/ML", "Assistive Tech"],
    features: [
      "Directional palm gesture recognition",
      "Real-time vehicle control mapping",
      "Safe simulation testing environment",
      "Embedded sensor integration",
      "Assistive technology for visually impaired",
    ],
    links: {},
    status: "prototype",
    featured: true,
  },
  {
    slug: "elite-hackers-portfolio",
    title: "Elite Hackers Team Portfolio",
    tagline: "Public platform showcasing cross-functional hardware & software projects",
    description:
      "A responsive public web platform to showcase the team's cross-functional hardware and software projects, published on the team's own domain.",
    longDescription:
      "Built with Angular on the front end and a Node.js/Express.js backend with MongoDB for content storage. Published on theelitehackers.com for a professional online presence. The platform highlights the team's interdisciplinary projects spanning hardware hacking, embedded systems, and software development.",
    tech: ["Angular", "Node.js", "Express.js", "MongoDB"],
    category: ["Full-Stack", "Frontend", "Backend"],
    features: [
      "Responsive Angular frontend",
      "Node.js/Express.js REST API backend",
      "MongoDB content storage",
      "Custom domain deployment",
      "Project showcase with team profiles",
    ],
    links: {
      live: "https://theelitehackers.com",
    },
    status: "deployed",
    featured: true,
  },
  {
    slug: "certivaultid",
    title: "CertiVaultID",
    tagline: "Digital Certificate Verification Platform with shareable links",
    description:
      "A MERN-based certificate verification platform with unique shareable links and secure document storage.",
    longDescription:
      "Allows certificates to be stored securely and verified instantly by employers or institutions through a single link, removing the need for manual verification. Built on the MERN stack, the platform generates unique shareable verification links for each certificate, enabling instant authenticity checks without requiring the certificate holder to be present.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: ["Full-Stack", "MERN", "Security"],
    features: [
      "Secure certificate storage",
      "Unique shareable verification links",
      "Instant employer/institution verification",
      "MERN stack architecture",
      "No manual verification required",
    ],
    links: {},
    status: "active",
    featured: true,
  },
  {
    slug: "smart-robot-healthcare",
    title: "Smart Robot Healthcare Companion",
    tagline: "Robotic companion reducing caregiver workload via IoT automation",
    description:
      "A robotic companion that combines embedded sensing with automated assistance to support everyday patient care.",
    longDescription:
      "Sensors monitor the surroundings while IoT connectivity enables automated assistance, aiming to reduce the routine workload of caregivers. The robot is designed to handle repetitive care tasks autonomously, freeing caregivers to focus on higher-level patient interactions. Embedded sensing allows the robot to respond dynamically to the patient's environment.",
    tech: ["Robotics", "Embedded Systems", "IoT"],
    category: ["IoT", "Robotics", "Healthcare"],
    features: [
      "Environmental monitoring via embedded sensors",
      "IoT-enabled automated assistance",
      "Caregiver workload reduction",
      "Real-time surroundings awareness",
      "Automated patient care routines",
    ],
    links: {},
    status: "prototype",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  "Full-Stack",
  "MERN",
  "IoT",
  "AI/ML",
  "Frontend",
  "Backend",
  "Robotics",
  "Healthcare",
  "Assistive Tech",
  "Security",
];

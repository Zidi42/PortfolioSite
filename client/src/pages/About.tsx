import {
  User,
  Code,
  Camera,
  BookOpen,
  Plane,
  GraduationCap,
  Briefcase,
  FileDown,
  Layout,
  Database,
  Wrench,
  Users,
  Smartphone,
  PenTool,
  Brain,
  Cloud,
  Server,
  Globe,
  GitBranch
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePicture from "@assets/zahid.jpg";
import cvFile from "@assets/MuhammadZahidCV.pdf";

const About = () => {
  // Skills list — each one in its own card
  const skills = [
    { icon: Layout, title: "React.js / Next.js" },
    { icon: Layout, title: "HTML / CSS / JavaScript (ES6+)" },
    { icon: Layout, title: "Tailwind CSS" },
    { icon: Layout, title: "Responsive Design" },
    { icon: Database, title: "Node.js / Express.js" },
    { icon: Database, title: "MongoDB" },
    { icon: Wrench, title: "Git / GitHub" },
    { icon: Wrench, title: "Figma / UI Prototyping" },
    { icon: Users, title: "Team Leadership" },
    { icon: Users, title: "Problem-Solving" },
    { icon: Smartphone, title: "React Native" },
    { icon: Smartphone, title: "Android Studio" },
    { icon: PenTool, title: "Prototyping & Requirement Gathering" },
    { icon: Brain, title: "AI Basics & Development Tools" },
    { icon: Server, title: "Backend APIs with Flask" },
    { icon: Globe, title: "International Client Communication" }
  ];

  // Experience list with icons
  const experiences = [
    { icon: Code, text: "Frontend Developer & Mobile App Developer (Student Projects)" },
    { icon: Smartphone, text: "Cross-platform mobile apps (React Native + Firebase backend)" },
    { icon: Server, text: "React.js apps with Flask (Python) APIs" },
    { icon: Globe, text: "Location/address detection integration" },
    { icon: Wrench, text: "Wallet system apps with deposit/withdrawal/reward ads" },
    { icon: Brain, text: "Final Year Project – “Elevate Social” (AI-powered post generator)" },
    { icon: Briefcase, text: "Ghamkol Sharif App, E-commerce Affiliate Site, Static IT Website" },
    { icon: Camera, text: "AI Video Creator App for YouTube & TikTok" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">About Me</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get to know the person behind the code and the passion that drives my work.
            </p>
          </div>

          {/* Profile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="w-full max-w-md mx-auto h-80 overflow-hidden rounded-2xl border border-gray-700 shadow-lg shadow-blue-900/50">
                <img
                  src={profilePicture}
                  alt="Muhammad Zahid"
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Hello, I'm Muhammad Zahid</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference.
                </p>
                <p>
                  I work with clients in Pakistan and international markets (including Freelancer), delivering high-quality applications that meet global standards.
                </p>
              </div>
            </div>
          </div>

          {/* CV Download */}
          <Card className="bg-gray-800 border-gray-700 text-center mb-8">
            <CardContent className="pt-8 pb-10">
              <h2 className="text-3xl font-bold text-white mb-6">Let’s Build Something Great Together</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Whether you’re a company looking to boost productivity, a startup aiming to launch your next big idea, 
                or a client seeking a dependable developer who delivers beyond expectations — I’m ready to make it happen.
              </p>
              <FileDown className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Download My CV</h3>
              <a
                href={cvFile}
                download="Muhammad_Zahid_CV.pdf"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium"
              >
                Download CV
              </a>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-green-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">My Education</h2>
              </div>
              <ul className="text-gray-300 space-y-3 text-lg">
                <li>🎓 FSc Pre-Engineering – Kips College, Gujranwala, Punjab, Pakistan (2018-20)</li>
                <li>🎓 Bachelors in Software Engineering – GIFT University, Gujranwala, Punjab, Pakistan (2021-25)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Skills Learned */}
          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Skills Learned</h2>
              <p className="text-gray-300 text-center mb-6">
                Focus: Frontend Development, Mobile Development, AI Concepts, Software Project Management
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map(({ icon: Icon, title }, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-gray-600 rounded-lg hover:border-gray-500 transition-colors flex flex-col items-start"
                  >
                    <Icon className="w-8 h-8 text-green-400 mb-3" />
                    <h4 className="font-semibold text-white">{title}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience & Projects */}
          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 text-blue-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Experience & Projects</h2>
              </div>
              <ul className="text-gray-300 space-y-4">
                {experiences.map(({ icon: Icon, text }, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-yellow-400" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </section>
    </main>
  );
};

export default About;

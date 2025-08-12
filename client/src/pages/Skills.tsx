import { Settings, Monitor, Server, Wrench, Lightbulb } from "lucide-react";
import { FaReact, FaJs, FaCss3Alt, FaVuejs, FaHtml5, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiGraphql, SiPostgresql, SiMongodb } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AdSpace from "@/components/AdSpace";

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", level: 95, icon: FaReact, color: "text-blue-500" },
    { name: "JavaScript/ES6+", level: 90, icon: FaJs, color: "text-yellow-500" },
    { name: "CSS3/Tailwind CSS", level: 88, icon: FaCss3Alt, color: "text-blue-600" },
    { name: "Vue.js", level: 82, icon: FaVuejs, color: "text-green-500" },
    { name: "HTML5", level: 92, icon: FaHtml5, color: "text-orange-500" }
  ];

  const backendSkills = [
    { name: "Node.js", level: 87, icon: FaNodeJs, color: "text-green-600" },
    { name: "Python", level: 85, icon: FaPython, color: "text-blue-500" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "text-green-700" },
    { name: "PostgreSQL", level: 78, icon: SiPostgresql, color: "text-blue-700" },
    { name: "GraphQL", level: 75, icon: SiGraphql, color: "text-pink-600" }
  ];

  const toolsSkills = [
    { name: "Git/GitHub", level: 93, icon: FaGitAlt, color: "text-red-500" },
    { name: "Docker", level: 75, icon: FaDocker, color: "text-blue-600" },
    { name: "AWS", level: 70, icon: FaAws, color: "text-orange-500" },
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "text-blue-500" },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "text-teal-500" }
  ];

  const softSkills = [
    { name: "Communication", level: 90, color: "text-blue-500" },
    { name: "Team Leadership", level: 85, color: "text-green-500" },
    { name: "Problem Solving", level: 92, color: "text-red-500" },
    { name: "Time Management", level: 88, color: "text-orange-500" },
    { name: "Project Management", level: 82, color: "text-purple-500" }
  ];

  const SkillBar = ({ name, level, icon: Icon, color }: any) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center font-medium text-slate-800 dark:text-slate-200">
          {Icon && <Icon className={`w-5 h-5 mr-2 ${color}`} />}
          {name}
        </span>
        <span className="text-sm text-slate-600 dark:text-slate-400">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
        <div 
          className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <main className="flex">
      {/* Sidebar Ad */}
      <div className="hidden lg:block w-64 p-4">
        <div className="sticky top-24">
          <AdSpace type="sidebar" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-5xl mx-auto">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Settings className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">My Skills</h1>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Frontend Skills */}
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-secondary dark:text-white">
                  <Monitor className="w-8 h-8 text-primary mr-3" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-secondary dark:text-white">
                  <Server className="w-8 h-8 text-green-500 mr-3" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                {backendSkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-secondary dark:text-white">
                  <Wrench className="w-8 h-8 text-accent mr-3" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                {toolsSkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="border border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-secondary dark:text-white">
                  <Lightbulb className="w-8 h-8 text-purple-500 mr-3" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                {softSkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;

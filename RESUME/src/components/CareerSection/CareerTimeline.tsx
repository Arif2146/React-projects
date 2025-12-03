import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "2025 – Present",
      title: "B.TECH in Computer Science & Engineering",
      subtitle: "Ramkrishna Mahato Govt. Engineering College,Purulia",
      description:
        "I’m currently pursuing my B.Tech in Computer Science and Engineering at RMGEC 🎓💻. As a first-year student, I’m building a strong foundation in core programming concepts 🧩, software development 🧑‍💻, and emerging technologies 🤖🌐. I’m driven by curiosity 🔍 and passionate about understanding how things work behind the scenes in the digital world ⚙️✨.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
{
  year: "2024 – 2025",
  title: "Drop Year for WBJEE & Skill Development",
  subtitle: "Focused on Competitive Exam + Coding Journey",
  description:
    "I dedicated this year to preparing for WBJEE 📚🚀 while also leveling up my development skills. During this time, I improved my coding knowledge 💻, explored full stack development 🌐, and started working on real-world projects to sharpen practical experience 🛠️🔥.",
  icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
},
{
  year: "2024",
  title: "Higher Secondary Education",
  subtitle: "Mal Adarsha Bidya Bhaban School",
  description:
    "Completed my Higher Secondary education with a strong focus on the science stream 📘🔬. This phase helped me build analytical thinking 🧠 and sparked my passion for technology and computers 💻✨, motivating me to choose Computer Science & Engineering for my future career path 🚀.",
  icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
},
{
  year: "2022",
  title: "Secondary Education",
  subtitle: "Mal Adarsha Bidya Bhaban School",
  description:
    "Successfully completed my secondary education, developing strong fundamentals across all subjects 📚✏️.This period helped build discipline, curiosity, and a deep interest in science and technology 🔍💡, which later guided my decision toward the engineering field ⚙️🚀.",
  icon: <Award className="h-4 w-4 mr-2 text-primary" />,
},
{
  year: "2006",
  title: "A New Beginning",
  subtitle: "Origin of the Journey",
  description:
    "The year my story began 🌟. Growing up with curiosity and creativity 🎨🧠, I eventually discovered my passion for computers and technology 💻⚡, setting the foundation for who I am today 🚀.",
  icon: <Users className="h-4 w-4 mr-2 text-primary" />,
},
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};

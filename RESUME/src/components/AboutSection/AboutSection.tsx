import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me 🚀</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
         Hi, I’m Arif 👋 — a first-year B.Tech CSE student at RMGEC 💻 and a passionate part-time Full Stack Developer 🌐 & React Native Developer 📱. I have around 1 year of experience building scalable and user-friendly web and mobile applications ⚙️✨<br/><br/>

I love exploring new technologies 🔍 and continuously leveling up my skills in both backend and frontend development. My goal is to create impactful digital solutions while growing every single day as a developer 🚀🌱
      </p>
        <p className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
              text-lg font-semibold max-w-3xl hover:scale-105 transition-transform duration-300">
  📧 Contact me: <a href="mailto:businessbepari@gmail.com" className="underline hover:text-blue-400">businessbepari@gmail.com</a>
</p>

      <Separator />
    </motion.div>
  );
};

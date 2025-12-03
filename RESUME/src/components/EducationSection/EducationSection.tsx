import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.h3
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          🎓 Education
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>B.Tech in Computer Science & Engineering</CardTitle>
              <p className="text-sm text-muted-foreground">
                Ramkrishna Mahato Government Engineering College (RMGEC) — 2025 – Present
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Building a strong technical foundation in <strong>Programming</strong>,
                <strong> software development</strong>, and
                <strong> Emerging technologies 💻⚙️</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Exploring Full Stack & Mobile App Development 🌐📱</li>
                <li>Learning core CS subjects: DSA, DBMS, OS, and Computer Networks 📘🤖</li>
                <li>Actively working on personal and real-world projects 🚀</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>💡 Self-Learning & Skill Development</CardTitle>
              <p className="text-sm text-muted-foreground">
                Independent Learning Journey — 1 Year (2024 – 2025)
              </p>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                <strong>🌟 Frontend Development</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>HTML5, CSS3, Tailwind CSS 🎨🧩</li>
                <li>JavaScript (ES6+), React, Vite ⚛️⚡</li>
                <li>Organized annual tech fest for 3 consecutive years</li>
              </ul>
              <p>
                <strong>☁️ Hosting & Dev Tools</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>GitHub for version control 🧑‍💻</li>
                <li>Vercel for deployment 🚀</li>
                <li>Firebase for authentication & backend services 🔐🔥</li>
                <li>npm for package management 📦</li>
              </ul>
              <p>
                <strong>👨‍💻 Computer Science Foundations</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Java (OOP concepts) ☕</li>
                <li>Data Structures & Algorithms 📚</li>
              </ul>
              <p><strong>➡️ Consistently developing real-world projects and enhancing coding logic every day 🔍💪</strong></p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};

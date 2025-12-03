"use client";



import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "REACT E-COMMERCE SHOP",
      subtitle:
        "Developed a full-featured e-commerce application using React, Redux, and Firebase...",
      date: "2025",
      link: "https://react-projects-peach-eight.vercel.app/",
      image:
        "https://692fe0d952213e0bf969ed0d.imgix.net/react.png",
    },
    {
      id: 2,
      title: "ROCK PAPER SCISSORS LIZARD SPOCK GAME",
      subtitle:
        "DEVELOPED A CLASSIC ROCK PAPER SCISSORS LIZARD SPOCK GAME USING HTML, CSS, AND JAVASCRIPT...",
      date: "2024",
      link: "https://arifb.neocities.org/rock/",
      image:
        "https://692fe0d952213e0bf969ed0d.imgix.net/rock.png",
    },
    {
      id: 3,
      title: "PONG GAME",
      subtitle:
        "CREATED A CLASSIC PONG GAME USING HTML, CSS, AND JAVASCRIPT...",
      date: "2024",
      link: "https://arifb.neocities.org/pong/",
      image:
        "https://692fe0d952213e0bf969ed0d.imgix.net/pong.png",
    },
    {
      id: 4,
      title: "INTRODUCTORY PROJECT",
      subtitle:
        "DEVELOPED A PERSONAL INTRODUCTORY WEBPAGE USING HTML AND CSS...",
      date: "2024",
      link: "https://arifbepari.neocities.org/ ",
      image:
        "https://692fe0d952213e0bf969ed0d.imgix.net/resume.png",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};

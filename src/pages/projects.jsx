import { motion } from "framer-motion";
import "../styles/projects.css";
import { random } from "lodash";

const projects = [
  {
    id: 1,
    title: "Selfcare website",
    image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description:
      "180 challenges spread across 6 months aimed at improving your life",
    tech: ["React", "CSS", "MongoDB"],
    link: ["https://github.com/MarcisIntaitis/selfcare-website"],
  },
  {
    id: 2,
    title: "Gif searching app",
    image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description: "Android app made with Giphy api",
    tech: ["Kotlin"],
    link: ["https://github.com/MarcisIntaitis/GifSearchApp"],
  },
  {
    id: 3,
    title: "Spotify player",
    image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description:
      "One of first react apps I made, using Spotify API to access users playlists, songs with the function to control volume and change songs",
    tech: ["React", "CSS"],
    link: ["https://github.com/MarcisIntaitis/MSP/tree/main/syno"],
  },
  {
    id: 4,
    title: "Social media page/app",
    image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description:
      "Qualification project for school, multiple pages, camera support, comments, likes, chat (functions that require a database don't work anymore since I deleted the database)",
    tech: ["React-native", "CSS", "Firebase"],
    link: ["https://github.com/MarcisIntaitis/Kval"],
  },
];

export const Projects = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="project-card"
          variants={cardVariant}
          initial="hidden"
          animate="visible"
          whileHover={{
            rotateZ: random(-1.5, 1.5) + "deg",
            scale: 1.02,
            zIndex: 10,
          }}
        >
          <motion.img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="btn-link"
            whileHover={{ scale: 1.03 }}
          >
            View On GitHub
          </motion.a>
        </motion.div>
      ))}
    </div>
  );
};

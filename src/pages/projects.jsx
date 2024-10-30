import { motion } from "framer-motion";
import "../styles/projects.css";
import Masonry from "@mui/lab/Masonry";

const projects = [
  {
    id: 1,
    title: "Selfcare website",
    image:
      "https://cdn.discordapp.com/attachments/914856359986597888/1301270953883467826/image.png?ex=6723de83&is=67228d03&hm=4c20f58c185937dec251d543379390efdb308b0f4c259c626f8f2d91f0bac146&",
    description:
      "180 challenges spread across 6 months aimed at improving your life",
    tech: ["React", "CSS", "MongoDB"],
    link: ["https://github.com/MarcisIntaitis/selfcare-website"],
  },
  {
    id: 2,
    title: "Gif searching app",
    image:
      "https://cdn.discordapp.com/attachments/914856359986597888/1301233805537054843/image.png?ex=6723bbea&is=67226a6a&hm=7a3e89e5cac0f848511ceddce7a75d052780dc22983f78e79ac4c888412fe637&",
    description: "Android app made with Giphy api",
    tech: ["Kotlin"],
    link: ["https://github.com/MarcisIntaitis/GifSearchApp"],
  },
  {
    id: 3,
    title: "Spotify player",
    image:
      "https://cdn.discordapp.com/attachments/914856359986597888/1301235983374749737/image.png?ex=6723bdf2&is=67226c72&hm=ce825952e6a5dc4bee7102df9ffe8083d9bb1c726c180cee0fa4c4bd199c70e4&",
    description:
      "One of the first react apps I made, using Spotify API to access users playlists and songs, with the function to control volume, change songs and search for playlists",
    tech: ["React", "CSS"],
    link: ["https://github.com/MarcisIntaitis/MSP/tree/main/syno"],
  },
  {
    id: 4,
    title: "Social media page/app",
    image:
      "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg",
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
      <Masonry columns={{ xs: 1, sm: 2 }} spacing={2}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02, zIndex: 10 }}
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
      </Masonry>
    </div>
  );
};

import { motion } from "framer-motion";
import "../styles/projects.css";
import Masonry from "@mui/lab/Masonry";
import selfcare from "../images/selfcare.png";
import player from "../images/player.png";
import weather from "../images/weather.png";

const projects = [
  {
    id: 1,
    title: "Selfcare website",
    image: selfcare,
    description:
      "180 challenges spread across 6 months aimed at improving yourself, made with React",
    tech: ["React", "CSS", "MongoDB"],
    link: ["https://github.com/MarcisIntaitis/selfcare-website"],
  },
  {
    id: 2,
    title: "Weather app",
    image: weather,
    description:
      "Made using React and ChartJS for the front-end, PHP for the backend. Uses weatherapi to fetch new weather information on user input, displays 24h temperature prediction and current weather",
    tech: ["React", "ChartJS", "PHP"],
    link: ["https://github.com/MarcisIntaitis/weather-app"],
  },
  {
    id: 3,
    title: "Spotify player",
    image: player,
    description:
      "One of the first react apps I made, using Spotify API to access users playlists and songs, with the function to control volume, change songs and search for playlists",
    tech: ["React", "CSS"],
    link: ["https://github.com/MarcisIntaitis/MSP/tree/main/syno"],
  },
  // {
  //   id: 4,
  //   title: "Social media page/app",
  //   image:
  //     "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg",
  //   description:
  //     "Qualification project for school, multiple pages, camera support, comments, likes, chat (functions that require a database don't work anymore since I deleted the database)",
  //   tech: ["React-native", "CSS", "Firebase"],
  //   link: ["https://github.com/MarcisIntaitis/Kval"],
  // },
];

export const Projects = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="project-grid container">
      <Masonry columns={{ xs: 1, sm: 2, xl: 3 }} spacing={2}>
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

import "../styles/skills.css";

const skills = [
  { id: 1, language: "HTML" },
  { id: 2, language: "CSS" },
  { id: 3, language: "React" },
  { id: 4, language: "JavaScript" },
  { id: 5, language: "TypeScript" },
  { id: 6, language: "SQL" },
  { id: 7, language: "FireBase" },
  { id: 8, language: "MongoDB" },
  { id: 9, language: "React-native" },
];

export const Skills = () => {
  return (
    <section className="skills-container container">
      {skills.map((skill) => (
        <div key={skill.id} className="skill">
          <h1>{skill.language}</h1>
        </div>
      ))}
    </section>
  );
};

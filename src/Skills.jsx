export default function Skills() {
    const skills = [
        "HTML / CSS / JavaScript",
        "React.js / Redux / React Router",
        "Laravel / PHP",
        "MySQL",
        "TailwindCSS / Bootstrap",
        "Git / GitHub",
        "Node.js / Express.js",
    ];

    return (
        <section className="section">
            <h2>Compétences</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

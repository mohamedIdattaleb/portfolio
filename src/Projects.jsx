const projects = [
    {
        title: "Gestion de bons (Laravel)",
        description: "Application locale de gestion des bons pour une librairie, avec impression PDF, historique et CRUD.",
        link: "https://github.com/mohamedIdattaleb/Librairie-bons.git",
    },
    {
        title: "Site de movies (React.js/laravel/MySQL/api/axios)",
        description: "Application de gestion de films avec React.js pour le frontend et Laravel pour le backend, utilisant MySQL pour la base de données.",
        link: "https://github.com/mohamedIdattaleb/MoviesProject-public.git",
    },
    {
        title: "Web Site (HTML/CSS/JS)",
        description: "Créateur de sites web statiques avec HTML, CSS et JavaScript.",
        link: "https://github.com/mohamedIdattaleb/Web_site.git",
    },
    
];

export default function Projects() {
    return (
        <section className="section">
            <h2>Projets</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>Voir plus</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
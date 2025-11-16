import projects from "../../data/projectsData";
import Image from "next/image";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) return <div className="mt-20 text-center">Projeto não encontrado.</div>;

    return (
        <section className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

            <Image
                src={project.image}
                alt={project.name}
                className="w-full max-h-80 object-contain mb-6"
            />

            <p className="text-lg text-(--secondary-text) mb-6">
                {project.description}
            </p>

            <h2 className="text-xl font-semibold mb-3">Tecnologias utilizadas</h2>

            <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-(--background) border rounded-md text-sm">
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href={project.github}
                target="_blank"
                className="px-4 py-2 bg-(--button) border rounded-md hover:bg-(--hover-button)"
            >
                Ver no GitHub
            </a>
        </section>
    );
}

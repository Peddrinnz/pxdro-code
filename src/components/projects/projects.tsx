'use client';

import Image from "next/image";
import { ArrowRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import laptopImg from "../../../public/laptop.png";
import { useEffect, useState } from "react";
import ParticlesBackground from "../custom/ParticlesBackground";

const Projects = () => {
    const { language } = useLanguage();

    const TEXT = {
        pt: { title: "Projetos", details: "Ver detalhes" },
        en: { title: "Projects", details: "View details" },
    };
    const content = TEXT[language];

    const projects = [
        {
            name: "Projeto KDÊ",
            description:
                language === "pt"
                    ? "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS e promover mais agilidade no registro de bens."
                    : "Web system developed to assist the inventory process of IFMS assets and improve agility in asset registration.",
            tags: ["Next JS", "Tailwind CSS", "TypeScript", "PostgreSQL", "Figma"],
            image: laptopImg,
            github: "#",
        },
        {
            name: "Projeto KDÊ",
            description:
                language === "pt"
                    ? "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS e promover mais agilidade no registro de bens."
                    : "Web system developed to assist the inventory process of IFMS assets and improve agility in asset registration.",
            tags: ["Next JS", "Tailwind CSS", "TypeScript", "PostgreSQL", "Figma"],
            image: laptopImg,
            github: "#",
        },
        {
            name: "Projeto KDÊ",
            description:
                language === "pt"
                    ? "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS e promover mais agilidade no registro de bens."
                    : "Web system developed to assist the inventory process of IFMS assets and improve agility in asset registration.",
            tags: ["Next JS", "Tailwind CSS", "TypeScript", "PostgreSQL", "Figma"],
            image: laptopImg,
            github: "#",
        },
        {
            name: "Projeto Novo 4",
            description:
                language === "pt"
                    ? "Mais um projeto para testar a navegação."
                    : "Another project to test navigation.",
            tags: ["React", "CSS"],
            image: laptopImg,
            github: "#",
        },
    ];

    // Responsividade
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const [index, setIndex] = useState(0);

    const next = () => {
        if (index + itemsPerView < projects.length)
            setIndex(index + itemsPerView);
    };

    const prev = () => {
        if (index - itemsPerView >= 0)
            setIndex(index - itemsPerView);
    };

    const visible = projects.slice(index, index + itemsPerView);

    const totalPages = Math.ceil(projects.length / itemsPerView);
    const currentPage = Math.floor(index / itemsPerView);

    return (
        <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 mt-20 relative bg-(--background) z-0">
            <ParticlesBackground />
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    {content.title}
                    <span className="block w-32 h-0.5 bg-(--text) mx-auto mt-2"></span>
                </h2>

                {index > 0 && (
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 
                        bg-(--cards) border border-(--border)
                        rounded-full hover:bg-(--hover-color)"
                    >
                        <ChevronLeft size={26} />
                    </button>
                )}

                <div
                    className={`grid gap-10 justify-center
                    ${itemsPerView === 1 ? "grid-cols-1" : ""}
                    ${itemsPerView === 2 ? "grid-cols-2" : ""}
                    ${itemsPerView === 3 ? "grid-cols-3" : ""}`}
                >
                    {visible.map((project, i) => (
                        <div
                            key={i}
                            className="bg-(--cards) shadow-md rounded-md border border-(--border)
                            hover:border-(--secundary-border) transition-all duration-300
                            flex flex-col overflow-hidden"
                        >
                            <Image src={project.image} alt="project image"
                                className="w-full h-56 object-cover" />

                            <div className="p-6 flex flex-col grow gap-4">

                                <h3 className="text-xl font-semibold text-(--primary-color)">
                                    {project.name}
                                </h3>

                                <p className="text-(--secondary-text)">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mt-2">
                                    {project.tags.map((tag, t) => (
                                        <span key={t}
                                            className="px-3 py-1 bg-(--background) border border-(--border)
                                            rounded-md text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-4">
                                    <button className="flex items-center gap-2 px-4 py-2 bg-(--button)
                                        rounded-md hover:bg-(--hover-button) border border-(--secondary-border)">
                                        {content.details}
                                        <ArrowRight size={18} />
                                    </button>

                                    <a href={project.github} target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 bg-(--background)
                                        border border-(--border) rounded-md hover:border-(--hover-color)">
                                        Github
                                        <Github size={18} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {index + itemsPerView < projects.length && (
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2
                        bg-(--cards) border border-(--border)
                        rounded-full hover:bg-(--hover-color)"
                    >
                        <ChevronRight size={26} />
                    </button>
                )}

                <div className="flex justify-center mt-10 gap-3">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all 
                                ${i === currentPage
                                    ? "bg-(--primary-color) scale-110"
                                    : "bg-(--border)"}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
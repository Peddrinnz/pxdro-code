'use client';

import Image from "next/image";
import { ArrowRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import kdeImg from "../../../public/kde.svg";
import embrapaImg from "../../../public/empraba.png";
import javaImg from "../../../public/java.png";
import petImg from "../../../public/studiopetcare.svg"
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
            image: kdeImg,
            github: "https://github.com/Peddrinnz/tcc",
        },
        {
            name: "Projeto SIGINF",
            description:
                language === "pt"
                    ? "Responsável pela atualização completa da interface do SIGINF, um sistema interno da Embrapa Pantanal utilizado para gestão de inventário. O trabalho incluiu reorganização visual, padronização de componentes e correção de inconsistências de usabilidade."
                    : "Responsible for updating the entire interface of SIGINF, an internal system used by Embrapa Pantanal for inventory management. The work included visual reorganization, component standardization, and usability fixes.",
            tags: ["PHP", "CSS", "HTML", "MySQL", "JavaScript"],
            image: embrapaImg,
            github: "https://github.com/Peddrinnz/siginf",
        },
        {
            name: "Projeto Java UI",
            description:
                language === "pt"
                    ? "Sistema de Gestão de Biblioteca desenvolvido em Java utilizando o padrão MVC com a variação MVCR. Permite cadastrar livros e usuários, além de realizar empréstimos e devoluções com controle de datas e validações. O projeto inclui interface gráfica em Java Swing, organização modular e regras de negócio bem definidas."
                    : "Library Management System developed in Java using the MVC pattern with the MVCR variation. It allows registering books and users, as well as handling loans and returns with date tracking and validations. The project includes a Java Swing user interface, modular structure, and well-defined business rules.",
            tags: ["Spring Boot", "Java Swing", "Java", "Docker", "Figma"],
            image: javaImg,
            github: "https://github.com/Peddrinnz/java_ui",
        },
        {
            name: "Studio Pet Care",
            description:
                language === "pt"
                    ? "Landing page desenvolvida para o Studio Pet Care, com foco na apresentação de serviços voltados a cuidados de pets. Todo o design UI/UX foi criado por mim no Figma, incluindo identidade visual, layout e organização dos componentes."
                    : "Landing page developed for Studio Pet Care, focused on showcasing pet care services. The entire UI/UX design was created by me in Figma, including visual identity, layout, and component organization.",
            tags: ["React", "Tailwind CSS", "Figma", "TypeScript"],
            image: petImg,
            github: "https://github.com/Peddrinnz/Studio-Pet-Care",
        },
    ];

    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const resize = () => {
            if (window.innerWidth < 640) setItemsPerView(1);
            else if (window.innerWidth < 1024) setItemsPerView(2);
            else setItemsPerView(3);
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
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

                <div className="relative">
                    {index > 0 && (
                        <button
                            onClick={prev}
                            className="absolute -left-3 top-1/2 -translate-y-1/2 
                            z-30 size-10 rounded-full flex items-center justify-center
                            bg-(--primary-color)/70 border border-(--border)
                            shadow-md hover:bg-(--background)/80 transition"
                        >
                            <ChevronLeft size={22} />
                        </button>
                    )}

                    <div
                        className="grid gap-6 px-2"
                        style={{
                            gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
                            maxWidth: "95%",
                            margin: "0 auto",
                        }}
                    >
                        {visible.map((project, i) => (
                            <div
                                key={i}
                                className="bg-(--cards) shadow-md rounded-md border border-(--border)
                                hover:border-(--secundary-border) transition-all duration-300
                                flex flex-col overflow-hidden max-w-[92%] mx-auto"
                            >
                                <div className="w-full h-56 relative">
                                    <Image
                                        src={project.image}
                                        alt="project image"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>

                                <div className="p-6 flex flex-col grow gap-4">
                                    <h3 className="text-xl font-semibold text-(--primary-color)">
                                        {project.name}
                                    </h3>

                                    <p className="text-(--secondary-text)">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mt-2">
                                        {project.tags.map((tag, t) => (
                                            <span key={t}
                                                className="px-3 py-1 bg-(--background) border border-(--border)
                                                rounded-md text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto pt-4">
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
                            className="absolute -right-3 top-1/2 -translate-y-1/2 
                            z-30 size-10 rounded-full flex items-center justify-center
                            bg-(--primary-color)/70 border border-(--border)
                            shadow-md hover:bg-(--background)/80 transition"
                        >
                            <ChevronRight size={22} />
                        </button>
                    )}
                </div>

                <div className="flex justify-center mt-10 gap-3">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-all 
                            ${i === currentPage ? "bg-(--primary-color) scale-110" : "bg-(--border)"}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
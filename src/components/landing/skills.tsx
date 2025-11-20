'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import {
    Code2,
    Database,
    Users,
    Settings,
    FileCode,
    Terminal,
    Container,
    Palette
} from 'lucide-react';

const Skills = () => {
    const { language } = useLanguage();

    const skillsContent = {
        pt: {
            title: "Habilidades",
            frontend: "Front-End",
            backend: "Back-end e Database",
            softSkills: "Soft Skills",
            tools: "Ferramentas"
        },
        en: {
            title: "Skills",
            frontend: "Front-End",
            backend: "Back-end & Database",
            softSkills: "Soft Skills",
            tools: "Tools"
        }
    };

    const skillsData = {
        frontend: [
            { name: "HTML/CSS", icon: FileCode },
            { name: "JavaScript/TypeScript", icon: Code2 },
            { name: "Tailwind CSS", icon: Palette },
            { name: "React JS", icon: Code2 },
            { name: "Next JS", icon: Code2 }
        ],
        backend: [
            { name: "Java", icon: Code2 },
            { name: "PHP/Laravel", icon: Code2 },
            { name: "MySQL/PostgreSQL", icon: Database },
            { name: "Node JS", icon: Settings }
        ],
        softSkills: [
            { name: "Organização", icon: Settings },
            { name: "Trabalho em equipe", icon: Users },
            { name: "Criatividade", icon: Palette },
            { name: "Adaptabilidade", icon: Settings },
            { name: "Resolução de problemas", icon: Terminal }
        ],
        tools: [
            { name: "Linux", icon: Terminal },
            { name: "Git/Github", icon: Code2 },
            { name: "Docker", icon: Container },
            { name: "Figma", icon: Palette }
        ]
    };

    const content = skillsContent[language];

    return (
        <section
            id="habilidades"
            className="relative z-0 flex items-center bg-(--background) px-4 sm:px-6 lg:px-8 py-16"
        >
            <div className="max-w-7xl w-full mx-auto relative z-10">
                <h2 className="text-3xl font-semibold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
                    {content.title}
                    <span className="block w-32 h-0.5 bg-(--text) mx-auto mt-2"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-(--cards) shadow-md rounded-md p-8 border border-(--border)">
                        <div className="flex items-center mb-6">
                            <Code2 className="w-6 h-6 text-(--primary-color) mr-3" />
                            <h3 className="text-2xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent">
                                {content.frontend}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {skillsData.frontend.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center bg-(--background) backdrop-blur-md px-4 py-3 rounded-md border border-(--border) transition-all duration-300
                                        hover:bg-(--primary-color) hover:text-white hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5"
                                    >
                                        <IconComponent className="w-5 h-5 mr-3 text-(--primary-color) transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                                        <span className="transition-all duration-300 group-hover:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-(--cards) shadow-md rounded-md p-8 border border-(--border)">
                        <div className="flex items-center mb-6">
                            <Database className="w-6 h-6 text-(--primary-color) mr-3" />
                            <h3 className="text-2xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent">
                                {content.backend}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {skillsData.backend.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center bg-(--background) backdrop-blur-md px-4 py-3 rounded-md border border-(--border) transition-all duration-300
                                        hover:bg-(--primary-color) hover:text-white hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5"
                                    >
                                        <IconComponent className="w-5 h-5 mr-3 text-(--primary-color) transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                                        <span className="transition-all duration-300 group-hover:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-(--cards) shadow-md rounded-md p-8 border border-(--border)">
                        <div className="flex items-center mb-6">
                            <Users className="w-6 h-6 text-(--primary-color) mr-3" />
                            <h3 className="text-2xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent">
                                {content.softSkills}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {skillsData.softSkills.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center bg-(--background) backdrop-blur-md px-4 py-3 rounded-md border border-(--border) transition-all duration-300
                                        hover:bg-(--primary-color) hover:text-white hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5"
                                    >
                                        <IconComponent className="w-5 h-5 mr-3 text-(--primary-color) transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                                        <span className="transition-all duration-300 group-hover:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-(--cards) shadow-md rounded-md p-8 border border-(--border)">
                        <div className="flex items-center mb-6">
                            <Settings className="w-6 h-6 text-(--primary-color) mr-3" />
                            <h3 className="text-2xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent">
                                {content.tools}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {skillsData.tools.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center bg-(--background) backdrop-blur-md px-4 py-3 rounded-md border border-(--border) transition-all duration-300
                                        hover:bg-(--primary-color) hover:text-white hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5"
                                    >
                                        <IconComponent className="w-5 h-5 mr-3 text-(--primary-color) group-hover:text-white" />
                                        <span className="text-(--text) group-hover:text-white">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
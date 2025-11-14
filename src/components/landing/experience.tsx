'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Star } from 'lucide-react';

const Experience = () => {
    const { language } = useLanguage();

    const experienceContent = {
        pt: {
            title: "Experiência e Formação",
            experiences: [
                {
                    type: "experiencia",
                    title: "Projetos Full Stack",
                    period: "2024 – 2025",
                    subtitle: "Sistemas internos para o IFMS campus Corumbá e Embrapa Pantanal",
                    description: "Projeto Full Stack para auxiliar o processo de registro de bens do IFMS, sendo pensado para atender multi campus.",
                    activitiesTitle: "Atividades e Responsabilidades",
                    activities: [
                        "Trabalhei em projetos completos usando Next JS",
                        "Construi interfaces responsivas", 
                        "Trabalhei em um projeto full stack usando Java"
                    ]
                },
                {
                    type: "experiencia",
                    title: "Estágiario NTI",
                    period: "abr 2025 – set 2025",
                    subtitle: "Estágio na Embrapa Pantanal",
                    description: "Ajustei o sistema interno SIGNIF, arrumando principalmente a parte visual do sistema, deixando ela responsiva e moderna.",
                    activitiesTitle: "Atividades e Responsabilidades",
                    activities: [
                        "Entendimento de um sistema pronto",
                        "Ajustei a interface e melhorei a responsividade",
                        "Reconfigurei o projeto",
                        "Utilizei Docker para containerização",
                        "Deploy no servidor local"
                    ]
                },
                {
                    type: "formacao",
                    title: "Formação em Análise e Desenvolvimento de Sistemas",
                    period: "Jul 2022 – jul 2025",
                    subtitle: "Instituto Federal de Mato Grosso do Sul campus Corumbá",
                    description: "Formação sólida em desenvolvimento de software, com foco em aplicações web, banco de dados e boas práticas de engenharia.",
                    activitiesTitle: "Destaques",
                    activities: [
                        "Redes com uso do Linux",
                        "Aprendizado em desenvolvimento web",
                        "Trabalho com Back-end",
                        "Engenharia de Software",
                        "Responsividade",
                        "Usabilidade e Acessibilidade"
                    ]
                },
                {
                    type: "formacao",
                    title: "Formação na Alura",
                    period: "mar 2024 – mar 2025",
                    subtitle: "https://www.alura.com.br",
                    description: "Desenvolvimento contínuo de habilidades em front-end e back-end, abrangendo JavaScript, Node.js, React, PHP (Laravel) e Java, com complementos em design de interface e ferramentas de apoio.",
                    activitiesTitle: "Destaques",
                    activities: [
                        "Ferramenta Figma",
                        "Foco em APIs utilizando Express e Node.js",
                        "Ferramenta Excel",
                        "Entendimento melhor sobre POO",
                        "Metodologia ágil – SCRUM",
                        "UI/UX design"
                    ]
                }
            ]
        },
        en: {
            title: "Experience & Education",
            experiences: [
                {
                    type: "experience",
                    title: "Full Stack Projects",
                    period: "2024 – 2025",
                    subtitle: "Internal systems for IFMS Corumbá campus and Embrapa Pantanal",
                    description: "Full Stack project to assist the asset registration process at IFMS, designed to serve multiple campuses.",
                    activitiesTitle: "Activities and Responsibilities",
                    activities: [
                        "Worked on complete projects using Next JS",
                        "Built responsive interfaces",
                        "Worked on a full stack project using Java"
                    ]
                },
                {
                    type: "experience",
                    title: "NTI Intern",
                    period: "Apr 2025 – Sep 2025", 
                    subtitle: "Internship at Embrapa Pantanal",
                    description: "Adjusted the internal SIGNIF system, mainly fixing the visual part of the system, making it responsive and modern.",
                    activitiesTitle: "Activities and Responsibilities",
                    activities: [
                        "Understanding of a ready-made system",
                        "Adjusted the interface and improved responsiveness",
                        "Reconfigured the project",
                        "Used Docker for containerization",
                        "Deploy on local server"
                    ]
                },
                {
                    type: "education",
                    title: "Systems Analysis and Development Degree",
                    period: "Jul 2022 – jul 2025",
                    subtitle: "Federal Institute of Mato Grosso do Sul, Corumbá campus",
                    description: "Solid education in software development, focusing on web applications, databases, and software engineering best practices.",
                    activitiesTitle: "Highlights",
                    activities: [
                        "Networking with Linux",
                        "Web development learning",
                        "Back-end work",
                        "Software Engineering",
                        "Responsiveness",
                        "Usability and Accessibility"
                    ]
                },
                {
                    type: "education",
                    title: "Alura Formation",
                    period: "Mar 2024 – Mar 2025",
                    subtitle: "https://www.alura.com.br",
                    description: "Continuous development of front-end and back-end skills, covering JavaScript, Node.js, React, PHP (Laravel) and Java, with complements in interface design and support tools.",
                    activitiesTitle: "Highlights",
                    activities: [
                        "Figma tool",
                        "Focus on APIs using Express and Node.js",
                        "Excel tool",
                        "Better understanding of OOP",
                        "Agile methodology – SCRUM",
                        "UI/UX design"
                    ]
                }
            ]
        }
    };

    const content = experienceContent[language];

    const TimelineItem = ({ data, index }: { data: any; index: number }) => (
        <div className={`flex items-start relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}>
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-(--cards) shadow-md rounded-md p-8 border border-(--border) hover:shadow-lg hover:border-(--secundary-border) transition-all duration-300 group-hover:scale-105">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent mb-1">
                                {data.title}
                            </h3>
                            <p className="text-lg font-medium text-(--text)">
                                {data.subtitle}
                            </p>
                        </div>
                        <span className="text-sm font-semibold bg-(--primary-color) text-(--background) px-3 py-1 rounded-full whitespace-nowrap sm:mt-1">
                            {data.period}
                        </span>
                    </div>

                    <p className="text-(--secondary-text) mb-6 leading-relaxed">
                        {data.description}
                    </p>

                    <div className="border-t border-(--border) pt-6">
                        <h4 className="text-lg font-semibold text-(--text) mb-4 flex items-center">
                            {data.type === 'experiencia' || data.type === 'experience' ? (
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            ) : (
                                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            )}
                            {data.activitiesTitle}
                        </h4>
                        <ul className="space-y-3">
                            {data.activities.map((activity: string, activityIndex: number) => (
                                <li key={activityIndex} className="flex items-start text-(--secondary-text)">
                                    <span className="text-(--primary-color) font-bold mr-3 mt-0.5">•</span>
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-12 h-full">
                <div className="w-5 h-5 bg-(--background) rounded-full border-4 border-(--primary-color) z-10 relative group-hover:scale-125 transition-transform duration-300"></div>
            </div>

            <div className="hidden md:block w-5/12"></div>
        </div>
    );

    return (
        <section 
            id="experiencia" 
            className="bg-(--secundary-background) px-4 sm:px-6 lg:px-8 py-20"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
                    {content.title}
                    <span className="block w-32 h-0.5 bg-(--text) mx-auto mt-2"></span>
                </h2>

                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-(--primary-color) top-0 bottom-0 z-0"></div>
                    <div className="space-y-1 relative z-10">
                        {content.experiences.map((item, index) => (
                            <TimelineItem 
                                key={index} 
                                data={item} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
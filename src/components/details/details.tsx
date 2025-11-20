"use client";

import Image, { type StaticImageData } from "next/image";
import { Github, Calendar, Target, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import kdeImg from "../../../public/kde.svg";
import embrapaImg from "../../../public/empraba.png";
import javaImg from "../../../public/java.png";
import petImg from "../../../public/studiopetcare.svg";
import { useLanguage } from "@/contexts/LanguageContext";

type Lang = "pt" | "en";

type DevelopmentStep = { title: string; description: string };

type LocalizedProject = {
    name: string;
    description: string;
    fullDescription: string;
    features: string[];
    developmentProcess: DevelopmentStep[];
    tags: string[];
    image: StaticImageData;
    github: string;
    link?: string;
    timeline: string;
    team: string;
    client: string;
    status: string;
};

type Project = {
    slug: string;
    pt: LocalizedProject;
    en: LocalizedProject;
};

export const projects: Project[] = [
    {
        slug: "kde",
        pt: {
            name: "Projeto KDÊ",
            description: "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS e promover mais agilidade no registro de bens.",
            fullDescription: "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS. Centralizando em um único sistema multicampi, a ferramenta possui interface intuitiva que facilita a usabilidade.",
            features: [
                "Interface intuitiva com dashboard para diferentes níveis de usuários",
                "Interface responsiva para dispositivos móveis",
                "Atualização dos dados em tempo real",
                "Sessão estatística integrada",
                "Histórico de mudanças dos bens"
            ],
            developmentProcess: [
                {
                    title: "Pesquisa e fundamentação teórica",
                    description: "Pesquisas e entrevistas para entender necessidades, funcionalidades e demais requisitos do sistema."
                },
                {
                    title: "Design e UI/UX",
                    description: "Criação de uma interface amigável e acessível para perfis de usuários variados."
                },
                {
                    title: "Desenvolvimento com Next JS",
                    description: "Front-end com React, Tailwind e componentes reutilizáveis. Back-end em TypeScript com PostgreSQL."
                },
                {
                    title: "Teste com usuários",
                    description: "Validação com usuários reais e profissionais da área."
                }
            ],
            tags: ["Next JS", "Tailwind CSS", "TypeScript", "PostgreSQL", "Figma"],
            image: kdeImg,
            github: "https://github.com/Peddrinnz/tcc",
            link: "https://tcc-viniszofc.vercel.app",
            timeline: "6 meses",
            team: "3 desenvolvedores",
            client: "IFMS Campus Corumbá (multicampi)",
            status: "Concluído"
        },
        en: {
            name: "KDÊ Project",
            description: "Web system developed to support the IFMS asset inventory process and speed up the registration of goods.",
            fullDescription: "Web system created to support the IFMS asset inventory process. Centralized in a single multicampus system, it offers an intuitive interface that improves usability.",
            features: [
                "Intuitive dashboard for different user roles",
                "Responsive interface for mobile devices",
                "Real-time data updates",
                "Integrated statistics section",
                "Change history tracking"
            ],
            developmentProcess: [
                {
                    title: "Research and theoretical foundation",
                    description: "Research and interviews to understand user needs, system requirements, and functionalities."
                },
                {
                    title: "UI/UX Design",
                    description: "Creation of an accessible and user-friendly interface for different user profiles."
                },
                {
                    title: "Development with Next JS",
                    description: "Front-end built with React, Tailwind, and reusable components. Back-end in TypeScript with PostgreSQL."
                },
                {
                    title: "User testing",
                    description: "Validation with real users and system development professionals."
                }
            ],
            tags: ["Next JS", "Tailwind CSS", "TypeScript", "PostgreSQL", "Figma"],
            image: kdeImg,
            github: "https://github.com/Peddrinnz/tcc",
            link: "https://tcc-viniszofc.vercel.app",
            timeline: "6 months",
            team: "3 developers",
            client: "IFMS Corumbá Campus (multicampus)",
            status: "Completed"
        }
    },

    {
        slug: "siginf",
        pt: {
            name: "Projeto SIGINF",
            description: "Responsável pela atualização completa da interface do SIGINF, sistema interno da Embrapa usado para gestão de inventário.",
            fullDescription: "Trabalhei na modernização completa da interface do SIGINF. Incluiu redesign visual, padronização de componentes, correção de inconsistências e melhorias na experiência do usuário.",
            features: [
                "Redesign completo da interface",
                "Padronização visual de componentes",
                "Correção de inconsistências de usabilidade",
                "Melhoria da experiência do usuário",
                "Compatibilidade com a base de dados existente"
            ],
            developmentProcess: [
                {
                    title: "Análise do sistema legado",
                    description: "Estudo detalhado do sistema atual para identificar problemas e oportunidades."
                },
                {
                    title: "Design e prototipagem",
                    description: "Criação de wireframes e protótipos validados com usuários."
                },
                {
                    title: "Desenvolvimento front-end",
                    description: "Implementação utilizando PHP, CSS e JavaScript mantendo integração com o back-end já existente."
                },
                {
                    title: "Testes e validação",
                    description: "Testes com usuários finais para garantir a qualidade das melhorias."
                }
            ],
            tags: ["PHP", "CSS", "HTML", "MySQL", "JavaScript"],
            image: embrapaImg,
            github: "https://github.com/Peddrinnz/siginf",
            timeline: "3 meses",
            team: "1 desenvolvedor",
            client: "Embrapa Pantanal",
            status: "Concluído"
        },
        en: {
            name: "SIGINF Project",
            description: "Responsible for the full interface update of SIGINF, an internal Embrapa tool used for inventory management.",
            fullDescription: "I worked on the complete modernization of the SIGINF interface, including redesign, component standardization, usability fixes, and UX improvements.",
            features: [
                "Complete interface redesign",
                "Visual component standardization",
                "Usability fixes",
                "Enhanced user experience",
                "Compatibility with existing database"
            ],
            developmentProcess: [
                {
                    title: "Legacy system analysis",
                    description: "Detailed study of the existing system to identify issues and opportunities."
                },
                {
                    title: "Design and prototyping",
                    description: "Creation of wireframes and prototypes validated with real users."
                },
                {
                    title: "Front-end development",
                    description: "Implementation using PHP, CSS, and JavaScript while keeping integration with the existing backend."
                },
                {
                    title: "Testing and validation",
                    description: "User testing to ensure usability and functionality."
                }
            ],
            tags: ["PHP", "CSS", "HTML", "MySQL", "JavaScript"],
            image: embrapaImg,
            github: "https://github.com/Peddrinnz/siginf",
            timeline: "3 months",
            team: "1 developer",
            client: "Embrapa Pantanal",
            status: "Completed"
        }
    },

    {
        slug: "java-ui",
        pt: {
            name: "Projeto Java UI",
            description: "Sistema de Gestão de Biblioteca desenvolvido em Java seguindo o padrão MVC (variação MVCR).",
            fullDescription: "Sistema completo de biblioteca com cadastro de livros e usuários, empréstimos, devoluções, reservas e relatórios. Interface construída com Java Swing.",
            features: [
                "Cadastro de livros e usuários",
                "Controle de empréstimos e devoluções",
                "Sistema de reservas",
                "Relatórios administrativos",
                "Interface desktop com Java Swing"
            ],
            developmentProcess: [
                {
                    title: "Planejamento e arquitetura",
                    description: "Definição da arquitetura MVC com variação MVCR."
                },
                {
                    title: "Design da interface",
                    description: "Criação da interface desktop utilizando Java Swing."
                },
                {
                    title: "Desenvolvimento back-end",
                    description: "Implementação da lógica de negócio usando Spring Boot."
                },
                {
                    title: "Testes e validação",
                    description: "Testes unitários e de integração."
                }
            ],
            tags: ["Spring Boot", "Java Swing", "Java", "Docker", "Figma"],
            image: javaImg,
            github: "https://github.com/Peddrinnz/java_ui",
            timeline: "4 meses",
            team: "2 desenvolvedores",
            client: "Projeto Acadêmico",
            status: "Concluído"
        },
        en: {
            name: "Java UI Project",
            description: "Library Management System developed in Java using the MVC pattern (MVCR variation).",
            fullDescription: "Complete library system including book and user registration, loans, returns, reservations, and reports. Interface built with Java Swing.",
            features: [
                "Book and user registration",
                "Loan and return management",
                "Reservation system",
                "Administrative reports",
                "Desktop interface with Java Swing"
            ],
            developmentProcess: [
                {
                    title: "Planning and architecture",
                    description: "Definition of the MVC architecture with MVCR variation."
                },
                {
                    title: "Interface design",
                    description: "Desktop interface created with Java Swing."
                },
                {
                    title: "Back-end development",
                    description: "Business logic implemented using Spring Boot."
                },
                {
                    title: "Testing and validation",
                    description: "Unit and integration tests."
                }
            ],
            tags: ["Spring Boot", "Java Swing", "Java", "Docker", "Figma"],
            image: javaImg,
            github: "https://github.com/Peddrinnz/java_ui",
            timeline: "4 months",
            team: "2 developers",
            client: "Academic Project",
            status: "Completed"
        }
    },

    {
        slug: "studio-pet-care",
        pt: {
            name: "Studio Pet Care",
            description: "Landing page desenvolvida para o Studio Pet Care, com design criado totalmente no Figma.",
            fullDescription: "Landing page moderna e responsiva com identidade visual feita no Figma. Inclui serviços, equipe, depoimentos e formulário de contato integrado.",
            features: [
                "Design responsivo",
                "Animações suaves",
                "Otimização para SEO",
                "Formulário de contato",
                "Seção de depoimentos"
            ],
            developmentProcess: [
                {
                    title: "Pesquisa e discovery",
                    description: "Análise de mercado e concorrência."
                },
                {
                    title: "Design UI/UX no Figma",
                    description: "Criação da identidade visual, wireframes e protótipos."
                },
                {
                    title: "Desenvolvimento front-end",
                    description: "Implementação com React, Tailwind CSS e TypeScript."
                },
                {
                    title: "Otimização e lançamento",
                    description: "SEO, performance e deploy."
                }
            ],
            tags: ["React", "Tailwind CSS", "Figma", "TypeScript"],
            image: petImg,
            github: "https://github.com/Peddrinnz/Studio-Pet-Care",
            link: "https://studio-pet-care.vercel.app",
            timeline: "1 mês",
            team: "1 desenvolvedor/designer",
            client: "Studio Pet Care",
            status: "Concluído"
        },
        en: {
            name: "Studio Pet Care",
            description: "Landing page developed for Studio Pet Care, with full UI/UX design created in Figma.",
            fullDescription: "Modern and responsive landing page with a complete visual identity designed in Figma. Includes services, team, testimonials, and integrated contact form.",
            features: [
                "Responsive design",
                "Smooth animations",
                "SEO optimization",
                "Integrated contact form",
                "Testimonials section"
            ],
            developmentProcess: [
                {
                    title: "Research and discovery",
                    description: "Market and competitor analysis."
                },
                {
                    title: "UI/UX Design in Figma",
                    description: "Visual identity, wireframes, and prototypes."
                },
                {
                    title: "Front-end development",
                    description: "Implementation using React, Tailwind CSS, and TypeScript."
                },
                {
                    title: "Optimization and launch",
                    description: "SEO, performance improvements, and deployment."
                }
            ],
            tags: ["React", "Tailwind CSS", "Figma", "TypeScript"],
            image: petImg,
            github: "https://github.com/Peddrinnz/Studio-Pet-Care",
            link: "https://studio-pet-care.vercel.app",
            timeline: "1 month",
            team: "1 developer/designer",
            client: "Studio Pet Care",
            status: "Completed"
        }
    }
];

export default function Details() {
    const { language } = useLanguage();
    const params = useParams();
    const slug = params?.slug as string;

    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <section className="min-h-screen bg-(--background) pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-(--text) mb-4">Projeto não encontrado</h1>
                    <Link 
                        href="/projects"
                        className="inline-flex items-center gap-2 text-(--primary-color) hover:text-(--primary-color)/80 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Voltar para Projetos
                    </Link>
                </div>
            </section>
        );
    }

    const localized = project[language as Lang];
    const projectLink = (localized as LocalizedProject).link ?? localized.github;

    return (
        <section className="min-h-screen bg-(--background) pt-20">
            <div className="border-b border-(--border)">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">
                                {localized.name}
                            </h1>
                            <p className="text-xl text-(--secondary-text) leading-relaxed">
                                {localized.description}
                            </p>
                        </div>

                        <div className="bg-(--cards) border border-(--border) rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-(--text) mb-4">Tecnologias</h3>
                            <div className="flex flex-wrap gap-2">
                                {localized.tags.map((tag: string, i: number) => (
                                    <span 
                                        key={i}
                                        className="px-3 py-1 bg-(--background)/80 border border-(--primary-color) rounded-md text-(--primary-color) text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <a
                                href={localized.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-4 flex items-center justify-center gap-2 bg-(--button) border border-(--border) text-(--text) px-4 py-2 rounded-lg hover:bg-(--hover-button) transition-colors font-medium text-sm"
                            >
                                <Github size={16} />
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-(--cards) border border-(--border) rounded-xl p-8">
                            <div className="relative w-full h-80 rounded-lg overflow-hidden">
                                <Image
                                    src={localized.image}
                                    alt={localized.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-(--text) mb-6 pb-2 border-b border-(--border)">
                                Sobre o projeto
                            </h2>
                            <p className="text-(--secondary-text) leading-relaxed mb-8">
                                {localized.fullDescription}
                            </p>

                            <h3 className="text-xl font-semibold text-(--text) mb-4">
                                Principais funcionalidades
                            </h3>
                            <ul className="space-y-3">
                                {localized.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-(--primary-color) mt-0.5 shrink-0" />
                                        <span className="text-(--secondary-text)">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-(--text) mb-6 pb-2 border-b border-(--border)">
                                Processo de Desenvolvimento
                            </h2>
                            <div className="space-y-6">
                                {localized.developmentProcess.map((step: DevelopmentStep, index: number) => (
                                    <div key={index} className="border-l-2 border-(--primary-color) pl-6 py-1">
                                        <h3 className="text-lg font-semibold text-(--text) mb-2">
                                            {index + 1}. {step.title}
                                        </h3>
                                        <p className="text-(--secondary-text) leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-(--cards) border border-(--border) rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-(--text) mb-4 flex items-center gap-2">
                                <Target size={20} className="text-(--primary-color)" />
                                Status
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-(--text) font-medium">{localized.status}</span>
                            </div>
                        </div>

                        <div className="bg-(--cards) border border-(--border) rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-(--text) mb-4 flex items-center gap-2">
                                <Calendar size={20} className="text-(--primary-color)" />
                                Informações
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-(--secondary-text)">Duração</p>
                                    <p className="font-medium text-(--text)">{localized.timeline}</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-(--secondary-text)">Equipe</p>
                                    <p className="font-medium text-(--text)">{localized.team}</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-(--secondary-text)">Cliente</p>
                                    <p className="font-medium text-(--text)">{localized.client}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <a
                                    href={projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-(--primary-color) px-4 py-2 rounded-md hover:opacity-90 transition-colors font-medium text-sm border border-(--secondary-border)"
                                >
                                    {language === 'pt' ? 'Abrir projeto' : 'Open project'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
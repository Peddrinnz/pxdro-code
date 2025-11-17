'use client';

import Image from "next/image";
import { Github, Calendar, Target, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import kdeImg from "../../../public/kde.svg";
import embrapaImg from "../../../public/empraba.png";
import javaImg from "../../../public/java.png";
import petImg from "../../../public/studiopetcare.svg";

const projects = [
    {
        slug: "kde",
        name: "Projeto KDÊ",
        description: "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS e promover mais agilidade no registro de bens.",
        fullDescription: "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS e promover mais agilidade no registro de bens. Centralizando em único sistema sendo multi campus a demanda disse o sistema possui interface intuitiva que promove uma boa usabilidade.",
        features: [
            "Interface intuitiva com dashboard para os níveis de usuários",
            "Interface responsiva para dispositivos móveis",
            "Atualização dos dados em tempo real",
            "Sessão estatística",
            "Histórico de mudanças dos bens"
        ],
        developmentProcess: [
            {
                title: "Pesquisa e fundamentação teórica",
                description: "Pesquisas e entrevistas para saber as necessidades dos usuários do sistema, funcionalidades e outras necessidades do sistema, além de aprofundar em pesquisas de uma fundamentação teórica."
            },
            {
                title: "Design e UI/UX",
                description: "Criação de uma interface amigável e acessível, considerando diferentes perfis de usuários."
            },
            {
                title: "Desenvolvimento com Next JS",
                description: "Front-end em React, Tailwind CSS e componentes reutilizáveis. Back-end em TypeScript e integração com o banco de dados por meio de PostgreSQL."
            },
            {
                title: "Teste com usuários",
                description: "Validação com usuários reais e profissionais da área de desenvolvimento de sistemas."
            }
        ],
        tags: ["Next JS", "Tailwind CSS", "TypeScript", "PostgreSQL", "Figma"],
        image: kdeImg,
        github: "https://github.com/Peddrinnz/tcc",
        timeline: "6 meses",
        team: "3 desenvolvedores",
        client: "IFMS Campus Corumbá (sendo multi campus)",
        status: "Concluído"
    },
    {
        slug: "siginf",
        name: "Projeto SIGINF",
        description: "Responsável pela atualização completa da interface do SIGINF, um sistema interno da Embrapa Pantanal utilizado para gestão de inventário.",
        fullDescription: "Trabalhei na modernização completa da interface do Sistema de Gestão de Informações (SIGINF) da Embrapa Pantanal. O projeto incluiu redesign visual, padronização de componentes, correção de inconsistências de usabilidade e implementação de melhorias na experiência do usuário, mantendo a compatibilidade com a base de dados existente.",
        features: [
            "Redesign completo da interface do sistema",
            "Padronização de componentes visuais",
            "Correção de inconsistências de usabilidade",
            "Melhoria na experiência do usuário",
            "Manutenção da compatibilidade com base existente"
        ],
        developmentProcess: [
            {
                title: "Análise do sistema legado",
                description: "Estudo detalhado do sistema existente para identificar pontos de melhoria e oportunidades de otimização."
            },
            {
                title: "Design e prototipagem",
                description: "Criação de wireframes e protótipos para validação das novas interfaces com os usuários."
            },
            {
                title: "Desenvolvimento front-end",
                description: "Implementação das novas interfaces utilizando PHP, CSS e JavaScript mantendo a integração com o back-end existente."
            },
            {
                title: "Testes e validação",
                description: "Testes rigorosos com usuários finais para garantir a usabilidade e funcionalidade do sistema."
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
    {
        slug: "java-ui",
        name: "Projeto Java UI",
        description: "Sistema de Gestão de Biblioteca desenvolvido em Java utilizando o padrão MVC com a variação MVCR.",
        fullDescription: "Sistema completo de gerenciamento de biblioteca desenvolvido em Java seguindo padrões arquiteturais modernos. O sistema permite cadastro de livros e usuários, controle de empréstimos e devoluções, gestão de reservas e relatórios administrativos. A interface foi construída com Java Swing seguindo princípios de UX.",
        features: [
            "Cadastro de livros e usuários",
            "Controle de empréstimos e devoluções",
            "Sistema de reservas integrado",
            "Relatórios administrativos",
            "Interface desktop com Java Swing"
        ],
        developmentProcess: [
            {
                title: "Planejamento e arquitetura",
                description: "Definição da arquitetura MVC com variação MVCR e planejamento das funcionalidades principais."
            },
            {
                title: "Design de interface",
                description: "Criação da interface desktop utilizando Java Swing com foco na experiência do usuário."
            },
            {
                title: "Desenvolvimento back-end",
                description: "Implementação da lógica de negócio utilizando Spring Boot e integração com banco de dados."
            },
            {
                title: "Testes e validação",
                description: "Testes unitários e de integração para garantir a qualidade do sistema."
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
    {
        slug: "studio-pet-care",
        name: "Studio Pet Care",
        description: "Landing page desenvolvida para o Studio Pet Care, com design UI/UX criado totalmente no Figma.",
        fullDescription: "Landing page moderna e responsiva desenvolvida para o Studio Pet Care, uma clínica veterinária. O projeto incluiu criação completa da identidade visual no Figma, desenvolvimento front-end com animações suaves e otimização para SEO. O site apresenta serviços, equipe, depoimentos e formulário de contato integrado.",
        features: [
            "Design responsivo para todos os dispositivos",
            "Animações suaves e interativas",
            "Otimização para SEO",
            "Formulário de contato integrado",
            "Seção de depoimentos de clientes"
        ],
        developmentProcess: [
            {
                title: "Pesquisa e discovery",
                description: "Análise do mercado e concorrência para definir a estratégia de design e conteúdo."
            },
            {
                title: "Design UI/UX no Figma",
                description: "Criação completa da identidade visual, wireframes e protótipos interativos."
            },
            {
                title: "Desenvolvimento front-end",
                description: "Implementação do design utilizando React, Tailwind CSS e TypeScript com foco em performance."
            },
            {
                title: "Otimização e lançamento",
                description: "Otimização para SEO, performance e experiência do usuário antes do deploy."
            }
        ],
        tags: ["React", "Tailwind CSS", "Figma", "TypeScript"],
        image: petImg,
        github: "https://github.com/Peddrinnz/Studio-Pet-Care",
        timeline: "1 mês",
        team: "1 desenvolvedor/designer",
        client: "Studio Pet Care",
        status: "Concluído"
    },
];

export default function Details() {
    const params = useParams();
    const slug = params.slug as string;
    
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

    return (
        <section className="min-h-screen bg-(--background) pt-20">
            <div className="border-b border-(--border)">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link 
                        href="/projects"
                        className="inline-flex items-center gap-2 text-(--primary-color) hover:text-(--primary-color)/80 transition-colors mb-6"
                    >
                        <ArrowLeft size={20} />
                        Voltar para Projetos
                    </Link>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl sm:text-5xl font-bold text-(--text) mb-4">
                                {project.name}
                            </h1>
                            <p className="text-xl text-(--secondary-text) leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="bg-(--cards) border border-(--border) rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-(--text) mb-4">Tecnologias</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span 
                                        key={i}
                                        className="px-3 py-1 bg-(--primary-color)/10 border border-(--primary-color)/20 rounded-md text-(--primary-color) text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <a
                                href={project.github}
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div className="bg-(--cards) border border-(--border) rounded-xl p-8">
                            <div className="relative w-full h-80 rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
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
                                {project.fullDescription}
                            </p>

                            <h3 className="text-xl font-semibold text-(--text) mb-4">
                                Principais funcionalidades
                            </h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
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
                                {project.developmentProcess.map((step, index) => (
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
                                <span className="text-(--text) font-medium">{project.status}</span>
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
                                    <p className="font-medium text-(--text)">{project.timeline}</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-(--secondary-text)">Equipe</p>
                                    <p className="font-medium text-(--text)">{project.team}</p>
                                </div>
                                
                                <div>
                                    <p className="text-sm text-(--secondary-text)">Cliente</p>
                                    <p className="font-medium text-(--text)">{project.client}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-(--primary-color) to-blue-600 rounded-xl p-6 text-white">
                            <h3 className="text-lg font-semibold mb-2">Transforme sua ideia em algo real!</h3>
                            <p className="text-white/80 text-sm mb-4">
                                Vamos trabalhar juntos no seu próximo projeto.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center w-full bg-white text-(--primary-color) px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                            >
                                Entrar em Contato
                            </Link>
                        </div>

                        <div className="text-center pt-6 border-t border-(--border)">
                            <p className="text-(--secondary-text) text-sm">
                                © 2025 Pedro Ernesto - Todos os direitos reservados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
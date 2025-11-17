'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import ParticlesBackground from '../custom/ParticlesBackground';
import Link from "next/link";
import Typewriter from '@/components/custom/TypeWriter';

const Hero = () => {
    const { language } = useLanguage();

    const heroContent = {
        pt: {
            title: "Olá, eu sou",
            name: "Pedro Ernesto",
            description: "Mais do que facilitar tarefas, busco transformar realidades por meio da tecnologia.",
            projects: "Ver projetos",
            downloadCV: "Baixar CV",
        },
        en: {
            title: "Hello, I'm",
            name: "Pedro Ernesto",
            description: "More than just facilitating tasks, I seek to transform realities through technology.",
            projects: "View projects",
            downloadCV: "Download CV",
        }
    };

    const content = heroContent[language];

    const roles = language === "pt"
        ? ["Designer UI/UX", "Desenvolvedor Front-end", "Experiência em Back-end"]
        : ["UI/UX Designer", "Front-End Developer", "Back-end Experience"];

    return (
        <section
            id="inicio"
            className="relative z-10 flex items-center bg-(--background) px-4 sm:px-6 lg:px-8 py-16 mt-20"
        >
            <ParticlesBackground />

            <div className="max-w-7xl w-full mx-auto relative z-50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="mb-4 lg:mb-6">
                            <span className="text-lg sm:text-xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent">
                                <Typewriter words={roles} />
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 lg:mb-4">
                            {content.title}
                        </h1>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
                            <span className="text-(--primary)">{content.name}</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-(--secondary-text) max-w-2xl mb-6 lg:mb-8 leading-relaxed">
                            {content.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/projects"
                                className="bg-(--button) px-6 py-3 rounded-md font-regular text-md hover:bg-(--hover-button) transition-colors border border-(--secondary-border) cursor-pointer flex items-center justify-center w-full sm:w-auto"
                            >
                                {content.projects}
                                <ArrowRight size={20} className="inline ml-2" />
                            </Link>

                            <a
                                href="/cv.pdf"
                                download="Pedro-Ernesto-CV.pdf"
                                className="flex items-center gap-2 border-2 border-(--border) px-6 py-3 rounded-md font-regular text-lg hover:border-(--hover-color) transition-colors cursor-pointer justify-center w-full sm:w-auto"
                            >
                                <Download size={20} />
                                {content.downloadCV}
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-(--border)">
                                <Image
                                    src="/me.jpeg"
                                    alt="Pedro Ernesto"
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
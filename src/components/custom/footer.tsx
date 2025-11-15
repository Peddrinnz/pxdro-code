'use client';

import { Mail, Github, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();
    const year = new Date().getFullYear();

    const footerContent = {
        pt: {
            call: "Transforme sua ideia em algo real!",
            rights: `© ${year} Pedro Ernesto · Todos os direitos reservados`
        },
        en: {
            call: "Turn your idea into something real!",
            rights: `© ${year} Pedro Ernesto · All rights reserved`
        }
    };

    const content = footerContent[language];

    return (
        <footer className="bg-(--secundary-background) px-4 sm:px-6 lg:px-8 py-10 border-t border-(--border)">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">

                <h3 className="text-xl font-semibold bg-linear-to-r from-(--primary-color) to-blue-500 bg-clip-text text-transparent">
                    {content.call}
                </h3>

                <div className="flex items-center gap-6 text-(--text)">
                    <a 
                        href="mailto:pedroesnarriaga@gmail.com"
                        className="hover:text-(--primary-color) transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={22} />
                    </a>

                    <a 
                        href="https://github.com/Peddrinnz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-(--primary-color) transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </a>

                    <a 
                        href="https://www.instagram.com/Peddrinnz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-(--primary-color) transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={22} />
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/pedroernestoberesn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-(--primary-color) transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </a>
                </div>

                <p className="text-sm text-(--secondary-text)">
                    {content.rights}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
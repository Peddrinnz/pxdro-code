'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Languages, Menu, X, ArrowLeft } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from '@/contexts/LanguageContext';
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();

    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const measure = () => {
            if (headerRef.current) {
                const rect = headerRef.current.getBoundingClientRect();
                setHeaderHeight(Math.ceil(rect.height));
            }
        };
        measure();
        window.addEventListener('resize', measure);
        const ro = new ResizeObserver(measure);
        if (headerRef.current) ro.observe(headerRef.current);
        return () => {
            window.removeEventListener('resize', measure);
            ro.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId: string, subSection?: string) => {
        if (subSection === 'formacao') {
            const experienceSection = document.getElementById('experiencia');
            if (experienceSection) {
                const timelineItems = experienceSection.querySelectorAll('.timeline-item');
                if (timelineItems.length >= 3) {
                    const formacaoItem = timelineItems[2];
                    const offsetTop = formacaoItem.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    setIsMenuOpen(false);
                    return;
                }
            }
        }

        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    const pathname = usePathname();
    const isProjectsPage = pathname === "/projects";

    const toggleLanguage = () =>
        setLanguage(language === 'pt' ? 'en' : 'pt');

    const navItems = [
        { id: "inicio", label: t('home') },
        { id: "sobre", label: t('about') },
        { id: "habilidades", label: t('skills') },
        { id: "experiencia", label: t('experience') },
        { id: "experiencia", label: t('education'), subSection: 'formacao' },
        { id: "contato", label: t('contact') }
    ];

    if (!mounted) return null;

    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-50 border-b border-(--border) px-4 sm:px-6 lg:px-8 py-4 opacity-80 transition-all
                ${isProjectsPage ? "bg-(--secundary-background)" : "bg-(--secundary-background)"}
            `}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {isProjectsPage ? (
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg hover:opacity-80 transition-opacity cursor-pointer"
                        >
                            <ArrowLeft size={20} />
                            {language === 'pt' ? 'Voltar para Home' : 'Back to Home'}
                        </Link>
                    ) : (
                        <h1
                            className="text-xl sm:text-2xl font-semibold cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => scrollToSection('inicio')}
                        >
                            {'{ Pxdro Code }'}
                        </h1>
                    )}

                    {!isProjectsPage && (
                        <nav className="hidden md:flex space-x-6 text-[18px]">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.id, item.subSection)}
                                    className="hover:underline underline-offset-4 transition-all duration-200 cursor-pointer hover:text-(--primary-color)"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    )}

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) cursor-pointer transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) cursor-pointer transition-colors"
                        >
                            <ReactCountryFlag
                                countryCode={language === 'pt' ? 'BR' : 'US'}
                                svg
                                style={{ width: '18px', height: '18px' }}
                            />
                            <span className="uppercase text-sm font-medium">{language}</span>
                            <Languages size={18} />
                        </button>
                    </div>

                    <div className="flex md:hidden items-center space-x-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) cursor-pointer transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {isProjectsPage ? (
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) cursor-pointer transition-colors"
                            >
                                <ReactCountryFlag
                                    countryCode={language === 'pt' ? 'BR' : 'US'}
                                    svg
                                    style={{ width: '18px', height: '18px' }}
                                />
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) cursor-pointer transition-colors"
                                >
                                    <ReactCountryFlag
                                        countryCode={language === 'pt' ? 'BR' : 'US'}
                                        svg
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </button>

                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) cursor-pointer transition-colors"
                                >
                                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            {!isProjectsPage && isMenuOpen && (
                <div
                    className="md:hidden fixed left-0 w-full z-40 bg-(--secundary-background) border-b border-(--border) px-4 py-4 opacity-95"
                    style={{ top: headerHeight }}
                >
                    <nav className="flex flex-col space-y-4 max-w-7xl mx-auto">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => scrollToSection(item.id, item.subSection)}
                                className="py-2 text-lg hover:underline underline-offset-4 text-left cursor-pointer hover:text-(--primary-color) transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 p-2 bg-(--background) border border-(--border) rounded-md hover:bg-(--hover-color) w-fit cursor-pointer transition-colors mt-2"
                        >
                            <ReactCountryFlag
                                countryCode={language === 'pt' ? 'BR' : 'US'}
                                svg
                                style={{ width: '18px', height: '18px' }}
                            />
                            <span className="uppercase text-sm font-medium">{language}</span>
                            <Languages size={18} />
                        </button>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
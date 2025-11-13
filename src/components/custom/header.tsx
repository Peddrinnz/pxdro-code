'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const toggleLanguage = () => {
        const newLanguage = language === 'pt' ? 'en' : 'pt';
        setLanguage(newLanguage);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { href: "#inicio", label: t('home') },
        { href: "#sobre", label: t('about') },
        { href: "#habilidades", label: t('skills') },
        { href: "#experiencia", label: t('experience') },
        { href: "#formacao", label: t('education') },
        { href: "#contato", label: t('contact') }
    ];

    return (
        <>
            <header className="bg-(--secundary-background) px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-(--border) relative">
                <h1 className="text-xl sm:text-2xl font-semibold">{'{ Pxdro Code }'}</h1>

                <nav className="hidden md:flex space-x-6 text-[18px]">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="hover:underline underline-offset-4 transition-all duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 hover:bg-(--hover-color) transition bg-(--background) border border-(--border) rounded-md cursor-pointer"
                        aria-label={t('toggleTheme')}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 p-2 hover:bg-(--hover-color) transition bg-(--background) border border-(--border) rounded-md cursor-pointer"
                        aria-label={t('toggleLanguage')}
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
                        className="p-2 hover:bg-(--hover-color) transition bg-(--background) border border-(--border) rounded-md cursor-pointer"
                        aria-label={t('toggleTheme')}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-(--hover-color) transition bg-(--background) border border-(--border) rounded-md cursor-pointer"
                        aria-label={isMenuOpen ? t('closeMenu') : t('openMenu')}
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </header>

            {isMenuOpen && (
                <div className="md:hidden bg-(--secundary-background) border-b border-(--border) px-4 py-4">
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:underline underline-offset-4 transition-all duration-200 py-2 text-lg"
                            >
                                {item.label}
                            </a>
                        ))}
                        
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 p-2 hover:bg-(--hover-color) transition bg-(--background) border border-(--border) rounded-md cursor-pointer w-fit mt-2"
                            aria-label={t('toggleLanguage')}
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
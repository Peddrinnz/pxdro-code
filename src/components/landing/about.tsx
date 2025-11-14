'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
    const { language } = useLanguage();

    const aboutContent = {
        pt: {
            title: "Sobre Mim",
            birth: "Nasci em 2004, no estado de Mato Grosso do Sul, Brasil. Atualmente estou formado em Análise e Desenvolvimento de Sistemas no Instituto Federal de Mato Grosso do Sul (IFMS). Iniciei minha jornada na área de tecnologia explorando diferentes nichos da programação, até me encontrar no desenvolvimento web. Além de um forte interesse por UI/UX design.",
            frontendTitle: "Desenvolvedor Front-End",
            frontendDesc: "Desenvolvedor Front-End com experiência em UI/UX Design. Minha especialização técnica reside em JavaScript/TypeScript e tenho proficiência em React.js. Utilizo Tailwind CSS para construir interfaces responsivas, priorizando consistentemente a usabilidade e a acessibilidade do usuário.",
            fullstackTitle: "Experiência Full Stack", 
            fullstackDesc: "Embora meu foco não seja o back-end, tenho experiência com Java e PHP (utilizando o framework Laravel) e possuo afinidade com bancos de dados MySQL e PostgreSQL.",
            years: "Anos de experiência",
            projects: "Projetos concluídos"
        },
        en: {
            title: "About Me",
            birth: "I was born in 2004, in the state of Mato Grosso do Sul, Brazil. I am currently graduated in Systems Analysis and Development at the Federal Institute of Mato Grosso do Sul (IFMS). I started my journey in the technology field exploring different programming niches, until I found myself in web development. In addition to a strong interest in UI/UX design.",
            frontendTitle: "Front-End Developer",
            frontendDesc: "Front-End Developer with experience in UI/UX Design. My technical specialization lies in JavaScript/TypeScript and I have proficiency in React.js. I use Tailwind CSS to build responsive interfaces, consistently prioritizing usability and user accessibility.",
            fullstackTitle: "Full Stack Experience",
            fullstackDesc: "Although my focus is not on back-end, I have experience with Java and PHP (using the Laravel framework) and have affinity with MySQL and PostgreSQL databases.",
            years: "Years of experience",
            projects: "Projects completed"
        }
    };

    const content = aboutContent[language];

    return (
        <section id="sobre" className="bg-(--secundary-background) px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    {content.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <p className="text-lg text-(--secondary-text) leading-relaxed">
                            {content.birth}
                        </p>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                {content.frontendTitle}
                            </h3>
                            <p className="text-lg text-(--secondary-text) leading-relaxed">
                                {content.frontendDesc}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                {content.fullstackTitle}
                            </h3>
                            <p className="text-lg text-(--secondary-text) leading-relaxed">
                                {content.fullstackDesc}
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center space-y-8">
                        <div className="text-center">
                            <div className="text-6xl font-bold text-(--primary) mb-2">2+</div>
                            <div className="text-xl text-(--secondary-text)">{content.years}</div>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-6xl font-bold text-(--primary) mb-2">34+</div>
                            <div className="text-xl text-(--secondary-text)">{content.projects}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
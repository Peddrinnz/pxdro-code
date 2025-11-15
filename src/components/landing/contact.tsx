'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Contact = () => {
    const { language } = useLanguage();

    const contactContent = {
        pt: {
            title: "Contato",
            subtitle: "Entre em contato",
            name: "Nome",
            email: "Email",
            message: "Mensagem",
            placeholderName: "Seu nome",
            placeholderEmail: "Seu e-mail",
            placeholderMessage: "Envie sua mensagem aqui...",
            send: "Enviar"
        },
        en: {
            title: "Contact",
            subtitle: "Get in touch",
            name: "Name",
            email: "Email",
            message: "Message",
            placeholderName: "Your name",
            placeholderEmail: "Your email",
            placeholderMessage: "Write your message here...",
            send: "Send"
        }
    };

    const content = contactContent[language];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form enviado:", formData);
    };

    return (
        <section id="contato" className="bg-(--background) px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-semibold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
                    {content.title}
                    <span className="block w-20 h-0.5 bg-(--text) mx-auto mt-2"></span>
                </h2>

                <p className="text-center text-(--primary-color) mb-12">
                    {content.subtitle}
                </p>

                <div className="bg-(--cards) shadow-md rounded-md p-8 border border-(--border) max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium">
                                {content.name} *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={content.placeholderName}
                                className="px-3 py-2 rounded-md border border-(--border) bg-(--background) focus:border-(--primary-color) outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium">
                                {content.email} *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={content.placeholderEmail}
                                className="px-3 py-2 rounded-md border border-(--border) bg-(--background) focus:border-(--primary-color) outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-medium">
                                {content.message}
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={content.placeholderMessage}
                                rows={4}
                                className="px-3 py-2 rounded-md border border-(--border) bg-(--background) focus:border-(--primary-color) outline-none resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-(--button) hover:opacity-90 hover:bg-(--hover-button) border border-(--secondary-border) cursor-pointer py-2 rounded-md transition"
                        >
                            {content.send}
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
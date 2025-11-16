import kdeImg from "../../../public/kde.svg";
import embrapaImg from "../../../public/empraba.png";
import javaImg from "../../../public/java.png";
import petImg from "../../../public/studiopetcare.svg";

const projects = [
    {
        slug: "kde",
        name: "Projeto KDÊ",
        description:
            "Aplicação web desenvolvida para facilitar o rastreamento de alunos dentro do campus, utilizando geolocalização, autenticação e um painel administrativo completo.",
        tags: ["Next.js", "TypeScript", "Tailwind", "API Routes"],
        image: kdeImg,
        github: "https://github.com/seuusuario/kde"
    },
    {
        slug: "embrapa",
        name: "Embrapa – Gestão da Informação",
        description:
            "Sistema desenvolvido como parte do estudo para o concurso da Embrapa, com foco em engenharia de infraestrutura, automação de processos e boas práticas de gestão da informação.",
        tags: ["Infraestrutura", "Automação", "Docker", "Arquitetura de Sistemas"],
        image: embrapaImg,
        github: "https://github.com/seuusuario/embrapa"
    },
    {
        slug: "java-library",
        name: "Sistema de Biblioteca em Java",
        description:
            "Sistema desktop construído em Java utilizando o padrão MVC/MVCR, permitindo cadastro de usuários, livros, empréstimos, devoluções, validações e controle de persistência.",
        tags: ["Java", "Swing", "MVC", "MySQL"],
        image: javaImg,
        github: "https://github.com/seuusuario/library-system"
    },
    {
        slug: "studio-pet-care",
        name: "Studio Pet Care",
        description:
            "Website moderno e responsivo para uma clínica veterinária, com seções animadas, cards interativos e integração com avaliações de clientes.",
        tags: ["React", "Tailwind", "UI/UX", "Animations"],
        image: petImg,
        github: "https://github.com/seuusuario/studio-pet-care"
    }
];

export default projects;
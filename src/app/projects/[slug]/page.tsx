import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import Details from "@/components/details/details";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params }: ProjectPageProps) {
    return (
        <div>
            <Header />
            <Details />
            <Footer />
        </div>
    );
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    
    const projects = [
        { slug: "kde", name: "Projeto KDÊ", description: "Sistema Web desenvolvido para auxiliar o processo de inventário de bens patrimoniais do IFMS" },
        { slug: "siginf", name: "Projeto SIGINF", description: "Responsável pela atualização completa da interface do SIGINF" },
        { slug: "java-ui", name: "Projeto Java UI", description: "Sistema de Gestão de Biblioteca desenvolvido em Java" },
        { slug: "studio-pet-care", name: "Studio Pet Care", description: "Landing page desenvolvida para o Studio Pet Care" },
    ];
    
    const project = projects.find(p => p.slug === slug);
    
    return {
        title: project ? `${project.name} - Pedro Ernesto` : "Projeto Não Encontrado",
        description: project?.description,
    };
}

export async function generateStaticParams() {
    return [
        { slug: "kde" },
        { slug: "siginf" },
        { slug: "java-ui" },
        { slug: "studio-pet-care" },
    ];
}
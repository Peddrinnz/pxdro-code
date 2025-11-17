import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background) px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-(--primary) mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-(--text) mb-4">Página não encontrada</h2>
        <p className="text-(--secondary-text) mb-8 max-w-md">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-(--button) px-6 py-3 rounded-lg hover:bg-(--hover-color) border border-(--border-color) transition-colors"
        >
          <Home size={20} />
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
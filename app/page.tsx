import Calendario from "./componentes/Calendario";
import TarjetaGuardia from "./componentes/Tarjetaguardia";
import { NewsCard } from "./componentes/NewsCard";
import noticias from "./db/noticias.json";
import { Key } from "react";

export default function App() {
    return (
        <>
            <main className="flex flex-col items-center">
                <h2 className="text-2xl font-bold pb-6">Farmacia de Guardia:</h2>
                <TarjetaGuardia />
                <Calendario  />
                <h2 className="text-2xl font-bold">Eventos</h2>
                <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-black mb-4">Vinaròs News</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Les últimes notícies i esdeveniments de Vinaròs</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {noticias.map((noticia: { titulo: string; descripcion: string; imagen: string; fecha: string; enlace: string; }, index: Key | null | undefined) => (
                            <NewsCard
                            key={index}
                            title={noticia.titulo}
                            description={noticia.descripcion}
                            image={noticia.imagen}
                            createdAt={noticia.fecha}
                            url={noticia.enlace}
                            />
                        ))}
                    </div>
                </div>
                </div>
                
            </main>
        </>
    );
}
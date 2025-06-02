import Calendario from "./componentes/Calendario";
import TarjetaGuardia from "./componentes/Tarjetaguardia";   

export default function App() {
    return (
        <>
            <main className="flex flex-col items-center">
                <h2 className="text-2xl font-bold pb-6">Farmacia de Guardia:</h2>
                <TarjetaGuardia />
                <Calendario  />
                <h2 className="text-2xl font-bold">Eventos</h2>
                
            </main>
        </>
    );
}
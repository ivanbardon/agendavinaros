import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import noticias from "@/app/db/noticias.json"

export default function Noticias() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6">Noticias</h1>
            {noticias.map((noticia) => (
                <Card key={noticia.titulo} className="w-10/12">
                    <CardHeader>
                        <CardTitle>{noticia.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{noticia.descripcion}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}


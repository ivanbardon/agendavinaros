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
        <Card className="w-10/12">
            <CardHeader>
                <CardTitle>Noticias</CardTitle>
            </CardHeader>
            <CardContent>
                {noticias.map((noticia) => (
                    <p key={noticia.titulo}>{noticia.titulo}</p>
                ))}
            </CardContent>
        </Card>
    )
}


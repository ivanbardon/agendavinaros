import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Datos de ejemplo - en una aplicación real vendrían de una base de datos
const newsData = {
  "avances-inteligencia-artificial": {
    title: "Avances en Inteligencia Artificial transforman la industria tecnológica",
    description:
      "Las últimas innovaciones en IA están revolucionando sectores desde la medicina hasta la educación, prometiendo cambios significativos en la próxima década.",
    image: "/placeholder.svg?height=400&width=800",
    createdAt: "2024-01-15",
    content: `
      <p class="mb-4">La inteligencia artificial continúa evolucionando a un ritmo acelerado, transformando industrias enteras y redefiniendo la manera en que interactuamos con la tecnología. Los últimos avances en machine learning y procesamiento de lenguaje natural están abriendo nuevas posibilidades que parecían ciencia ficción hace apenas unos años.</p>
      
      <p class="mb-4">En el sector médico, los algoritmos de IA están ayudando a los profesionales de la salud a diagnosticar enfermedades con mayor precisión y rapidez. Sistemas de análisis de imágenes médicas pueden detectar anomalías que el ojo humano podría pasar por alto, mientras que los modelos predictivos ayudan a anticipar brotes de enfermedades.</p>
      
      <p class="mb-4">La educación también está experimentando una revolución silenciosa. Plataformas de aprendizaje adaptativo utilizan IA para personalizar la experiencia educativa de cada estudiante, identificando áreas de mejora y ajustando el contenido según el ritmo de aprendizaje individual.</p>
      
      <p class="mb-4">Sin embargo, estos avances también plantean importantes desafíos éticos y sociales. La necesidad de regulación, la protección de la privacidad y el impacto en el empleo son temas que requieren atención urgente de gobiernos, empresas y la sociedad en general.</p>
    `,
  },
  "politicas-ambientales-carbono": {
    title: "Nuevas políticas ambientales buscan reducir emisiones de carbono",
    description:
      "Gobiernos de todo el mundo implementan medidas más estrictas para combatir el cambio climático y alcanzar objetivos de sostenibilidad.",
    image: "/placeholder.svg?height=400&width=800",
    createdAt: "2024-01-14",
    content: `
      <p class="mb-4">Los gobiernos mundiales están intensificando sus esfuerzos para combatir el cambio climático mediante la implementación de políticas ambientales más estrictas y ambiciosas. Estas nuevas medidas buscan reducir significativamente las emisiones de carbono y acelerar la transición hacia una economía más sostenible.</p>
      
      <p class="mb-4">Entre las iniciativas más destacadas se encuentran los nuevos impuestos al carbono, incentivos para energías renovables y regulaciones más estrictas para las industrias altamente contaminantes. Estas políticas representan un cambio fundamental en la aproximación gubernamental hacia la crisis climática.</p>
    `,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params
  const news = newsData[slug as keyof typeof newsData]

  if (!news) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a noticias
          </Button>
        </Link>

        <Card className="bg-white">
          <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4" />
              <time dateTime={news.createdAt}>{formatDate(news.createdAt)}</time>
            </div>

            <h1 className="text-4xl font-bold text-black mb-6 leading-tight">{news.title}</h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">{news.description}</p>

            <div className="mb-8">
              <Image
                src={news.image || "/placeholder.svg"}
                alt={news.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            <div className="text-gray-800 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>
        </Card>
      </div>
    </div>
  )
}

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"

interface NewsCardProps {
  title: string
  description: string
  image: string
  createdAt: string
  url: string
}

export function NewsCard({ title, description, image, createdAt, url }: NewsCardProps) {
  // Función para truncar la descripción y eliminar "Llegeix més"
  const formatDescription = (desc: string) => {
    const cleanDesc = desc.replace("Llegeix més", "").trim()
    return cleanDesc.length > 150 ? cleanDesc.substring(0, 150) + "..." : cleanDesc
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200 h-full flex flex-col">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={createdAt}>{createdAt}</time>
        </div>

        <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{formatDescription(description)}</p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors mt-auto"
        >
          Llegir notícia completa
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </Card>
  )
}

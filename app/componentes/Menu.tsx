import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose, DrawerDescription } from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"
import Link from "next/link"

import { MenuIcon, ArrowLeftFromLineIcon } from "lucide-react"


export default function Menu() {
    return (
        <>
        <Drawer direction="left">
            <DrawerTrigger className="fixed top-3 left-3">
                <MenuIcon size={24} />
            </DrawerTrigger>
            <DrawerContent className="text-2xl">
                <DrawerHeader>
                    <DrawerClose className="absolute top-2 right-2">
                        <ArrowLeftFromLineIcon size={24} />
                        </DrawerClose>
                    <DrawerTitle>
                        <Link href="/">Agenda Vinaros</Link>
                    </DrawerTitle>
                    <DrawerDescription className="flex flex-col gap-2">
                        <Button variant="ghost"><Link href="/Noticias">Noticias</Link></Button>
                        <Button variant="ghost"><Link href="/Eventos">Eventos</Link></Button>
                        <Button variant="ghost"><Link href="/Guardia">Guardia</Link></Button>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    );
}

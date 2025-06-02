import Menu from "./Menu"
import Link from "next/link"

export default function BarraNav() {
    return (
        <>
            <div className="pb-16"></div>
            <div className="flex items-center justify-center border-b py-2 fixed top-0 left-0 right-0">
                <Menu />
                <h1 className="text-3xl font-bold">
                    <Link href="/">Agenda Vinaros</Link>
                </h1>
            </div>
        </>
    );
}

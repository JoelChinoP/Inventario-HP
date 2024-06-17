'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    return (
        <nav className="text-white bg-gray-900 pt-1">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="group flex items-center space-x-3 rtl:space-x-reverse">
                <div className="relative group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
                    <Image
                    src="/logo.png"
                    alt="logo"
                    width={32}
                    height={32}
                    />
                </div>
                <span className="self-center text-2xl font-semibold whitespace-nowrap group-hover:filter group-hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
                    HP-Computer
                </span>
            </Link>

                <div className="flex flex-col md:flex-row">
                    <Enlace ruta="/" nombre="Inicio" pathname={pathname}/>
                    <Enlace ruta="/about" nombre="Sobre Nosotros" pathname={pathname}/>
                    <Enlace ruta="/search" nombre="Búsqueda" pathname={pathname}/>
                    <Enlace ruta="/contact" nombre="Contacto" pathname={pathname}/>
                </div>
            </div>
        </nav>
    )
}


function Enlace({ ruta, nombre, pathname }) {
    const isActive = pathname === ruta && pathname !== "/";
    console.log(pathname)

    return (
        <Link
            href={ruta}
            className={`mr-8 block py-2 px-3 rounded md:border-0 md:p-0
                ${isActive ? "text-blue-300" : ""}
                md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}
        >
            {nombre}
        </Link>
    )
}
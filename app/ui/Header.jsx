import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/images/logo.png" alt="logo" width={32} height={32}/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HP-Computer</span>
                </Link>

                <div className="flex flex-col md:flex-row">
                    <Enlace ruta="/" nombre="Inicio" />
                    <Enlace ruta="/about" nombre="Sobre Nosotros" />
                    <Enlace ruta="/search" nombre="Búsqueda" />
                    <Enlace ruta="/contact" nombre="Contacto" />
                </div>
            </div>
        </nav>
    )
}


function Enlace({ruta, nombre}) {
    return (
        <Link
            href={ruta}
            className="mr-8 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
        {nombre}
        </Link>
    )
}
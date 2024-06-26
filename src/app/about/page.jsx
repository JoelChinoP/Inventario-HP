import Image from "next/image";

export default function Page() {
    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">Sobre Nosotros</h1>

                <div className="text-center mb-16 mx-48">
                    <p className="text-xl mb-6">
                        Somos una empresa de servicio técnico enfocada en brindar soluciones
                        innovadoras y de vanguardia a nuestros clientes. Nuestro compromiso es
                        impulsar el crecimiento y el éxito de las organizaciones a través de la
                        tecnología.
                    </p>
                </div>

                <MisVis />

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mx-20">
                    <h2 className="text-2xl font-semibold mb-6">Valores y Principios</h2>
                    <div className="flex items-center px-10">
                        <Image src="/valores.png" alt="logo" width={250} height={250}/>
                        <ul className="space-y-4">
                            <ValoresLista titulo={"Innovación:"} texto={" Fomentamos la creatividad y la búsqueda constante de nuevas soluciones."} />
                            <ValoresLista titulo={"Excelencia:"} texto={" Nos esforzamos por brindar servicios y productos de la más alta calidad."} />
                            <ValoresLista titulo={"Integridad:"} texto={" Actuamos con honestidad, transparencia y responsabilidad en todas nuestras acciones."} />
                            <ValoresLista titulo={"Colaboración:"} texto={" Trabajamos en equipo para lograr los mejores resultados para nuestros clientes."} />
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

function MisVis ({mision, texto}) {
    return (
        <div className="grid md:grid-cols-2 gap-12 mb-16 mx-20">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Misión</h2>
                <p>
                    Nuestra misión es ser líderes en la transformación digital,
                    ofreciendo soluciones tecnológicas que impulsen la
                    productividad, la eficiencia y la innovación en nuestros
                    clientes.
                </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Visión</h2>
                <p>
                    Nuestra visión es convertirnos en el socio tecnológico de
                    confianza para las empresas que buscan alcanzar sus
                    objetivos estratégicos y mantener una ventaja competitiva
                    en el mercado.
                </p>
            </div>
        </div>
    );
}

function ValoresLista ({titulo, texto}) {
    return (
        <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong>{titulo}</strong> {texto}</span>
        </li>
    );
}
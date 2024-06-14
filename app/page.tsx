import Image from 'next/image';

export default function Page() {
  const services = [
    { icon: '🔧', title: 'Reparación de PC', description: 'Reparamos todo tipo de problemas en tus equipos de cómputo.' },
    { icon: '🛠️', title: 'Mantenimiento Preventivo', description: 'Evitamos problemas futuros con nuestro servicio de mantenimiento.' },
    { icon: '⬆️', title: 'Actualización de Hardware y Software', description: 'Mejoramos el rendimiento de tu equipo con las últimas actualizaciones.' },
    { icon: '💾', title: 'Recuperación de Datos', description: 'Rescatamos tu información importante de dispositivos dañados.' },
    { icon: '🔌', title: 'Venta de Repuestos', description: 'Contamos con una amplia variedad de repuestos y accesorios.' },
    { icon: '👥', title: 'Soporte Técnico', description: 'Nuestro equipo de expertos está listo para ayudarte.' },
  ];

  return (
    <main className="bg-gray-900 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center px-10">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Servicios Técnicos de Calidad</h1>
              <p className="mb-6 mr-20">En HP COMPUTER E.I.R.L. ofrecemos soluciones integrales para el mantenimiento y reparación de tus equipos de cómputo.</p>
              <a href="#servicios" className="py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 rounded cursor-pointer transition-all duration-1000">
                Conoce nuestros Servicios
              </a>
            </div>
            <div className="md:w-1/3">
            <Image src="/images/image-home.png" alt="logo" width={1000} height={1000} className='w-auto  h-100 '/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id='servicios'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
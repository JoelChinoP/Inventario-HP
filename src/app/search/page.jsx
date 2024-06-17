"use client";
import { useState } from 'react';

export default function EquipmentSearchPage() {
    const [showEquipmentInfo, setShowEquipmentInfo] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setShowEquipmentInfo(true);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Búsqueda de Equipos</h1>

                <form onSubmit={handleSearch} className="mb-8">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Ingresa el código de tu equipo"
                            className="flex-grow px-4 py-2 rounded-l-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            Buscar
                        </button>
                    </div>
                </form>

                {showEquipmentInfo && (
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Estado del Equipo</h2>
                        <div className="space-y-2">
                            <p><span className="font-medium">Código de Equipo:</span> ABC123</p>
                            <p><span className="font-medium">Estado:</span> <span className="text-green-400">En Reparación</span></p>
                            <p><span className="font-medium">Fecha estimada de entrega:</span> 15/06/2023</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
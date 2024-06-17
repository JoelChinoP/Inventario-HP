"use client";

import React, { useState } from 'react';

export default function Page() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        // Por ahora, solo simularemos un envío
        console.log(formData);
        
        // Simular una espera como si estuviéramos enviando datos
        await new Promise(resolve => setTimeout(resolve, 1000));

        alert('Mensaje enviado correctamente!');
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-8">Contáctanos</h1>
                <p className="text-center text-gray-400 mb-8">
                    Si tiene alguna pregunta o necesita más información, no dude en comunicarse con nosotros.
                </p>

                <div className="bg-gray-800 shadow rounded-lg p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 border-gray-600 text-white"
                                placeholder="Ingrese su nombre"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparentbg-gray-700 bg-gray-700 border-gray-600 text-white"
                                placeholder="Ingrese su correo electrónico"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 border-gray-600 text-white"
                                placeholder="Escriba su mensaje aquí"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
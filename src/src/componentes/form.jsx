import React, { useState } from 'react';
import { sendFormData } from '../servicios/api';

const Form = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        descripcion: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await sendFormData(form);
        alert('Formulario enviado con éxito!');
        setForm({ nombre: '', apellido: '', email: '', descripcion: '' });
        } catch (err) {
        alert('Error al enviar el formulario');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
            <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
            name="nombre"
            id="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="apellido" className="text-sm font-medium text-gray-700 mb-1">Apellido</label>
            <input
            name="apellido"
            id="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="descripcion" className="text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
            name="descripcion"
            id="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
        </div>

        <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
        >
            Enviar
        </button>
        </form>
    );
};

export default Form;

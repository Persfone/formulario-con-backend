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
        <form onSubmit={handleSubmit} className="form">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;

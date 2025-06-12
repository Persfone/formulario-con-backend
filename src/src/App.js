import React from 'react';
import Form from './componentes/form';
import './index.css';
import './tailwind.output.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-extrabold mb-8 text-center text-purple-700 tracking-wide drop-shadow-md">
          Formulario de Registro
        </h1>
        <Form />
      </div>
    </div>
  );
}

export default App;

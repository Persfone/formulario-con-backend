import React from 'react';
import Form from './componentes/form';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Formulario de Registro</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;

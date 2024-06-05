import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import Indices from './Indices';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setimc] = useState(null);
  const [message, setMessage] = useState('');

  const calculateimc = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100;
      const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
      setimc(imc);
      let message = '';
      if (imc < 18.5) {
        message = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        message = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        message = 'Acima do peso';
      } else {
        message = 'Obesidade';
      }
      setMessage(message);
    } else {
      alert('Por favor, não tente nos enganar, coloque os valores corretos.');
    }
  };

  return (
    <>
    <Header />
    <About />
      <div className="flex items-center justify-center pb-10 bg-gray-300">
        <div className="bg-white p-8 shadow-md w-full max-w-sm rounded-2xl">
          <div className="mb-8 flex flex-col">
            <label className="flex justify-center text-xl font-bold text-gray-700">Peso (kg)</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="mt-1 block w-full text-center font-bold px-3 py-2 border border-gray-300 rounded-md"/>
          </div>

          <div className="mb-8">
            <label className="flex justify-center text-xl font-bold text-gray-700">Altura (cm)</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="mt-1 block w-full text-center font-bold px-3 py-2 border border-gray-300 rounded-md"/>
          </div>

          <div className='flex justify-center pt-2'>
            <button
              onClick={calculateimc}
              className="bg-blue-500 text-white font-bold uppercase px-4 py-2 rounded">
              Calcular
            </button>
          </div>

          {imc && (
            <div className="text-white text-center mt-10 p-5 bg-cyan-600 rounded-md">
              <h2 className="text-lg font-bold">Seu IMC é:</h2>
              <div>
                <span className='text-[40px] font-black'>{imc}</span>
              </div>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
      <Indices />
    </>
  );
}

export default App;

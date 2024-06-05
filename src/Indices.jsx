

const Indices = () => {
    return (
        <div>
            <div className='flex justify-center bg-gray-300 pb-10'>
                <div className='p-5 text-left max-w-sm bg-cyan-600 rounded-2xl text-white'>
                    <h1 className='text-2xl font-bold mb-2'>Categorias de IMC</h1>
                    <h2 className="text-ml font-semibold mb-4">Segundo a Organização Mundial da Saúde (OMS), as categorias são:</h2>
                    <div className="text-left">
                        <li><span className="font-bold">Abaixo do peso:</span> IMC menor que 18,5.</li>
                        <li><span className="font-bold">Peso normal:</span> IMC entre 18,5 e 24,9.</li>
                        <li><span className="font-bold">Sobrepeso:</span> IMC entre 25 e 29,9.</li>
                        <li><span className="font-bold">Obesidade Grau I:</span> IMC entre 30 e 34,9.</li>
                        <li><span className="font-bold">Obesidade Grau II:</span> IMC entre 35 e 39,9.</li>
                        <li><span className="font-bold">Obesidade Grau III (obesidade mórbida):</span> IMC maior ou igual a 40.</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indices;
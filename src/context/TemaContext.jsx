// TemaContext.js
import React, { createContext, useState } from 'react';

// Criação do contexto para o tema
export const TemaContext = createContext();

// todo componente é uma função
//criação do componente que irá prover o contexto
//props é um objeto que possui propriedades, e tem uma propriedade especial, children, que não precisa passar o props, é uma desestruturação, simnplificando o código sem precisar colocar o children como valor do props
export function TemaProvider({ children }) {
  //estado da tela
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

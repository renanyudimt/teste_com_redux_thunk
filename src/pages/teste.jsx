import React from 'react'
import { useSelector } from "react-redux";

const Teste = () => {
  const { counter, name } = useSelector(state => state.myState);

  return (
    <div className="p-10 flex flex-col">
      <p className="mb-4">O nome final é: {name}</p> 
      <p>o numero de vezes que foi alterado é de: {counter}</p>
    </div>
  );
}

export default Teste;
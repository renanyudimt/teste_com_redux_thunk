import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  changeName
} from "./../actions"

const Teste = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, counter, name, error } = useSelector(state => state.myState);
  const [currentName, setCurrentName] = useState(name);

  function handleChangeName() {
    dispatch(changeName(currentName, counter))
  }

  return (
    loading ? (
      <div className="flex items-center justify-center py-20">Loading...</div>
    ) : (
      error ? (
        <div className="flex items-center justify-center py-20">Erro na API</div>
      ) : (
        <div className="container mx-auto p-10 flex flex-col">
          <div className="flex items-center">
            <label htmlFor="counter">Counter</label>
            <input type="number" id="counter" className="ml-4" placeholder="counter" value={counter} disabled/>
          </div>
          <div className="flex items-center mt-6">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="ml-4 p-2" 
              placeholder="text" 
              value={currentName} 
              onChange={(e) => setCurrentName(e.target.value)}
            />
          </div>
          <button onClick={handleChangeName} className="shadow bg-blue-400 rounded-xl p-2 text-base w-40 text-white mt-2 transition duration-300 hover:bg-blue-600">
            Mudar nome
          </button>
          <button onClick={() => router.push("/teste")} className="shadow bg-blue-400 rounded-xl p-2 text-base w-40 text-white mt-2 transition duration-300 hover:bg-blue-600">
            Navegar para outra tela e ver que consigo acessar o redux com escopo global
          </button>
        </div>
      )
    ) 
  )
}

export default Teste;
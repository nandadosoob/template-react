import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

export function Home() {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <div
      className={`w-screen min-h-screen p-8 ${
        tema === "claro" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-2xl font-bold">Aplicação de Tema Claro e Escuro</h1>
      <button
        onClick={alternarTema}
        className={`px-4 py-2 mt-4 rounded ${
          tema === "claro" ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
        }`}
      >
        Alternar para o tema {tema === "claro" ? "escuro" : "claro"}
      </button>
    </div>
  );
}

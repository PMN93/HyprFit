import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InitExerc = () => {

  const [groups, setGroups] = useState([]);

useEffect(() => {
  const email = localStorage.getItem("Email");

  if (email === "pedro.mora.neto1993@gmail.com") {
    setGroups([
      { id: "a", name: "Peito" },
      { id: "b", name: "Braço" },
      { id: "c", name: "Perna" },
      { id: "d", name: "Costa" },
      { id: "e", name: "Ombro" },
    ]);
  } else if (email === "nataliacelso@yahoo.com.br") {
    setGroups([
      { id: "a", name: "Pernas e Glúteos" },
      { id: "b", name: "Costas e Ombros" },
      { id: "c", name: "Pernas e Glúteos" },
      { id: "d", name: "Braços e Peito" },
      { id: "e", name: "Glúteos e Posterior de Coxa - 2" },
    ]);
  } else {
    setGroups([]); // Garante que groups sempre tenha um valor
  }
}, []);
  
  
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-gray-100 transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col w-full items-center justify-center bg-black py-8 shadow-lg">
        <p className="text-white font-bold text-5xl mb-4">Treinos</p>
      </div>

      {/* Cards de treino */}
      <div className="flex flex-wrap w-full p-10 gap-8 items-center justify-center">
        {groups.map((group) => (
          <Link to={"/exerc"} key={group.id}>
            <div
              className="bg-white w-64 h-64 rounded-3xl flex flex-col border border-gray-300 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              onClick={() => {
                localStorage.setItem("grupo", group.name.toLowerCase());
                localStorage.setItem("id", group.id);
              }}
            >
              <div className="flex flex-col w-full p-4">
                <p className="text-2xl font-bold text-gray-700">
                  {group.id.toUpperCase()}
                </p>
              </div>
              <div className="flex flex-col w-full h-full p-4 items-center justify-center">
                <p className="text-3xl font-bold text-gray-900">
                  {group.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InitExerc;

import React from "react";
import CardCriador from "./CardCriador";

const criadores = [
  {
    nome: "Giovani Sant'Ana",
    position: "Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid ",
    img: "https://picsum.photos/200",
  },
  {
    nome: "Sandor Torres",
    position: "Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid ",
    img: "https://picsum.photos/200",
  },
  {
    nome: "Lorem",
    position: "Dev",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, grid ",
    img: "https://picsum.photos/200",
  },
];

function Criadores() {
  return (
    <div className="mx-[20px] md:mx-[40px]">
      <div className="grid grid-cols-2 gap-4">
        {criadores.map((criador) => (
          <CardCriador
            nome={criador.nome}
            position={criador.position}
            img={criador.img}
            description={criador.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Criadores;

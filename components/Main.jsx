import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* LIST DE ARTISTAS */}
        <ItemList title="Artistas" items={10} />

      {/* LIST DE MUSICAS */}
      <ItemList title="Musicas" items={20}/>
    </div>
  );
};

export default Main;

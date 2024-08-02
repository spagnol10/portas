import Presente from "../../components/Presente";
import Porta from "../../components/Porta";
import PortaModel from "../../model/PortaModel";
import { useState } from "react";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));
  const [texto, setTexto] = useState("...");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      {/* <Presente /> */}
      <Porta value={p1} onChange={(newDoor) => console.log(newDoor)} />   
    </div>
  );
}

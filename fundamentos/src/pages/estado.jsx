import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {
  const [numero, setNumero] = useState(0)

  function Incrementar (){
    setNumero(numero + 1);
  };

  return (
    <Layout titulo='Componente estado'>
      <h2>{numero}</h2>
      <button onClick={Incrementar}>Incrementar</button>
    </Layout>
  )
}

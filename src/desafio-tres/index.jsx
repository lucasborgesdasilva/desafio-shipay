import { useState } from "react";

export const Desafio3 = () => {
  const [products, setProducts] = useState();

  return (
    <>
      <h1>Desafio 3</h1>
      <img 
        src="src/desafio-tres/assets/ErrorLog.png" 
        alt="console error message"
        style={{ marginBlock: '8px' }}
      />

      {products && products.map(item => (
        <h1 key={item.id}>
          {item.name}
        </h1>
      ))}
    </>
  )
}
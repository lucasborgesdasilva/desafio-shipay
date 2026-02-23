import { useState } from 'react';
import { ProductsList } from './pages/desafio-um/components/product-list';

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1>Desafio 1 - Filtro de Itens</h1>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'end', 
        gap: '8px',
        marginBottom: '8px'
      }}>
        <input 
          name='search' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          style={{
            padding: '8px',
            color: 'black',
            background: 'white',
            border: 'none',
            borderRadius: '9px',
            outline: '1px solid #DDD',
          }}
          placeholder='Buscar...'
        />
      </div>

      <ProductsList search={search} />

      {/* Apenas para visualização */}
      {/* <Desafio3 /> */}
    </>
  )
}

export default App

import { useMemo, useState } from 'react';
import { data } from '../data';
import { Desafio3 } from './desafio-tres';
import { ProductsList } from './desafio-um/components/products-list';

export const App = () => {
  const [search, setSearch] = useState("");

  const SearchedProducts = useMemo(() => {
    const filteredData = data.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    })

    return !filteredData.length ? data : filteredData
  }, [search]);

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
        <label htmlFor="search">Pesquisar:</label>
        <input 
          name='search' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <ProductsList data={SearchedProducts} />

      <Desafio3 />
    </>
  )
}

export default App

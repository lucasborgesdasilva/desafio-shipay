import { data } from '../data'
import { ProductsList } from './components/products-list'

export const App = () => {
  return (
    <>
      <h1>Filtro de Itens</h1>

      <ProductsList  data={data} />
    </>
  )
}

export default App

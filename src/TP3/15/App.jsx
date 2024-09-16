import Product from './Product';

function App() {
  return (
    <div>
      <Product nome="Cadeira Gamer" preco={799.99} descricao="Uma cadeira confortável para longas horas de jogo." />
      <Product nome="Mousepad RGB" preco={59.99} />
    </div>
  );
}

export default App;
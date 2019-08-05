import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/05/D12-9119-405/D12-9119-405_detalhe1.jpg?resize=280:280"
          alt="Tênis Nike Nightgazer Masculino"
        />
        <strong>
          Tênis Nike Revolution 4 Masculino quando o texto é enorme de grande e
          temos que fazer um teste de posicionamento
        </strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/05/D12-9119-405/D12-9119-405_detalhe1.jpg?resize=280:280"
          alt="Tênis Nike Nightgazer Masculino"
        />
        <strong>Tênis Nike Revolution 4 Masculino</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/05/D12-9119-405/D12-9119-405_detalhe1.jpg?resize=280:280"
          alt="Tênis Nike Nightgazer Masculino"
        />
        <strong>Tênis Nike Revolution 4 Masculino</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/05/D12-9119-405/D12-9119-405_detalhe1.jpg?resize=280:280"
          alt="Tênis Nike Nightgazer Masculino"
        />
        <strong>Tênis Nike Revolution 4 Masculino</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/05/D12-9119-405/D12-9119-405_detalhe1.jpg?resize=280:280"
          alt="Tênis Nike Nightgazer Masculino"
        />
        <strong>Tênis Nike Revolution 4 Masculino</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/05/D12-9119-405/D12-9119-405_detalhe1.jpg?resize=280:280"
          alt="Tênis Nike Nightgazer Masculino"
        />
        <strong>Tênis Nike Revolution 4 Masculino</strong>
        <span>R$ 179.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

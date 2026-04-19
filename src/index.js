import { addToCart, removeFromCart, getCartItems, calculateTotalPrice} from './cart.js';
import { precos_produtos, nomes_produtos, codigos_Barras } from './elements.js';
import {Item} from './item.js';

let itens_disponiveis = [];

for (let i = 0; i < nomes_produtos.length; i++) {
    const item = new Item(nomes_produtos[i], precos_produtos[i], codigos_Barras[i]);
    itens_disponiveis.push(item);
}

addToCart(itens_disponiveis[1]);
addToCart(itens_disponiveis[14]);
addToCart(itens_disponiveis[4]);

removeFromCart(itens_disponiveis[14]);

getCartItems().forEach(item => {
    console.log(`Item: ${item.nome}, Preço: R$${item.preco.toFixed(2)}, Código de Barras: ${item.codBarras}`);
});

console.log(`Preço Total: R$${calculateTotalPrice().toFixed(2)}`);
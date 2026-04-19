let cartStorage = [];

function addToCart(item) {
    cartStorage.push(item);
}
function removeFromCart(item) {
    const index = cartStorage.indexOf(item);
    if (index > -1) {
        cartStorage.splice(index, 1);
    }
}
function getCartItems() {
    return cartStorage;
}
function calculateTotalPrice() {
    return cartStorage.reduce((total, item) => total + item.preco, 0);
}

export { addToCart, removeFromCart, getCartItems, calculateTotalPrice, cartStorage };
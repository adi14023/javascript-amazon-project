export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
},{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
}];

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);

    addedMessage.classList.add('added-to-cart-visible');

    setTimeout(() =>{
      addedMessage.classList.remove('added-to-cart-visible');
    },2000);

    const quantity = Number(quantitySelector.value);

    if(matchingItem){
        matchingItem.quantity+=quantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity
        });
    }

}
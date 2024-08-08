export const cart = [];

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
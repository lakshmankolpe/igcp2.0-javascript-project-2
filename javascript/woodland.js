
function increment() {
    const quantityElement = document.getElementById('quantitynumber');
    let quantitytext = parseInt(quantitynumber.innerText);
    const pricetext = document.getElementById('price-text');

    const pricetotal = document.getElementById('price-total')

    if (quantitytext < 10) {
        quantityElement.innerText = ++quantitytext;

    }
    else {
        alert("You can not increase quantity above 10.")
    }

    pricetext.innerText = ` Price :  ${quantitytext} X  ₹ 499`;
    pricetotal.innerText = `Total ₹ : ${quantitytext * 499}`;
}


function decrement() {
    const quantityElement = document.getElementById("quantitynumber");
    let quantitytext = parseInt(quantitynumber.innerText)
    const pricetext = document.getElementById('price-text');
    const pricetotal = document.getElementById('price-total')

    if (quantitytext > 1) {
        quantityElement.innerText = --quantitytext;
    }
    else {
        alert("You can't descrese quantity less than 1")
    }
    pricetext.innerText = ` Price : ${quantitytext} X ₹ 499`;
    pricetotal.innerText = `Total ₹ : ${quantitytext * 499}`;

}
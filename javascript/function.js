function inc() 
{
    const quantitytext = document.getElementById("quantitytext");
    let quantity = parseInt(quantitytext.innerText);
    const pricetext = document.getElementById("pricetext");
    const pricetotal = document.getElementById("pricetotal")
    
    if (quantity < 10) {
        quantitytext.innerText = ++quantity;
    } else {
        alert("You can't buy more than 10");
    }
    pricetext.innerText = (`${quantity} X 319000 `) 
    pricetotal.innerText = (Total : ₹${quantity * 319000}/-) 
}

function dec()
 {
    const quantitytext = document.getElementById("quantitytext");
    let quantity = parseInt(quantitytext.innerText);
    const pricetext = document.getElementById("pricetext");

    if (quantity > 1) {
        quantitytext.innerText = --quantity;
    } else {
        alert("You can't buy less than 1");
    }
    pricetext.innerText = (`${quantity} X 3,19,000 `)  
    pricetotal.innerText = (Total : ₹${quantity * 319000}/-)
}


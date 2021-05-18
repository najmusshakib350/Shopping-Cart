let products=[
    {
        name:"Grey T-shirt",
        tag:'greytshirt',
        price:15,
        inCart:0
    },
    {
        name:"Whit T-shirt",
        tag:'whitetshirt',
        price:20,
        inCart:0
    },
    {
        name:"Black T-shirt",
        tag:'Blacktshirt',
        price:50,
        inCart:0
    }
  
];


let carts =document.querySelectorAll('.shop-item-button');

for(let i= 0; i< carts.length ; i++){
   carts[i].addEventListener('click', ()=>{
       cartNumbers(products[i]);
   })
}


function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}


function cartNumbers(product){
    let productNumbers= localStorage.getItem('cartNumbers');

    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent=productNumbers +1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product);
}

function setItems(product){
   let cartItems =localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);

   if(cartItems != null){
       if(cartItems[product.tag] === undefined){
           cartItems={
               ...cartItems,
               [product.tag]:product
           }
       }
       cartItems[product.tag].inCart +=1;
   }
   else{
       product.inCart = 1;
       cartItems = {
           [product.tag]:product
       }
   }
   localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();
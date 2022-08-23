let products = [];
let arrayItems =[];
let ShowProduct=[];
let countAuth = 0;
let countOld  = 0;
let countSk8  = 0;
let countSlip = 0;

const containerProducts = document.querySelector(".products");
const addItemCard = document.querySelector(".card-total");
const addNumberCard = document.querySelector(".theme");
const totalPrice = document.querySelector("total-price");
const insertProducts = (products) => {
  containerProducts.innerHTML = products
    .map((product) => {
      const { id, image, name, price, stock } = product;
      return `
      <div class="card-product">
        <button class="add" onclick="addProductToCart(${id})">+</button>
        <div class="product-image">
          <img src=${image}>
          </div>

        <div class="product-data">
          <div class="product-price">
            <h2>$${price}</h2>
            <span> <b>Stock: </b>${stock}</span>
          </div>
          <span class="product-name">
            ${name}
          </span>
        </div>
      </div>
    `;
    })
    .join(" ");
};

const getProducts = async () => {
  const res = await fetch("/src/data.json");
  const productList = await res.json();

  insertProducts(productList);
  products = [...productList];
};

getProducts();

const objToString = (object) =>{
  return JSON.stringify(object);
}

 const stringToObj = (string) =>{
   return JSON.parse(string);
 }

let newArrayProduct ;
let a =[] ;
const addProductToCart = (id) => {
  const select = products.find((items) => items.id === id);
  const stringProduct = objToString(select);
  countProduct(id);

  const unitsProduct = stringToObj(localStorage.getItem('quantity'));
  const unitQuantity = [...unitsProduct];
  localStorage.removeItem("quantity");
  newArrayQuantity =`{"id":${select.id},"name": "${select.name}","quantity":${unitQuantity[id-1].count},"price":${select.price},"stock":${select.stock},"image":"${select.image}"}`
  localStorage.setItem(id,newArrayQuantity);
  const converArray = stringToObj(newArrayQuantity);
  showAllProduct();
};
let counterUnits =[];

const countProduct = (id) => {
  const select = products.find((items) => items.id === id);
   if(id == 1){
     countAuth++;
   }else if(id == 2){
     countOld++;
   }else if(id == 3){
     countSk8++;
   }else{
     countSlip++;
   }
 counterUnits[0] = {id :1,count:countAuth};
 counterUnits[1] = {id :2,count:countOld};
 counterUnits[2] = {id :3,count:countSk8};
 counterUnits[3] = {id :4,count:countSlip};
 const quantityProduct = localStorage.setItem('quantity',objToString(counterUnits));
}
 const showAllProduct = () =>{
   for(let i=0; i<localStorage.length;i++) {
     let key = localStorage.key(i);
     ShowProduct.push(stringToObj(localStorage.getItem(key)));
      addItemCard.innerHTML = ShowProduct
    .map((item) => {
      const { id, image, name, price,quantity} = item;
      return`
      <div class="add-card-product">
       <div class="add-card-product-image">
         <img src=${image} alt="20">
       </div>
       <div class="add-card-product-data">
         <span class="add-card-product-name">${name}</span>
         <div class="add-card-product-price">
           <span><b>Subtotal: </b>$${price*quantity}</span>
           <span><b>Quantity: </b>${quantity}</span>
         </div>
       </div>
       <button>x</button>
     </div>
    `
    }).join('');
   }
 }
 showAllProduct();
let totalProduct = [];
 const totalPriceCard = () =>{
  for(let i=0; i<localStorage.length;i++) {
     let key = localStorage.key(i);
    totalProduct.push(stringToObj(localStorage.getItem(key)));
  }
  console.log(totalProduct[1].quantity);;
}
totalPriceCard();
  const addItemProducts = (item) => {
  const getItem = objToString(localStorage.getItem(item));
  arrayItems.push(getItem);
  let newArrayItems = [...arrayItems];
   addItemCard.innerHTML = newArrayItems
   .map((item) => {
     const { id, image, name, price, stock } = item;
      return`
     <div class="add-card-product">
      <div class="add-card-product-image">
        <img src=${image} alt="20">
      </div>
      <div class="add-card-product-data">
        <span class="add-card-product-name">${name}</span>
        <div class="add-card-product-price">
          <span><b>Subtotal: </b>${price}</span>
          <span><b>Quantity: </b>2</span>
        </div>
      </div>
      <button>x</button>
    </div>
   `
   }).join('');
 };

 function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
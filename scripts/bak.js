// // console.log("hola we");
// // localStorage.setItem('nombre','jean');
// // const localObj = {
// //   name:"jose",
// //   id :"123"
// // }

// // const converObj = JSON.stringify(localObj)

// // localStorage.setItem('user',converObj);
// // const user = localStorage.getItem('user');
// // //console.log(user.name);
// // const converObj2 = JSON.parse(user);
// // console.log(converObj2.id);


// const btn = document.querySelector('button');
// console.log('trabajando con localstorage');

// const themeUsed = localStorage.getItem('theme');

//   themeUsed =='dark'?
//   btn.textContent = 'Light Mode'
//   :btn.textContent = 'Dark Mode';

//   themeUsed == "dark"?
//   document.body.style.background = "#2c2c2c"
//   :document.body.style.background ="#e3e3e3";

// if(localStorage.getItem('theme') == ""){
//   localStorage.setItem('theme','light');
// }
// btn.addEventListener('click',() => {
//   const themeUsed = localStorage.getItem('theme');
//   themeUsed == "dark"?
//   localStorage.setItem('theme','light')
//   :localStorage.setItem('theme','dark');

//   themeUsed == "dark"?
//   document.body.style.background ="#e3e3e3"
//   :document.body.style.background = "#2c2c2c";

//   themeUsed =='dark'?
//   btn.textContent = 'Dark Mode'
//   :btn.textContent = 'Light Mode'
// })

// //Protocol HTTP

// fetch('https://e-commerce-api-academlo.herokuapp.com/api/products',
// {method:"GET"}
// )
// .then((response) => response.json())
// .then(data => console.log(data))

fetch("../src/data.json")
.then((response) => response.json())


const cardsProduct = document.querySelector(".products");
function insertProducts(products){
  cardsProduct.innerHTML = products.map((product)=>{
    const {id, image,name,price,stock} = product
    return `
      <div class="card-product">
        <Button class="add" onclick="selectProduct(${id})">+</Button>
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
    `
  }).join(' ')
}

const selectProduct = (id) => {
  
}


/* addToCard.forEach((addToCardButton)=>{
  addToCardButton.addEventListener('click',addToCardClicked);
  
})

function addToCardClicked(event){
  addToCard.forEach((a)=>{
    console.log[a];
  })
  const button = event.target;
  const item = button.closest('.card-product');
  const price = item.querySelector('.product-price2').textContent;
  const image = item.querySelector('.p-image').src;
  const name = item.querySelector('.product-name').textContent;
  const stock = item.querySelector('.product-stock').textContent;
  itemToCard(price,image,name,stock);
}

function itemToCard(price,image,name,stock){
  const converPrice = parseInt(price.replace("$",""),0);
  const converStock = parseInt(stock.replace("Stock: ",""),0);

  const product = {
   id: 1,
   price: converPrice,
   image: image,
   name: name,
   stock: converStock
 }
  console.log(product);
} */
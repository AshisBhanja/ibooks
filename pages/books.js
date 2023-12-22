const products = [
    { id: 1, name: 'Product 1', price: 19.99,img:"https://rukminim2.flixcart.com/image/612/612/ktketu80/book/a/8/s/how-to-love-yourself-original-imag6w4fw4zmaccs.jpeg?q=70" },
    { id: 2, name: 'Product 2', price: 29.99 ,img:"https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/e/x/how-to-read-a-person-like-a-book-original-imagh7bg9rkr9f73.jpeg?q=70"},
    { id: 3, name: 'Product 3', price: 39.99,img:"https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/c/q/l/rapunzel-read-it-yourself-with-ladybird-original-imag7jvmxx5tzc4g.jpeg?q=70" },
    { id: 4, name: 'Product 4', price: 399.99,img:"https://rukminim2.flixcart.com/image/612/612/k0plpjk0/book/4/1/2/cambridge-language-assessment-assessing-vocabulary-original-imafkgagh3k7hn2s.jpeg?q=70" },
    { id: 4, name: 'Product 5', price: 6556.99,img:"https://rukminim2.flixcart.com/image/612/612/jp8ngcw0-1/book/3/6/5/the-econometricians-original-imafbj6nxffcyywm.jpeg?q=70" },
    { id: 4, name: 'Product 6', price: 399.99,img:"https://rukminim2.flixcart.com/image/612/612/l5jxt3k0/book/6/2/x/book-club-a-journal-original-imagg6zmfakevegm.jpeg?q=70" },
    { id: 4, name: 'Product 7', price: 399.99,img:"https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/book/2/g/s/the-east-was-read-original-imagewk6ywtgekwm.jpeg?q=70" }
];

const cartData=[]
// Function to display products
const addtocart=(id,name,img)=>{
   cartData.push({id:id,name:name,img:img})
   console.log(cartData);
   displayProducts()
   
}

//
document.getElementById('cll').innerHTML = "bjb";

function displayProducts() {
    const productsContainer = document.getElementById('products');
   // productsContainer.innerHTML = '';
    const cartno = document.getElementById('cartno');
   if(cartData.length==null){ cartno.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i>  cart(0})`}
   else{
    cartno.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i>  cart(${cartData.length})`
   }

   //show all books
   
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-3');
        productCard.innerHTML = `
        
        
            <div class="card text-center mt-3">
                
                <div class="card-body">
                <img class="card-img-top product_img" src="${product.img}" alt="">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-success btn-sm" onClick="addtocart(${product.id},'${product.name}','${product.img}')">add to cart</button>
                </div>
            </div>
      
           
        
        `;
        productsContainer.appendChild(productCard);
    });
}

// Function to add a product to the cart (this is a simple example)
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

// Display products when the page loads
displayProducts();
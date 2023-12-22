const products = [
    { id: 1, name: 'Product 1', price: 20,img:"https://rukminim2.flixcart.com/image/612/612/ktketu80/book/a/8/s/how-to-love-yourself-original-imag6w4fw4zmaccs.jpeg?q=70" },
    { id: 2, name: 'Product 2', price: 30 ,img:"https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/e/x/how-to-read-a-person-like-a-book-original-imagh7bg9rkr9f73.jpeg?q=70"},
    { id: 3, name: 'Product 3', price: 40,img:"https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/c/q/l/rapunzel-read-it-yourself-with-ladybird-original-imag7jvmxx5tzc4g.jpeg?q=70" },
    { id: 4, name: 'Product 4', price: 400,img:"https://rukminim2.flixcart.com/image/612/612/k0plpjk0/book/4/1/2/cambridge-language-assessment-assessing-vocabulary-original-imafkgagh3k7hn2s.jpeg?q=70" },
    { id: 4, name: 'Product 5', price: 600,img:"https://rukminim2.flixcart.com/image/612/612/jp8ngcw0-1/book/3/6/5/the-econometricians-original-imafbj6nxffcyywm.jpeg?q=70" },
    { id: 4, name: 'Product 6', price: 300,img:"https://rukminim2.flixcart.com/image/612/612/l5jxt3k0/book/6/2/x/book-club-a-journal-original-imagg6zmfakevegm.jpeg?q=70" },
    { id: 4, name: 'Product 7', price: 500,img:"https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/book/2/g/s/the-east-was-read-original-imagewk6ywtgekwm.jpeg?q=70" }
,{ id: 1, name: 'Product 1', price: 20,img:"https://rukminim2.flixcart.com/image/612/612/ktketu80/book/a/8/s/how-to-love-yourself-original-imag6w4fw4zmaccs.jpeg?q=70" },
{ id: 2, name: 'Product 2', price: 30 ,img:"https://rukminim2.flixcart.com/image/612/612/xif0q/book/m/e/x/how-to-read-a-person-like-a-book-original-imagh7bg9rkr9f73.jpeg?q=70"},
{ id: 3, name: 'Product 3', price: 40,img:"https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/c/q/l/rapunzel-read-it-yourself-with-ladybird-original-imag7jvmxx5tzc4g.jpeg?q=70" },
{ id: 4, name: 'Product 4', price: 400,img:"https://rukminim2.flixcart.com/image/612/612/k0plpjk0/book/4/1/2/cambridge-language-assessment-assessing-vocabulary-original-imafkgagh3k7hn2s.jpeg?q=70" },
{ id: 4, name: 'Product 5', price: 600,img:"https://rukminim2.flixcart.com/image/612/612/jp8ngcw0-1/book/3/6/5/the-econometricians-original-imafbj6nxffcyywm.jpeg?q=70" },
{ id: 4, name: 'Product 6', price: 300,img:"https://rukminim2.flixcart.com/image/612/612/l5jxt3k0/book/6/2/x/book-club-a-journal-original-imagg6zmfakevegm.jpeg?q=70" },
{ id: 4, name: 'Product 7', price: 500,img:"https://rukminim2.flixcart.com/image/612/612/l3vxbbk0/book/2/g/s/the-east-was-read-original-imagewk6ywtgekwm.jpeg?q=70" }

  ];

cartData=[]
const carno=document.getElementById('cartno');
const cart_list=document.getElementById('cart_list')
const carttotal=document.getElementById('sum')

//show cart item



carno.innerHTML=`<i class="fa fa-shopping-cart" aria-hidden="true"></i> cart (${cartData.length})`
let list =
document.getElementById('products');
const total=document.getElementById('total');
var sum=0

const addtocart=(id,name,price,img)=>{
    cartData.push({id:id,name:name,price:price,img:img})
    alert("book has been added to cart")
    sum=cartData.reduce((n, {price}) => n + parseInt(price), 0)
    total.innerHTML=`<div class="text-center mt-3">
    <h5 class="text-white">Total : ${sum} rs</h5>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modelId">
    check out
  </button>
  

  </div>`
  carttotal.innerHTML=`Total : ${sum} rs`
    carno.innerHTML=`<i class="fa fa-shopping-cart" aria-hidden="true"></i> cart (${cartData.length})`
    console.log(cartData);
    let ctm=cartData.map(x=>{
      return  `
      <div class="card">
     <div class="row">
     <div class="col-4">
     <img class="product_cart_img bg-info" src=${x.img} >
 </div>
 <div class="col-8 p-2">
 <p> Book name : ${x.name}</p>
 <p>Price : ${x.price} rs</p>
 </div>
     </div>
     </div>
      
      `

      
    })
    
    
    cart_list.innerHTML=ctm
}

let ul = `<div class="row">${products.map(data =>
    `<div class="col-md-3">
    <div class="card text-white mt-2 text-center product_card">
    
    <div class="card-body">
    <img class="card-img-top product_img" src=${data.img} alt="">
      <h5 class="card-title text-dark mt-1">${data.name}</h5>
      <p class="card-text  text-dark">${data.price} rs</p>
      <button class="btn btn-success btn-sm" onClick="addtocart(${data.id},'${data.name}','${data.price}','${data.img}')">add to cart</button>
    </div>
  </div>
    </div>`).join('')}
          </div>`;

// Set the inner HTML of the list container
list.innerHTML = ul;


const crt=document.getElementById('crt')
const chg=document.getElementById('chg')
const openc=(e)=>{
 crt.classList.toggle('hide')

}
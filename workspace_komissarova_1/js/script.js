/*
// ES6
const goods = [
  {title: 'Shirt', price: 150},
  {title: 'Socks', price: 50},
  {title: 'Jacket', price: 350},
  {title: 'Shoes', price: 250},
];

const renderGoodsItem = (title = "Кошка", price = 5) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

let renderGoodsList = (list) => {  
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList; 
}  

alert(renderGoodsItem());
renderGoodsList(goods);
*/



// ES5
var goods = [
  {title: 'Shirt', price: 150},
  {title: 'Socks', price: 50},
  {title: 'Jacket', price: 350},
  {title: 'Shoes', price: 250},
];

function renderGoodsItem(title, price) {
    var itemElem = document.createElement("div");
    itemElem.className = "goods-item";
    itemElem.innerHTML = "<h3>" + title + "</h3>" + "<p>" + price + "</p>";    
    return itemElem;    
}

function renderGoodsList(list) {
   var listElem = document.querySelector(".goods-list");
   for(var i = 0; i < list.length; i++) { 
        listElem.appendChild(renderGoodsItem(list[i].title, list[i].price));     
   }  
   return listElem; 
}

renderGoodsList(goods);










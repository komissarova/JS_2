class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
        {title: 'Shirt', price: 150},
        {title: 'Socks', price: 50},
        {title: 'Jacket', price: 350},
        {title: 'Shoes', price: 250},
    ];
  }
  render() {
    let listHtml = '' ;
    this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price);
        listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  countTotalPrice() {
    let totalPrice = 0;
    for(let i = 0; i < this.goods.length; i++) {
        totalPrice += this.goods[i].price;
    }
    return totalPrice;
  }
  renderTotalPrice() {
    let priceHtml = '';
    priceHtml += this.countTotalPrice();
    let basketButton = document.querySelector('.cart-button');
    /*basketButton.addEventListener("click", function() {
             document.querySelector('.goods-price').innerHTML = `Суммарная стоимость всех товаров: ${priceHtml}.`;});
*/

// вариант со стрелочной функцией
   basketButton.addEventListener("click", () => {
             document.querySelector('.goods-price').innerHTML = `Суммарная стоимость всех товаров: ${priceHtml}.`;}); 
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.renderTotalPrice();
   



/* для класса Корзины товаров понадобятся метод подсчёта количества товаров, положенных в корзину, метод подсчёта общей цены выбранных товаров, метод очистки корзины, 
*/
class Basket {
   constructor() {
     this.products = [];
   }
}

/* для класса Элемента корзины товаров понадобятся метод добавления выбранных товаров в корзину
*/

class BasketItem {
   constructor() {
     this.item = [];
   }
}


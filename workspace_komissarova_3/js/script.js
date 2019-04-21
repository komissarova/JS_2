// вариант с callback

/*
function makeGETRequest(url, callback) {
  var xhr;

  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if(window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }
 
  xhr.open('GET', url, true);
  xhr.send();
}
*/

// вариант с Promise  

function makeGETRequest(url) {
  var xhr;

  if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if(window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }       

  return new Promise(function(resolve, reject) {
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
       if(xhr.readyState === 4) {   
          resolve(xhr.responseText);
       } //else {
         // reject(xhr.statusText);
       //}
    };
    xhr.timeout = 3000;
    xhr.ontimeout = function () {
       console.log("Сервер слишком долго не отвечает");
    };
    xhr.onerror = function(error) {
      reject(error);
    };
    xhr.send();
  });
}

// задержка ответа от сервера

function delay(url) {
   return new Promise(function(resolve, reject) {
     console.log("Ждём ответа сервера");
     setTimeout(function() {
       Math.random() > .8 ? resolve(url) : reject ('Слишком долго');
     }, 3000);
   });
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

delay(API_URL)
  .then(url => console.log("Ура"),
        answer => console.log(answer));

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

// кусок кода для варианта с callback

/*
  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      cb();
    })
  }
*/

// кусок кода для варианта с Promise

  fetchGoods() {
    makeGETRequest(`${API_URL}/catalogData.json`)
     .then(response => {
          this.goods = JSON.parse(response);
     })
     .then(() => this.render())
     .then(() => this.renderTotalPrice())
     .catch(error => console.log(error));
  }

  render() {
    let listHtml = '' ;
    this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price);
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
    basketButton.addEventListener("click", () => {
             document.querySelector('.goods-price').innerHTML = `Суммарная стоимость всех товаров: ${priceHtml}.`;}); 
    } 
}

const list = new GoodsList();

// вызов для варианта с Promise
list.fetchGoods();

// вызов для варианта с callback

/*
list.fetchGoods(() => {
  list.render();
  list.renderTotalPrice();
});
*/


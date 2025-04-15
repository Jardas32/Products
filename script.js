const block = document.querySelector('.textContent');
const count = document.querySelector('.count');

// const list = ('http://jsonplaceholder.typicode.com/posts'); 100 пользователей
// https://swapi.dev/api/films  фильмы  
// https://jsonplaceholder.typicode.com/users 10 пользщыателей

            //   Запрос на сервер чисел

// async function showInfo() {
//   const response = await fetch('https://swapi.dev/api/films')
//       if(response.ok) {
//         const data = await response.json();
//         let arr = Array(data);
//         arr.forEach((item, index)  => {
//          let atext = document.createElement('a');
//          atext.setAttribute('class', 'aText');
//          atext.textContent = `${item.results[0].characters[2]}`;
//          block.append(atext);
//             console.log(item.results[0].characters[11]);
//         })
      
//         // console.log(data);
//         // console.log(data.results[1].characters);
//         // console.log(data.results[1].planets);
//       }
//       else {
//         console.log('ERROR HTTPS ' + response.status);
//       }
// }
// showInfo();


// fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response) => {
//         return response.json()
//      })
//      .then((data) => {
// // console.log(data);
//    function render() {
//       block.innerHTML = ``;
//       document.querySelector('.count').textContent = data.length;
//       data.forEach((item, index) => {
      
//       if(item.id ) {
//          document.querySelector('.textContent').classList.add('gridsclass');
//          let newuser = document.createElement('div');
//          newuser.setAttribute('class', 'users');
//          newuser.innerHTML = `
//          <p class="title">${item.name}</p>
//          <p class="pbody">${item.username}</p>
//          <span class="userid">${item.email}</span>
//          <button data-index="${index}" class="btclosed">X</button>
//          `
//          block.append(newuser);
//       }
    
//     })
//  } 

// render();
     

//                   //  Удаление пользователей

//       document.onclick = (e) => {
//          const position = e.target.getAttribute('data-index');
//          if(e.target.classList.contains('btclosed') && position !== null) {
//             data.splice(position, 1);
//             render();
//          }
//       }

// });



// fetch('http://jsonplaceholder.typicode.com/posts')
//      .then((response) => {
//         return response.json()
//      })
//      .then((data) => {

//    function render() {
//       block.innerHTML = ``;
//       document.querySelector('.count').textContent = data.length;
//       data.find(item => {
//          let id = item.userId;

//          if(item.userId === 2) {
//             // console.log(item);
          
//          }
//          else {
//             // console.log(`Пользователя с таким ID нет!!!`);
//          }
//       })
//       data.forEach((item, index) => {
//       // console.log(item);
//       let userId = item.userId;

//       // console.log(userId);
//       if(item) {
//          document.querySelector('.textContent').classList.add('gridsclass');
//          let newuser = document.createElement('div');
//          newuser.setAttribute('class', 'users');
//          newuser.innerHTML = `
//          <p class="title">${item.title}</p>
//          <p class="pbody">${item.body}</p>
//          <span class="userid">${item.id}</span>
//          <button data-index="${index}" class="btclosed">X</button>
//          `
//          block.append(newuser);
//       }
//       else {
//         // document.querySelector('.count').textContent = 0;
//         block.textContent = `Такого пользователя нет...!`;
//         // let ptext = document.createElement('p');
//         // ptext.setAttribute('class', 'textNO');
//         // ptext.textContent = `Такого пользователя нет...!`;
//         // block.append(ptext);
//       }
   
//     })
//  }

// render();

//                   //  Удаление пользователей

//       document.onclick = (e) => {
//          const position = e.target.getAttribute('data-index');
//          if(e.target.classList.contains('btclosed') && position !== null) {
//             alert('Удалить пользователя???');
//             data.splice(position, 1);
//             render();
//          }
//       }

// });


               //   Работа с товарами Fetch


// fetch('/databasa.json') 
//    .then((response) => {
//       return response.json();
//    })
//     .then((data) => {

// function priceQantity() {
//       let totalPrice = data.reduce((pre, item) => {
//             return pre + item.price * item.quantity;
//          },0)

//          count.textContent = `${totalPrice} $`;

//       }

//         function renderProduct() {
//              block.innerHTML = ``;
//              data.forEach((item, index) => {
//                console.log(item.quantity);
//                let {id, title, price, image, quantity = 1} = item;
//                 let newProduct = document.createElement('div');
//                 newProduct.setAttribute('class', 'product');
//                 newProduct.innerHTML = `
//                 <img class="imgcart" src="${image}">
//                 <p class="titlecart">${title}</p>
//                 <span class="price">${price * quantity}$</span>
//                 <div class="counts">
//                   <span data-index="${index}" class="spanMinus">-</span>
//                   <span>${quantity}</span>
//                   <span data-index="${index}" class="spanPlus">+</span>
//                 </div>
//                 <button data-index="${index}" class="btclos">X</button>
//                 ` 
//                block.appendChild(newProduct);
//          })

//       priceQantity();   

//    }

// block.addEventListener('click', (e) => {
//    const index = e.target.dataset.index;
//    if(e.target.classList.contains('spanPlus')) {
//       data[index].quantity++;
     
//    }
//    else if(e.target.classList.contains('spanMinus')) {
//       data[index].quantity--;
//       if(data[index].quantity <= 0) {
//          data.splice(index, 1);
//       }
//    }
//    renderProduct();
         
// });

// renderProduct();


//                      //  Удаление товаров
 
// document.onclick = (e) => {
//    const cartPosition = e.target.getAttribute('data-index');
//    if(e.target.classList.contains('btclos') && cartPosition !== null) {
//       data.splice(cartPosition, 1);
//       renderProduct();
//    }
// }

// });

                        // Числа сторик
                        
// let numb = '10 000';
// let numb2 = '20 000';
// let priceNamb = parseInt(numb.replace(/\s/g, ''));
// let priceNamb2 = parseInt(numb2.replace(/\s/g, ''));
// let res = priceNamb + priceNamb2;
// console.log(res);
// let resString = res.toLocaleString('ru');
// console.log(resString);


function priceQantity() {
      let totalPrice = products.reduce((pre, item) => {
            return pre + item.price * item.quantity;
         },0)

         count.textContent = `${totalPrice} $`;

      }

        function renderProduct() {
             block.innerHTML = ``;
             products.forEach((item, index) => {
               let {id, title, price, image, quantity = 1} = item;
                let newProduct = document.createElement('div');
                newProduct.setAttribute('class', 'product');
                newProduct.innerHTML = `
                <img class="imgcart" src="${image}">
                <p class="titlecart">${title}</p>
                <span class="price">${price * quantity}$</span>
                <div class="counts">
                  <span data-index="${index}" class="spanMinus">-</span>
                  <span>${quantity}</span>
                  <span data-index="${index}" class="spanPlus">+</span>
                </div>
                <button data-index="${index}" class="btclos">X</button>
                ` 
               block.appendChild(newProduct);
         })

      priceQantity();

   }
console.log(products)
block.addEventListener('click', (e) => {
   const index = e.target.dataset.index;
   if(e.target.classList.contains('spanPlus')) {
      products[index].quantity++;
     
   }
   else if(e.target.classList.contains('spanMinus')) {
      products[index].quantity--;
      if(products[index].quantity <= 0) {
         products.splice(index, 1);
      }
   }

   renderProduct();
         
});

renderProduct();

                     //  Удаление товаров
 
document.onclick = (e) => {
   const cartPosition = e.target.getAttribute('data-index');
   if(e.target.classList.contains('btclos') && cartPosition !== null) {
      products.splice(cartPosition, 1);
      renderProduct();
   }
};



// const newCarts = [

// {
//     id: 1,
//     name: 'Alex',
//     age: 20
// },
// {
//   id: 2,
//   name: 'Nik',
//   age: 33
// },
// {
//   id: 3,
//   name: 'Zak',
//   age: 25
// },
// {
//   id: 4,
//   name: 'Micky',
//   age: 17
// },

// ];

// let newProduct = 
//   {
//     id: 5,
//     name: 'Tim',
//     age: 28
// };



// newCarts.forEach((item, index) => {

//   if(item.age === 17) {
//     // newCarts.pop();
//     newCarts.splice(3, 1)
//     newCarts.push(newProduct);
//   }

// });

// console.log(newCarts);


// async function getData() {

//     let response = await fetch('https://jsonplaceholder.typicode.com/photos')
//     let data = await response.json();

//     if(response.ok) {
//       function renders() {
//         block.innerHTML = ``;
//         count.textContent = `Users`;
//  data.forEach((item, index) => {
         
//           if(item.id <= 20) {
//              let users = document.createElement('div');
//              users.setAttribute('class', 'user');
//              users.innerHTML = `
//              <p class="title">${item.title}</p>
//              <a href="${item.url}" class="url">${item.url}</a>
//              <a href="userinfo.html" class="bnailUrl">${item.thumbnailUrl}</a>
//              <button data-index="${index}" class="bt">X</button>
//              `
//              block.append(users);
//           }
//         })
//       }
//        renders();
//     }
//     else {
//         console.log('HTTPS... ERROR... ' + response.status);
//     }

//                   //  Delete-users               

// document.onclick = (e) => {
//   const position = e.target.getAttribute('data-index');
//   if(e.target.classList.contains('bt') && position !== null) {
//       data.splice(position, 1);
//       renders();
//   }
// }

// } 

// getData();
    

//   "5555": {
//       "id": 1,
//       "title": "Цепная пила аккумуляторная",
//       "price": 1500,
//       "imges": "https://cdn.gwshop.ru/image/cache/650-486/product/2007807-1.png",
// },
//   "6666": {
//       "id": 2,
//       "title": "Складная ручная пила",
//       "price": 799,
//       "imges": "https://grn-tools.com.ua/image/cache/catalog/0_TOVARY/5_tajima/1_TOVARY/NOZHOVKY/GK-G2101-1000x1000__1_-removebg-preview-1000x1000.png",
// }

              //  Метод POST

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(newCarts),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8' 
//   },

// })
//      .then((response) => {
//         return response.json();
//      })
//      .then((data) => {
//       // console.log(data);
//       let arrData = Array(data);

//        arrData.forEach((item) => {
//         if(item.id  === 100) {
//            console.log(item[1]);
            
//         }else {
//            console.log(`Такого пользователя нет.`);
//         }
        
//        })

//      });


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data)
//     })










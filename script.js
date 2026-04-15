const menuContainer = document.getElementById("menu-container");
const orderBtn = document.getElementById("orderBtn");

async function getMenu() {
  try {
    const res = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    const data = await res.json();

    displayMenu(data);
  } catch (err) {
    console.log("Error fetching menu:", err);
  }
}

// Display menu items
function displayMenu(items) {
  menuContainer.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.imgSrc}" />
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
    `;

    menuContainer.appendChild(card);
  });
}

//2. Take Order
function TakeOrder() {
  return new Promise((resolve) => {
   setTimeout(() => {
        const burgers = [
          { name: "Cheese Burger", price: 5.99 },
          { name: "Veggie Burger", price: 6.49 },
          { name: "Bacon Burger", price: 7.49 },
          { name: "Chicken Burger", price: 6.99 },
          { name: "Mushroom Burger", price: 6.79 },
          { name: "Double Cheese Burger", price: 8.99 },
          { name: "BBQ Burger", price: 7.99 },
          { name: "Fish Burger", price: 7.29 },
          { name: "Turkey Burger", price: 6.49 },
          { name: "Spicy Burger", price: 7.49 }
        ];
  
        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }

        console.log("Order Placed:");
        console.log(randomBurgers);
  
        resolve(randomBurgers);
      }, 2500);
  });
}

//3. Order Preparation
function orderPrep(order) {
  return new Promise((resolve) => {
    // setTimeout(() => {
    //   console.log("Order is being prepared...");
    //   resolve({ ...order, status: "prepared" });
    // }, 1500);
     setTimeout(() => {
        console.log('Order Prepration Status:');
        let orderPrepObj = {order_status:true, paid:false}
        console.log(orderPrepObj);
        resolve(orderPrepObj);
      },1500);
  });
}

// 4. Pay Order
function payOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log('Payment Status:');
        let payOrderObj = {order_status:true, paid:true};
        console.log(payOrderObj);
        resolve(payOrderObj);
      }, 1000);
  });
}

// 5. Thank You Function
function thankyouFnc() {
 alert('thankyou for eating with us today!');
}

// Event Flow (Promise Chaining)
orderBtn.addEventListener("click", () => {
  TakeOrder()
    .then(order => orderPrep(order))
    .then(order => payOrder(order))
    .then(() => thankyouFnc())
    .catch(err => console.log(err));
});

// Load menu on page load
getMenu();



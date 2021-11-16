
let cartItems = [
    {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
      },
      {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
      },
      {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
      },
      {
        "name": "Fresho Kiwi - Green, 3 pcs",
        "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        "price": 87,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-kiwi-3",
        "id": "5b6c6a7f01a7c38429530883"
      },
      {
        "name": "Fresho Pomegrante Peeled, 500 gm ",
        "imageURL": "/static/images/products/fruit-n-veg/pomegrante.jpg",
        "description": "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
        "price": 88,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-pomegranate-500",
        "id": "5b6c6b7001a7c38429530885"
      },
      {
        "name": "Fresho Pomegrante Peeled, 500 gm ",
        "imageURL": "/static/images/products/fruit-n-veg/pomegrante.jpg",
        "description": "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
        "price": 88,
        "stock": 50,
        "category": "5b6899953d1a866534f516e2",
        "sku": "fnw-pomegranate-500",
        "id": "5b6c6b7001a7c38429530885"
      },
];

function ShowCartItems(){
    let cartHeading = document.querySelector(".mycart-subHeading")
    let uniqueCartItems = cartItems.filter((value, index, self) => self.map(x => x.id).indexOf(value.id) == index)
    window.localStorage.setItem("itemsInCart", JSON.stringify(uniqueCartItems.length))
    cartHeading.innerText = `(${uniqueCartItems.length} item${uniqueCartItems.length > 1 ? "s" : ""})`
    let cartItemsContainer = document.querySelector(".mycart-items")

    // traverse the array of cart items
    uniqueCartItems && uniqueCartItems.map(item => {
    let cartItemDiv = document.createElement("div")
    cartItemDiv.setAttribute("class", "mycart-itemDiv")
    let cartImg = document.createElement("img")
    cartImg.setAttribute("src", `..${item.imageURL}`)
    cartImg.setAttribute("alt", item.name)
    cartItemDiv.append(cartImg)

    let cartItemHeadingAndInfoContainer = document.createElement("div")
    cartItemHeadingAndInfoContainer.setAttribute("class", "mycart-headingAndInfo")
    let cartItemHeading = document.createElement("h4")
    cartItemHeading.innerText = item.name
    cartItemHeadingAndInfoContainer.append(cartItemHeading)
  

    let totalQty = cartItems.filter(product => product.id === item.id).length

    let qtyPriceContainer = document.createElement("div")
    qtyPriceContainer.setAttribute("class", "mycart-qtyPriceContainer")

    let qtyContainer = document.createElement("div")
    qtyContainer.setAttribute("class", "mycart-qtyContainer")

    let decreaseBtn = document.createElement("button")
    decreaseBtn.innerText = "-"
    decreaseBtn.setAttribute("type", "button")
    decreaseBtn.setAttribute("class", "mycart-btn")
    decreaseBtn.addEventListener("click", () => DeleteItem(item.id))
    qtyContainer.append(decreaseBtn)

    let cartItemQty = document.createElement("span")
    cartItemQty.innerText = totalQty
    qtyContainer.append(cartItemQty)

    let increaseBtn = document.createElement("button")
    increaseBtn.innerText = "+"
    increaseBtn.setAttribute("type", "button")
    increaseBtn.setAttribute("class", "mycart-btn")
    increaseBtn.addEventListener("click", () => AddItem(item))
    qtyContainer.append(increaseBtn)
    
    let multiplySign = document.createElement("span")
    multiplySign.innerText = "x"
    qtyContainer.append(multiplySign)

    let perItemPrice = document.createElement("span")
    perItemPrice.innerText = `Rs. ${item.price}`
    qtyContainer.append(perItemPrice)
    qtyPriceContainer.append(qtyContainer)

    let totalPriceContainer = document.createElement("div")

    let totalPrice = document.createElement("span")
    totalPrice.innerText = `Rs. ${item.price * totalQty}`
    totalPriceContainer.append(totalPrice)
    qtyPriceContainer.append(totalPriceContainer)

    cartItemHeadingAndInfoContainer.append(qtyPriceContainer)
    cartItemDiv.append(cartItemHeadingAndInfoContainer)

    cartItemsContainer.appendChild(cartItemDiv)

    let cartCheckoutAmount = cartItems.reduce((prevVal, currVal) => prevVal + currVal.price,0)
    let cartCheckoutAmountContainer = document.querySelector(".checkoutAmt")
    cartCheckoutAmountContainer.innerText = cartCheckoutAmount

    })
    
    let cartOtherInfo = document.querySelector(".mycart-otherInfo");

    let cartEmptyInfo = document.querySelector(".mycart-emptyInfo");

    let cartCheckoutButtonContainer = document.querySelector(".mycart-button");

    let cartNoItemButtonContainer = document.querySelector(".startShopping-button");

    cartNoItemButtonContainer.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:5500/html/home.html"
    })
    
    if(cartItems.length > 0){
      cartNoItemButtonContainer.style.display = "none";
      cartEmptyInfo.style.display = "none";
    } else{
      cartNoItemButtonContainer.style.display = "block";
      cartCheckoutButtonContainer.style.display = "none";
      cartOtherInfo.style.display = "none";
    }
    
}

function DeleteItem(id){
  let deleteIdx = cartItems.findIndex(item => item.id === id);
  if(deleteIdx !== -1){
    cartItems.splice(deleteIdx, 1);
    let domItems = document.querySelectorAll(".mycart-itemDiv")
    for(let i =0; i<domItems.length; i++){
        domItems[i].parentElement.removeChild(domItems[i])
    }
    ShowCartItems();
  }
}

 function AddItem(item){
   console.log(cartItems)
   let items = document.querySelectorAll(".mycart-itemDiv");
   for(let i =0; i<items.length; i++){
   items[i].parentElement.removeChild(items[i])
   }
   cartItems.push(item)
   ShowCartItems()
 }

window.addEventListener("DOMContentLoaded", ShowCartItems)


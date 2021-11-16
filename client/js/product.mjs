import { FetchCategories } from "./home.mjs";

var data = {};

function GetParamsFromUrl(){
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    tmp;
    for (var i = 0, l = params.length; i < l; i++) {
     tmp = params[i].split('=');
     data[tmp[0]] = tmp[1];
}
}

window.addEventListener("DOMContentLoaded", GetParamsFromUrl)

async function FetchMenuItems(){
    let menuItems = await FetchCategories()
    let sideNav = document.querySelector(".sidenav")
    for(let item of menuItems){
      if(item.enabled){
       let itemLink =  document.createElement("a")
       itemLink.setAttribute("href", `http://127.0.0.1:5500/html/product.html?categoryId=${item.id}`)
       itemLink.innerText = item.name
       item.id === data.categoryId && (itemLink.style.background = "#c9c4c4");
       itemLink.addEventListener("click", () => NavCategoryClickHandler(item.id, itemLink))
       sideNav.append(itemLink)
      }
    }
}

function NavCategoryClickHandler(id, tagElement){
  if(id === data.categoryId){
     tagElement.style.background = "#c9c4c4";
  }
}

window.addEventListener("DOMContentLoaded", FetchMenuItems)

function FetchProducts(){
  return fetch(`http://localhost:5000/products/${data.categoryId}`)
  .then((response) => {
      if(response.ok) {
         return response.json();
       } else {
          throw new Error("Something went wrong !")
      }
  })
}

async function DisplayProducts() {
    let allProducts = await FetchProducts();
    console.log(allProducts)
    let productsContainer = document.getElementById("product-listing")
    for(const product of allProducts){
        let productItem =  ProductItemBuilder(product)
        productsContainer.append(productItem)
    }
}



function ProductItemBuilder(product){
    let productItem = document.createElement("div")
    productItem.setAttribute("class", "productItem")

    let productItemLgScreen = document.createElement("div");
    productItemLgScreen.setAttribute("class", "item-lg-screen")

    let productHeading = document.createElement("h3")
    productHeading.innerText = product.name
    productItem.append(productHeading)

    let productImage = document.createElement("img")
    productImage.setAttribute("src", `..${product.imageURL}`)
    productImage.setAttribute("alt", "")
    productItemLgScreen.append(productImage)

    let productDescription = document.createElement("p")
    productDescription.setAttribute("class", "lg-desc")
    productDescription.innerText = product.description
    productItemLgScreen.append(productDescription)

    let productDescriptionAndSmScreenBtn = document.createElement('div')
    productDescriptionAndSmScreenBtn.setAttribute("class", "desc-sm-btn")
    
    let productDescriptionSmScreen = document.createElement("p")
    productDescriptionSmScreen.innerText = product.description
    productDescriptionAndSmScreenBtn.append(productDescriptionSmScreen)

    let productSmallScreenBtn = document.createElement("button")
    productSmallScreenBtn.setAttribute("type", "button")
    productSmallScreenBtn.innerText = `Buy Now @ Rs. ${product.price}`
    productDescriptionAndSmScreenBtn.append(productSmallScreenBtn)

    productItemLgScreen.append(productDescriptionAndSmScreenBtn)

    let productPriceAndLgBtn = document.createElement("div")
    productPriceAndLgBtn.setAttribute("class", "price-lg-btn")

    let productPrice = document.createElement("div")
    productPrice.innerText = `MRP Rs. ${product.price}`
    productPriceAndLgBtn.append(productPrice)

    let productLargeScreenBtn = document.createElement("button")
    productLargeScreenBtn.setAttribute("type", "button")
    productLargeScreenBtn.innerText = "Buy Now"
    productPriceAndLgBtn.append(productLargeScreenBtn)

    productItemLgScreen.append(productPriceAndLgBtn)

    productItem.append(productItemLgScreen)

    let productMediumScreenBtn = document.createElement("button")
    productMediumScreenBtn.setAttribute("type", "button")
    productMediumScreenBtn.setAttribute("class", "md-btn")
    productMediumScreenBtn.innerText = `Buy Now @ Rs. ${product.price}`
    productItem.append(productMediumScreenBtn)

    return productItem
}




window.addEventListener("DOMContentLoaded", DisplayProducts)
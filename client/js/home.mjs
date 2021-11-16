function FetchBanners() {
return fetch("http://localhost:5000/banners")
  .then((response) => {
      if(response.ok) {
         return response.json();
       } else {
          throw new Error("Something went wrong !")
      }
  })
}

var slideIndex = 1;

async function DisplayBanners() {
    let allBanners = await FetchBanners();
    let homePage = document.querySelector("#homePage")
    let carouselContainer =  document.querySelector(".slideshow-container")
    let categoriesContainer = document.querySelector(".categories")
    for(const banner of allBanners){
       let carouselItem =  BannerCarouselItem(banner)
        carouselContainer.append(carouselItem)
    }
    let prevBtn = document.querySelector(".prev")
    prevBtn.addEventListener("click", () => plusSlides(-1))
  
    let nextBtn = document.querySelector(".next")
    nextBtn.addEventListener("click", () => plusSlides(1))

    let dotContainer = document.createElement("div")
    dotContainer.setAttribute("style", "text-align:center")
    
    for(const banner of allBanners){
    let dotItem = document.createElement("span")
    dotItem.setAttribute("class", "dot")
    dotItem.addEventListener("click",() => currentSlide(+banner.order))
    dotContainer.append(dotItem)
    }
    homePage.insertBefore(dotContainer,categoriesContainer)
    showSlides(slideIndex);
}

window.addEventListener("DOMContentLoaded", DisplayBanners)

function BannerCarouselItem(banner){
  let itemContainer = document.createElement("div")
  itemContainer.setAttribute("class", "mySlides fade")
  itemContainer.setAttribute("key", banner.id)
  
  let itemImg = document.createElement("img")
  itemImg.setAttribute("src",`..${banner.bannerImageUrl}`)
  itemImg.setAttribute("alt", banner.bannerImageAlt)

  itemContainer.append(itemImg)
  return itemContainer
}



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log('running')
    console.log(n)
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
 
  
export function FetchCategories(){
  return fetch("http://localhost:5000/categories")
  .then((response) => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error("Something went wrong !")
    }
  })
}

async function DisplayCategories(){
  let allCategories = await FetchCategories();
  let categoriesContainer = document.querySelector(".categories")
  let categoriesUnorderedList = document.createElement("ul")
  allCategories.sort((a,b) => a.order - b.order).map(category => {
    if(category.order > 0){
    let categoryItem = CategoryItemBuilder(category)
    categoriesUnorderedList.append(categoryItem)
    }
  })
  categoriesContainer.appendChild(categoriesUnorderedList)
}

function CategoryItemBuilder(category){
  let itemContainer = document.createElement("li")
  itemContainer.setAttribute('key', category.id)
  
  let itemImg = document.createElement("img")
  itemImg.setAttribute("src",`..${category.imageUrl}`)
  itemImg.setAttribute("alt", "")
  itemImg.setAttribute("class", "categoryImg")
  itemContainer.append(itemImg)
  
  let itemContent = document.createElement('div')
  itemContent.setAttribute("class", "categoryContent")
  let itemName = document.createElement("h4")
  itemName.setAttribute("class", "categoryName")
  itemName.innerText = category.name
  itemContent.append(itemName)

  let itemDescription = document.createElement("p")
  itemDescription.setAttribute("class", "categoryDesc")
  itemDescription.innerText = category.description
  itemContent.append(itemDescription)

  let itemBtnAnchor = document.createElement("a")
  itemBtnAnchor.setAttribute("href", `http://127.0.0.1:5500/html/product.html?categoryId=${category.id}`)
  let itemBtn = document.createElement("button")
  itemBtn.setAttribute("type", "button")
  itemBtn.innerText = `Explore ${category.key}`
  itemBtnAnchor.appendChild(itemBtn)
  itemContent.append(itemBtnAnchor)

  itemContainer.append(itemContent)

  return itemContainer
}


window.addEventListener("DOMContentLoaded", DisplayCategories)

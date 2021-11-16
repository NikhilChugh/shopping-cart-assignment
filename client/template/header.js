
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
  body,html {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
#headerComponent {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 60px;
  -webkit-box-shadow: 0px 5px 5px #e9e9e9;
          box-shadow: 0px 5px 5px #e9e9e9;
}

#headerComponent .nav-logo-links {
  width: 65%;
  background: white;
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#headerComponent .nav-logo-links span{
  width: 100%;
}
#headerComponent .nav-logo-links img {
  width: 85px;
}

#headerComponent .nav-logo-links nav {
  opacity: 0;
}
#headerComponent .cart-button-container{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 35%;
}
#headerComponent .cart-button-container nav {
  height: 0px;
  opacity: 0;
}
#headerComponent .cart-button-container .cart-button {
  background: #eeeeee;
  height: 60px;
}

#headerComponent .cart-button-container .cart-button .cart-button-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 100%;
  font-size: 20px;
  padding-left: 10px;
}

#headerComponent .cart-button-container .cart-button .cart-button-content span {
  margin-left: 5px;
}
#headerComponent .cart-button-container .cart-button svg {
    width: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

@media screen and (min-width: 576px) {
   #headerComponent{
     height: 80px;
   }
   #headerComponent .nav-logo-links {
     width: 80%;
     padding-left: 0;
   }
   #headerComponent .nav-logo-links span{
    width: 30%;
  }
   #headerComponent .nav-logo-links img {
     width: 130px;
   }
   #headerComponent .nav-logo-links nav {
    opacity: 1;
    width: 70%;
    -webkit-transform: translateY(50%);
        -ms-transform: translateY(50%);
            transform: translateY(50%);
  }
  #headerComponent .nav-logo-links nav a {
    text-decoration: none;
    color: #919294;
    margin-right: 3%;
  }
   #headerComponent .cart-button-container{
    width: 20%;
  }
   #headerComponent .cart-button-container nav {
    height: 30px;
    text-align: right;
    padding: 0 5px;
    opacity: 1;
    font-size: 12px;
  }
  #headerComponent .cart-button-container nav a{
    text-decoration: none;
    color: black;
  }
  #headerComponent .cart-button-container nav a:first-child{
    margin-right: 10px;
  }
  #headerComponent .cart-button-container .cart-button{
    height: 50px;
  }
  #headerComponent .cart-button-container .cart-button:hover{
    background: #dbd7d7;
  }
  #headerComponent .cart-button-container .cart-button svg{
    width: 30px;
  }
}

@media screen and (min-width: 992px) {
  #headerComponent{
    height: 90px;
    padding: 0 15%;
  }
  #headerComponent .nav-logo-links {
    width: 85%;
  }
  #headerComponent .nav-logo-links span{
    width: 35%;
  }
   #headerComponent .nav-logo-links img {
     width: 150px;
   }
   #headerComponent .nav-logo-links nav {
     width: 65%;
   }
   #headerComponent .nav-logo-links nav a {
     margin-right: 5%;
   }
   #headerComponent .cart-button-container{
    width: 15%;
  }
  #headerComponent .cart-button-container nav {
    padding: 0;
  }
  #headerComponent .cart-button-container .cart-button{
    height: 60px;
  }
}

/* The Modal (background) */
// .modal {
//   display: none; /* Hidden by default */
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Sit on top */
//   padding-top: 100px; /* Location of the box */
//   left: 0;
//   top: 0;
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   overflow: auto; /* Enable scroll if needed */
//   background-color: rgb(0,0,0); /* Fallback color */
//   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
// }

// /* Modal Content */
// .modal-content {
//   background-color: #fefefe;
//   margin: auto;
//   padding: 20px;
//   border: 1px solid #888;
//   min-width: 500px;
//   width: 40%;
// }

// #mycart-page {
//   height: calc(100vh - 60px);
//   background: #eeeeee;
//   padding-top: 30px;
// }
// #mycart-page .mycart-mainContent {
//   height: calc(100vh - 60px - 122px);
//   overflow: scroll;
// }
// #mycart-page .mycart-mainContent h3 {
//   background: white;
//   padding: 10px;
// }
// #mycart-page .mycart-mainContent .mycart-subHeading {
//   font-weight: normal;
//   font-size: 16px;
// }
// #mycart-page .mycart-mainContent .mycart-itemDiv {
//   display: grid;
//   grid-template-columns: 1fr 4fr;
//   background: white;
//   padding: 10px;
//   margin-top: 15px;
// }
// #mycart-page .mycart-mainContent .mycart-itemDiv img {
//   width: 80px;
//   height: 80px;
// }
// #mycart-page .mycart-mainContent .mycart-itemDiv .mycart-headingAndInfo {
//   display: flex;
//   justify-content: space-around;
//   flex-direction: column;
// }
// #mycart-page .mycart-mainContent .mycart-itemDiv .mycart-headingAndInfo .mycart-qtyPriceContainer {
//   display: grid;
//   grid-template-columns: 4fr 50px;
//   grid-gap: 50px;
// }
// #mycart-page .mycart-mainContent .mycart-itemDiv .mycart-headingAndInfo .mycart-qtyPriceContainer .mycart-qtyContainer .mycart-btn {
//   width: 23px;
//   border-radius: 4px;
//   height: 20px;
//   margin-top: 0px;
// }
// #mycart-page .mycart-mainContent .mycart-otherInfo {
//   display: flex;
//   align-items: center;
//   background: white;
//   margin: 10px 5px;
//   padding: 10px;
//   border-radius: 5px;
// }
// #mycart-page .mycart-mainContent .mycart-otherInfo img {
//   width: 80px;
//   height: 30px;
// }
// #mycart-page .mycart-mainContent .mycart-otherInfo .mycart-infoText {
//   font-size: 14px;
//   margin-left: 10px;
// }
// #mycart-page .mycart-button {
//   background: white;
//   padding: 10px 0px;
//   bottom: 0;
//   position: -webkit-sticky;
//   position: sticky;
// }
// #mycart-page .mycart-button p {
//   text-align: center;
// }
// #mycart-page .mycart-button .checkoutBtn-outer {
//   margin: 10px;
// }
// #mycart-page .mycart-button .checkoutBtn-outer button {
//   margin-top: 5px;
//   height: auto;
//   padding: 15px;
//   border-radius: 3px;
// }
// #mycart-page .mycart-button .checkoutBtn-outer button .checkoutBtn-inner {
//   display: flex;
//   justify-content: space-between;
// }
  </style>
  <header id="headerComponent">
    <div class="nav-logo-links">
     <span>
     <img src="../static/images/logo.png" alt="Sabka Bazaar"/>    
     </span>
     <nav role="navigation" aria-label="Main" >
     <a href="/html/home.html">Home</a>
     <a href="/html/product.html?categoryId=5b675e5e5936635728f9fc30">Products</a>
     </nav>
     </div>
     <div class="cart-button-container">
     <nav role="navigation">
       <a href="/html/login.html">SignIn</a>
       <a href="/html/register.html">Register</a>
     </nav>
     <div role="button" class="cart-button">
        <span class="cart-button-content">
          <svg version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	       x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
          <path fill="#cb0359" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
          <span><span class="header-cart-items"></span> items</span>
        </span>
     </div>
     </div>
  </header>
  <div id="myModal" class="modal">
  <div class="modal-content"></div>
  </div>
  <script src="../js/cart.js"></script>
`


class Header extends HTMLElement {
    constructor(){
      super();

    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open'});
        shadowRoot.appendChild(headerTemplate.content);
        let headerCartItemsContainer = shadowRoot.querySelector(".header-cart-items")
        headerCartItemsContainer.innerText = JSON.parse(window.localStorage.getItem("itemsInCart"))
        let cartBtn =  shadowRoot.querySelector(".cart-button")
        cartBtn.addEventListener("click", OpenMyCart)

        function OpenMyCart() {
          var x = window.matchMedia("(min-width: 992px)")
          if (x.matches){

            // Issue in appending js and css files with cart html file using
            // shadow root, to show cart in popup for larger screens

            // FetchCartPopup()

            // So, using separate screen instead of popup

            window.location.href = "/html/cart.html"


          } else {
            window.location.href = "/html/cart.html"
          }
        }

        // function FetchCartPopup(){
        //   return fetch("http://127.0.0.1:5500/html/cart.html")
        //         .then((response) => {
        //         if(response.ok) {
        //           return response.text();
        //         } else {
        //             throw new Error("Something went wrong !")
        //         }
        //    }).then(function(html) {
        //      var parser = new DOMParser();
        //      var doc = parser.parseFromString(html, 'text/html')
        //      let myCartPage = doc.querySelector('#mycart-page')
        //      let myCartContainer = shadowRoot.querySelector(".modal-content")
        //      myCartContainer.append(myCartPage)
        //      let cartScript = document.createElement("div")
        //      cartScript.setAttribute("src", "../js/cart.js")
        //      headerTemplate.append(cartScript)
        //       // Get the modal
        //       var modal = shadowRoot.getElementById("myModal");
        //       modal.style.display = "block";

        //    }).catch(function(err){
        //      console.warn('Something went wrong.', err)
        //    })
        // }
      
    }
}

customElements.define('header-component', Header);
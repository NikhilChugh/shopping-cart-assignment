const footerTemplate = document.createElement('template')
footerTemplate.innerHTML = `
  <style>
  * {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
   }  
  #footerComponent{
    background: #eaeaea;
  }
  #footerComponent p{
    font-size: 12px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 992px){
    #footerComponent p{
      justify-content: flex-start;
      padding: 0 15%;
    }
  }
  </style>
  <footer id="footerComponent">
     <p><slot name="footer-text">Copyright @2011-2021 Sabka Bazaar Grocery Supplies Pvt Ltd</slot></p>
  </footer>
`;

class Footer extends HTMLElement{
    constructor(){
    super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerTemplate.content)
    }
}

customElements.define('footer-component', Footer)

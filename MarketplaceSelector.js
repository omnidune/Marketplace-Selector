// ==UserScript==
// @name         Marketplace Slector
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Marketplace selector for sellercentral domain, keep the cookies seperated
// @author       Raj
// @match        https://sellercentral.amazon.com/*
// @match        https://sellercentral.amazon.ca/*
// @match        https://sellercentral.amazon.com.mx/*
// @match        https://sellercentral.amazon.com.br/*
// @match        https://sellercentral.amazon.ae/*
// @match        https://sellercentral.amazon.sg/*
// @match        https://sellercentral.amazon.co.jp/*
// @match        https://sellercentral.amazon.com.au/*
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @downloadURL  https://raw.githubusercontent.com/omnidune/Marketplace-Selector/main/MarketplaceSelector.js
// @updateURL    https://raw.githubusercontent.com/omnidune/Marketplace-Selector/main/MarketplaceSelector.js
// @grant        none
// ==/UserScript==

var styles = `
.dropbtn {
  background-color: white;
  color: black;
  padding: 5px;
  font-size: 16px;
  border: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 5px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: white;
}
`;

var existCondition1 = setInterval(function() {
  if (document.querySelector("#partner-switcher > button")) {
    clearInterval(existCondition1);
    var styleSheet1 = document.createElement("style");
    styleSheet1.innerText = styles;
    document.head.appendChild(styleSheet1);
    var newDiv = document.createElement("div");
    newDiv.style.position = "fixed";
    newDiv.style.top = "0";
    newDiv.style.left = "40%";
    newDiv.style.transform = "translateX(-50%)";
    newDiv.style.zIndex = "9999";
    var buttonElement = `<div class="dropdown">
      <button class="dropbtn">Marketplace Selector</button>
      <div class="dropdown-content">
        <a href="https://sellercentral.amazon.com/" target="_blank" rel="noopener noreferrer">United States</a>
        <a href="https://sellercentral.amazon.ca/" target="_blank" rel="noopener noreferrer">Canada</a>
        <a href="https://sellercentral.amazon.com.mx/" target="_blank" rel="noopener noreferrer">Mexico</a>
        <a href="https://sellercentral.amazon.com.br/" target="_blank" rel="noopener noreferrer">Brazil</a>
        <a href="https://sellercentral.amazon.ae/" target="_blank" rel="noopener noreferrer">UAE</a>
        <a href="https://sellercentral.amazon.sg/" target="_blank" rel="noopener noreferrer">Singapore</a>
        <a href="https://sellercentral.amazon.co.jp/" target="_blank" rel="noopener noreferrer">Japan</a>
        <a href="https://sellercentral.amazon.com.au/" target="_blank" rel="noopener noreferrer">Australia</a>
      </div>
    </div>`;
    newDiv.innerHTML = buttonElement;
    document.body.insertBefore(newDiv, document.body.firstChild);
  }
}, 100);

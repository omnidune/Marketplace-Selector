// ==UserScript==
// @name         Marketplace Slector
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Marketplace selector for sellercentral domain, keep the cookies seperated
// @author       Raj (rajbhatt578@gmail.com)
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



// Define the conditions and the corresponding URLs to append
const conditions = {
  "ATVPDKIKX0DER": "https://sellercentral.amazon.com",
  "A1AM78C64UM0Y8": "https://sellercentral.amazon.com.mx",
  "A2VIGQ35RCS4UG": "https://sellercentral.amazon.ae",
  "A2Q3Y263D00KWC": "https://sellercentral.amazon.com.br",
  "A19VAU5U5O7RUS": "https://sellercentral.amazon.sg",
  "A1VC38T7YXB528": "https://sellercentral.amazon.co.jp",
  "A39IBJ37TRP1C6": "https://sellercentral.amazon.com.au",
  "A2EUQ1WTGCTBG2": "https://sellercentral.amazon.ca"
  // Add more conditions and URLs as needed
};


// Define a function to update the href attribute of a hyperlink
function updateHref(link) {
  const hrefValue = link.getAttribute("href");
  for (const [condition, url] of Object.entries(conditions)) {
    if (hrefValue.indexOf(condition) !== -1) {
      const newHrefValue = url + hrefValue;
      link.setAttribute("href", newHrefValue);
      break; // Only update the first matching condition
    }
  }
}

// Create a MutationObserver instance
const observer = new MutationObserver((mutations) => {
  // Loop through all mutation records
  mutations.forEach((mutation) => {
    // Loop through all added nodes in the mutation record
    mutation.addedNodes.forEach((node) => {
      // Check if the node is a hyperlink element
      if (node.nodeName === "A") {
        updateHref(node);
      }
      // Check if the node has any hyperlink descendants
      if (node.getElementsByTagName) {
        const links = node.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
          updateHref(links[i]);
        }
      }
    });
  });
});

// Observe changes to the entire document
observer.observe(document, {
  childList: true,
  subtree: true,
});


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

    var marketplaceName = "Marketplace Selector";
    if (window.location.href.includes("sellercentral.amazon.com.au")) {
      marketplaceName += " - Australia";
    } else if (window.location.href.includes("sellercentral.amazon.ca")) {
      marketplaceName += " - Canada";
    } else if (window.location.href.includes("sellercentral.amazon.com.mx")) {
      marketplaceName += " - Mexico";
    } else if (window.location.href.includes("sellercentral.amazon.com.br")) {
      marketplaceName += " - Brazil";
    } else if (window.location.href.includes("sellercentral.amazon.ae")) {
      marketplaceName += " - UAE";
    } else if (window.location.href.includes("sellercentral.amazon.sg")) {
      marketplaceName += " - Singapore";
    } else if (window.location.href.includes("sellercentral.amazon.co.jp")) {
      marketplaceName += " - Japan";
    } else if (window.location.href.includes("sellercentral.amazon.com")) {
      marketplaceName += " - USA";
    }

    var buttonElement = `<div class="dropdown">
      <button class="dropbtn">${marketplaceName}</button>
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

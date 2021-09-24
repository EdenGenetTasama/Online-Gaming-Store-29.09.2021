const categoryInput = document.getElementById("categoryInput");
const itemsContainer = document.getElementById("itemsContainer");

// const userValue = categoryInput.value;

let counterImg = 0;

function sortedProductsFun(htmlElement, arrayOfItems, selectCategory) {
  for (let i = 0; i < arrayOfItems.length; i++) {
    // for (let j = 0; j < arrayOfItems.length; j++) {
      if (arrayOfItems[i].category == selectCategory) {
        htmlElement.innerHTML += `<article
        class="item"
        id=${arrayOfItems[i].id}>
        <img src=${arrayOfItems[i].img[counterImg]} id="designImgInside"></n> 
        <h4 class="insideTextDesign"  id="priceStyle">${arrayOfItems[i].name}  </h4>
        <h5 class="insideTextDesign">${arrayOfItems[i].description}</h5>
        <span class="insideTextDesign" id="priceStyle">Price:${arrayOfItems[i].price}<br><br></span>
        <button type="button" id="addButton" onclick="addToCart(${arrayOfItems[i].id})">ADD TO CART</button>
        </article>`;

    }
}
counterImg++
  }
// }



// function switchingImg(img){
//     let div =`<div></div>`
//         for (let j = 0; j < 2; j++) {
//             div.innerHTML = `<img src=${arrayOfItems[i].img[j]} id="designImgInside">`

//         }

// }

let emptyArray = [];
function addToCart(idOfItem) {
  for (let i = 0; i < allDateItem.length; i++) {
    if (allDateItem[i].id == idOfItem) {
      emptyArray.push(allDateItem[i]);
      console.log(emptyArray);
    }
  }
}

function cleanItems(HtmlElement) {
  HtmlElement.innerHTML = "";
}

categoryInput.addEventListener("change", function (event) {
  let selectedValue = event.target.value;
  cleanItems(itemsContainer);
  sortedProductsFun(itemsContainer, allDateItem, selectedValue);
});

const categoryInput =document.getElementById("categoryInput");
const itemsContainer = document.getElementById("itemsContainer");


// const userValue = categoryInput.value;



let counterImg = 0;

function sortedProductsFun(htmlElement , arrayOfItems , selectCategory) {
    for (let i = 0; i < arrayOfItems.length; i++) {
     if(arrayOfItems[i].category == selectCategory){
        htmlElement.innerHTML += `<article
        class="item"
        id=${arrayOfItems[i].id}>
        <img src=${arrayOfItems[i].img[counterImg]} id="designImgInside"></n>
        <h4>Name: </h4>${arrayOfItems[i].name} 
        <h5>Description: ${arrayOfItems[i].description}</h5>
        Price:${arrayOfItems[i].price}<br>
        <button type="button" id="addButton">ADD</button></style>
        </article>`;
        // counterImg++
     }
    }
}

let emptyArray = [];
function clickAddButton(array , select) {
    
    emptyArray.push()
}



function cleanItems(HtmlElement) {
    HtmlElement.innerHTML = '';
}

categoryInput.addEventListener('change', function (event){
    let selectedValue = event.target.value;
    cleanItems(itemsContainer);
    sortedProductsFun(itemsContainer, allDateItem, selectedValue);
})






const categoryInput =document.getElementById("categoryInput");
const itemsContainer = document.getElementById("itemsContainer");


const userValue = categoryInput.value;




function sortedProductsFun(htmlElement , arrayOfItems , selectCategory) {
    for (let i = 0; i < arrayOfItems.length; i++) {
     if(arrayOfItems[i].category == selectCategory){
        htmlElement.innerHTML += `<article
        class="item"
        id=${arrayOfItems[i].id}>
        ${arrayOfItems[i].name}
        ${arrayOfItems[i].description} 
        ${arrayOfItems[i].price}
        ${arrayOfItems[i].price}
        </article>`
     }
    }
}



function cleanItems(HtmlElement) {
    HtmlElement.innerHTML = '';
}

categoryInput.addEventListener('change', function (e){
    const selectedValue = e.targe.value;
    cleanItems(itemsContainer);
    sortedProductsFun(selectedValue, allDateItem, userValue);
})



firstTR.innerHTML = `
<tr>
<td><button type="button" id="buttonRemoveOne">REMOVE</button></td>
<td id= imgFirstTd><img src="http://www.yo-yoo.co.il/coolpics/images/uploads/loveityoyo3.jpg" id="tableImg"></td>
<td>Big red Heart</td>
<td id="priceOne">100</td></tr>
`

secondTR.innerHTML = `<tr>
<td><button type="button" id="buttonRemoveTwo">REMOVE</button></td>
<td id= imgFirstTd><img src="http://www.yo-yoo.co.il/coolpics/images/uploads/loveityoyo3.jpg"></td>
<td>Big red Heart</td>
<td id="priceTwo">200</td></tr>
`

thirdTR.innerHTML = `<tr>
<td><button type="button" id="buttonRemoveThree">REMOVE</button></td>
<td id= imgFirstTd><img src="http://www.yo-yoo.co.il/coolpics/images/uploads/loveityoyo3.jpg"></td>
<td>Big red Heart</td>
<td id="priceThree">500</td></tr>
`

let priceOne = document.getElementById("priceOne").innerHTML
let priceTwo = document.getElementById("priceTwo").innerHTML
let priceThree = document.getElementById("priceThree").innerHTML

let arrayOfPrice=[priceOne,priceTwo,priceThree]

let sumOfPrices = 0;
function sumOfPriceFun(priceOne,priceTwo,priceThree) {
      for (let i = 0; i < arrayOfPrice.length; i++) {
            sumOfPrices +=  parseInt(arrayOfPrice[i]);
            }
           return sumOfPrices
}


let variableOfAllPrice = sumOfPriceFun(sumOfPrices)
totalPriceId.innerHTML = `<p>Total Price:<span>${variableOfAllPrice}</span></p>`;


let buttonRemoveOne = document.getElementById("buttonRemoveOne")
console.log(buttonRemoveOne);

function removeItemOfCart(htmlElement) {
      htmlElement.innerHTML = '';

}

let firstTR1 = document.getElementById("firstTR").innerHTML

// let buttonRemoveTwo = document.getElementById("buttonRemoveTwo").innerHTML
// let buttonRemoveThree = document.getElementById("buttonRemoveThree").innerHTML

// console.log(firstTR1);


/**********************************FOR TOMORROW STUCK HERE  ***********************/
buttonRemoveOne.onclick(()=>{
      removeItemOfCart(firstTR1)
})
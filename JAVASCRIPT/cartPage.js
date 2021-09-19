let firstTR = document.getElementById("firstTR");

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
<td><button type="button" id="buttonRemoveTwo">REMOVE</button></td>
<td id= imgFirstTd><img src="http://www.yo-yoo.co.il/coolpics/images/uploads/loveityoyo3.jpg"></td>
<td>Big red Heart</td>
<td id="priceTwo">200</td></tr>
`



let priceOne = document.getElementById("priceOne").innerHTML;
let priceTwo = document.getElementById("priceTwo").innerHTML;
let priceThree = document.getElementById("priceThree").innerHTML;
let buttonRemoveOne = document.getElementById("buttonRemoveOne");

let arrayOfPrice = [priceOne, priceTwo, priceThree];

let sum = 0;
for (let i = 0; i < arrayOfPrice.length; i++) {
      sum +=  parseInt(arrayOfPrice[i])
}


totalPriceId.innerHTML = `<p>Total Price: ${sum}</p>`;

buttonRemoveOne.onclick(()=>{
      totalPriceId.innerHTML =`<p>Total Price:${sum-priceOne}</p>`
      console.log(sum-priceOne);
})
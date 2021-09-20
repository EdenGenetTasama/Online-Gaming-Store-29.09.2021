let arrayOfCartObject = [
      {id: allDateItem[0].id,img: allDateItem[0].img[0], name:allDateItem[0].name , price:allDateItem[0].price, },
      {id: allDateItem[1].id, img: allDateItem[1].img[0], name:allDateItem[1].name , price:allDateItem[1].price, },
      {id: allDateItem[2].id, img: allDateItem[2].img[2], name:allDateItem[2].name , price:allDateItem[2].price, }

]
console.log(arrayOfCartObject);
console.log(arrayOfCartObject[0].id);


firstTR.innerHTML = `

<td><button type="button" id="buttonRemoveOne" onclick="spliceFromArray(firstTR,0,${arrayOfCartObject[0].price})">REMOVE</button></td>
<td id= imgFirstTd><img src=${arrayOfCartObject[0].img} id="tableImg"></td>
<td>${arrayOfCartObject[0].name}</td>
<td id="priceOne">${arrayOfCartObject[0].price}</td>
`;

secondTR.innerHTML = `
<td><button type="button" id="buttonRemoveTwo" onclick="spliceFromArray(secondTR,1,${arrayOfCartObject[1].price})">REMOVE</button></td>
<td id= imgSecondTd><img src=${arrayOfCartObject[1].img}></td>
<td>${arrayOfCartObject[1].name}</td>
<td id="priceTwo">${arrayOfCartObject[1].price}</td>
`;

thirdTR.innerHTML = `
<td><button type="button" id="buttonRemoveThree" onclick="spliceFromArray(thirdTR,2,${arrayOfCartObject[2].price})">REMOVE</button></td>
<td id= imgThird><img src=${arrayOfCartObject[2].img}></td>
<td>${arrayOfCartObject[2].name}</td>
<td id="priceThree">${arrayOfCartObject[2].price}</td>
`;



let arrayOfPrice = [arrayOfCartObject[0].price, arrayOfCartObject[1].price, arrayOfCartObject[2].price];



let sumOfPrices = 0;

function sumOfPriceFun(arrayOfPrices) {
  for (let i = 0; i < arrayOfPrices.length; i++) {
    sumOfPrices += parseInt(arrayOfPrices[i]);
  }
  return sumOfPrices;
}

let variableOfAllPrice = sumOfPriceFun(arrayOfPrice);//*all sum**/
totalPriceId.innerHTML = `<p>Total Price:<span>${variableOfAllPrice}</span></p>`;





/**********************************FOR TOMORROW STUCK HERE  ***********************/


function spliceFromArray(cartID, number,price){

cartID.innerHTML = "";
if(cartID.innerHTML == ""){
      arrayOfCartObject.splice(number,1);
      variableOfAllPrice -= price;
      totalPriceId.innerHTML = `<p>Total Price:<span>${variableOfAllPrice}</span></p>`;

}
}



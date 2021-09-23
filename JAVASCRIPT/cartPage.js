let arrayOfCartObject = [
  {
    id: allDateItem[0].id,
    img: allDateItem[0].img[0],
    name: allDateItem[0].name,
    price: allDateItem[0].price,
  },
  {
    id: allDateItem[1].id,
    img: allDateItem[1].img[0],
    name: allDateItem[1].name,
    price: allDateItem[1].price,
  },
  {
    id: allDateItem[2].id,
    img: allDateItem[2].img[0],
    name: allDateItem[2].name,
    price: allDateItem[2].price,
  },
  {
    id: allDateItem[3].id,
    img: allDateItem[3].img[0],
    name: allDateItem[3].name,
    price: allDateItem[3].price,
  },
];

firstTR.innerHTML = `

<td><button type="button" class="buttonRemove" onclick="spliceFromArray(firstTR,0,${arrayOfCartObject[0].price})">REMOVE</button></td>
<td><img src=${arrayOfCartObject[0].img} id="imgFirstTd"></td>
<td class="designTable">${arrayOfCartObject[0].name}</td>
<td id="priceOne" class="designTable">${arrayOfCartObject[0].price}</td>
`;

secondTR.innerHTML = `
<td><button type="button" class="buttonRemove" onclick="spliceFromArray(secondTR,1,${arrayOfCartObject[1].price})">REMOVE</button></td>
<td><img src=${arrayOfCartObject[1].img} id="imgSecondTd"></td>
<td class="designTable">${arrayOfCartObject[1].name}</td>
<td id="priceTwo" class="designTable">${arrayOfCartObject[1].price}</td>
`;

thirdTR.innerHTML = `
<td><button type="button" class="buttonRemove" onclick="spliceFromArray(thirdTR,2,${arrayOfCartObject[2].price})">REMOVE</button></td>
<td><img src=${arrayOfCartObject[2].img} id="imgThird"></td>
<td class="designTable">${arrayOfCartObject[2].name}</td>
<td id="priceThree" class="designTable">${arrayOfCartObject[2].price}</td>
`;

forthTR.innerHTML = `
<td><button type="button" class="buttonRemove" onclick="spliceFromArray(thirdTR,2,${arrayOfCartObject[3].price})">REMOVE</button></td>
<td><img src=${arrayOfCartObject[3].img}  id="imgFour"></td>
<td class="designTable">${arrayOfCartObject[3].name}</td>
<td id="priceFour" class="designTable">${arrayOfCartObject[3].price}</td>
`;

let arrayOfPrice = [
  arrayOfCartObject[0].price,
  arrayOfCartObject[1].price,
  arrayOfCartObject[2].price,
  arrayOfCartObject[3].price,

];

let sumOfPrices = 0;

function sumOfPriceFun(arrayOfPrices) {
  for (let i = 0; i < arrayOfPrices.length; i++) {
    sumOfPrices += parseInt(arrayOfPrices[i]);
  }
  return sumOfPrices;
}

let variableOfAllPrice = sumOfPriceFun(arrayOfPrice); //*all sum**/
totalPriceId.innerHTML = `<p class="totalPriceStyle">Total  Price:    <span>${variableOfAllPrice} $</span></p>`;

function spliceFromArray(cartID, number, price) {
  cartID.innerHTML = "";
  if (cartID.innerHTML == "") {
    arrayOfCartObject.splice(number, 1);
    variableOfAllPrice -= price;
    totalPriceId.innerHTML = `<p class="totalPriceStyle">Total  Price:    <span>${variableOfAllPrice} $</span></p>`;
  }
}

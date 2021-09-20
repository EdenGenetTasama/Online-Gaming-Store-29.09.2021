let arrayOfCartObject = [
      {id: allDateItem[0].id,img: allDateItem[0].img[0], name:allDateItem[0].name , price:allDateItem[0].price, },
      {id: allDateItem[1].id, img: allDateItem[1].img[0], name:allDateItem[1].name , price:allDateItem[1].price, },
      {id: allDateItem[2].id, img: allDateItem[2].img[2], name:allDateItem[2].name , price:allDateItem[2].price, }

]
console.log(arrayOfCartObject);


firstTR.innerHTML = `
<tr id=${arrayOfCartObject[0].id}>
<td><button type="button" id="buttonRemoveOne" onclick="spliceFromArray()" onclick="removeFromCart(${arrayOfCartObject[0].id})">REMOVE</button></td>
<td id= imgFirstTd><img src=${arrayOfCartObject[0].img} id="tableImg"></td>
<td>${arrayOfCartObject[0].name}</td>
<td id="priceOne">${arrayOfCartObject[0].price}</td></tr>
`;

secondTR.innerHTML = `<tr id=${arrayOfCartObject[1].id}>
<td><button type="button" id="buttonRemoveTwo" onclick="spliceFromArray()">REMOVE</button></td>
<td id= imgSecondTd><img src=${arrayOfCartObject[1].img}></td>
<td>${arrayOfCartObject[1].name}</td>
<td id="priceTwo">${arrayOfCartObject[1].price}</td></tr>
`;

thirdTR.innerHTML = `<tr id=${arrayOfCartObject[2].id}>
<td><button type="button" id="buttonRemoveThree" onclick="spliceFromArray()">REMOVE</button></td>
<td id= imgThird><img src=${arrayOfCartObject[2].img}></td>
<td>${arrayOfCartObject[2].name}</td>
<td id="priceThree">${arrayOfCartObject[2].price}</td></tr>
`;

let priceOne = document.getElementById("priceOne").innerHTML;
let priceTwo = document.getElementById("priceTwo").innerHTML;
let priceThree = document.getElementById("priceThree").innerHTML;

let arrayOfPrice = [priceOne, priceTwo, priceThree];

let sumOfPrices = 0;
function sumOfPriceFun(priceOne, priceTwo, priceThree) {
  for (let i = 0; i < arrayOfPrice.length; i++) {
    sumOfPrices += parseInt(arrayOfPrice[i]);
  }
  return sumOfPrices;
}

let variableOfAllPrice = sumOfPriceFun(sumOfPrices);
totalPriceId.innerHTML = `<p>Total Price:<span>${variableOfAllPrice}</span></p>`;





/**********************************FOR TOMORROW STUCK HERE  ***********************/


function spliceFromArray(){
arrayOfCartObject.splice(arrayOfCartObject.id,1);
 console.log(arrayOfCartObject);
//  for (let i = 0; i < arrayOfCartObject.length; i++) {
//        if(arrayOfCartObject[i].id == ""){
//             arrayOfCartObject[i].id.style.display=none ;

//        }

//  }
}


 
// let mainTrID = document.getElementById("mainTrID").innerHTML;
// let mainTrIDTwo = document.getElementById("mainTrIDTwo").innerHTML;
// let mainTrIDThree = document.getElementById("mainTrIDThree").innerHTML;

// let arrayOfTR = [{allDateItem[0].id , }];
// console.log(allDateItem[0].id.innerHTML);



function removeFromCart(NameOfId){
      for (let i = 0; i < arrayOfCartObject.length; i++) { 
            if( arrayOfCartObject[i] =="none"  ){
                  aNameOfId.display="none" ;
                  console.log(arrayOfCartObject[i]);
}
 }
}



// let buttonRemoveOne = document.getElementById("buttonRemoveOne");
// console.log(buttonRemoveOne);

// function removeItemOfCart(htmlElement) {
//       htmlElement.innerHTML = "";
//     }
    
// buttonRemoveOne.onclick(()=>{
//       removeItemOfCart(firstTR1)
// })

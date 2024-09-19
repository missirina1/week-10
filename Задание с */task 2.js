const cardPrice1 = document.getElementById("cardPrice1");
const cardPrice2 = document.getElementById("cardPrice2");
const cardPrice3 = document.getElementById("cardPrice3");
const cardPrice4 = document.getElementById("cardPrice4");

const NumberPrice1 = parseFloat(cardPrice1.innerHTML);
const NumberPrice2 = parseFloat(cardPrice2.innerHTML);
const NumberPrice3 = parseFloat(cardPrice3.innerHTML);
const NumberPrice4 = parseFloat(cardPrice4.innerHTML);

function sumPrice() {
  return NumberPrice1 + NumberPrice2 + NumberPrice3 + NumberPrice4;
}

const discountCost = document.getElementById("discountCost");
discountCost.innerText = sumPrice() + " руб.";

function discount20() {
  const discountAmount = sumPrice() * 0.8;
  discountCost.innerText = discountAmount + " руб.";
}

const discountBtn = document.getElementById("discountBtn");
discountBtn.addEventListener("click", discount20);

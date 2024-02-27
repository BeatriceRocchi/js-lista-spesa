const shopList = [
  "fragole",
  "mango",
  "avocado",
  "insalata",
  "zucchine",
  "pasta",
  "riso",
  "biscotti",
  "cereali",
];

let itemNum = 0;

while (itemNum < shopList.length) {
  document.getElementById("shop-list").innerHTML += `
  <li class="my-2">${shopList[itemNum]}</li>
  `;
  itemNum++;
}

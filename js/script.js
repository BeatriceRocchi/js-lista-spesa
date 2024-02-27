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
  <div class="form-check">
        <input
          class="form-check-input my_form_check"
          type="checkbox"
          value=""
          id="item${itemNum}"
        />
        <label class="form-check-label" for="item${itemNum}">
        ${shopList[itemNum]}
        </label>
      </div>
  `;
  itemNum++;
}

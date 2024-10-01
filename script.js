const inputEl = document.getElementById("input-el");
const btnEl = document.getElementById("btn-el");
let listEl = document.getElementById("list-el");

let allItems = [];

btnEl.addEventListener("click", () => {
  if (inputEl.value) {
    allItems.push(inputEl.value);
    render(allItems);
    inputEl.value = "";
  }
});

function render(items) {
  listEl.textContent = "";
  let list = "";
  for (let i = 0; i < items.length; i++) {
    list += `
    <div class='item'><input type='checkbox'>${items[i]}</div>
    `;
  }
  listEl.innerHTML = list
}

listEl.addEventListener('change', (event)=>{
  if (event.target && event.target.matches('input[type="checkbox"]')) {
    event.target.parentElement.remove()
  }
  
})

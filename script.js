const inputEl = document.getElementById('input-el')
const btnEl = document.getElementById('btn-el')

btnEl.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(inputEl.value)
})


let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")
let entries

function increment() {
    count++
    countEl.innerText = count
    entries = " " + count + " -"
}

function decrement() {
    count--
    countEl.innerText = count
    entries = " " + count + " -"
}



function save() {
    console.log(count)
    saveEl.innerText += entries
}

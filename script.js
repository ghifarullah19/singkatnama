function abbrevName(name) {
    let str = "";
    let del = " ";
    for (let i = 0; i < name.length; i++) {
        if (i == 0) {
            str += name[i].toUpperCase();
        } else if (name[i] == del) {
            str += ".";
            str += name[i+1].toUpperCase();
        }
    }
    return str;
}

const input = document.querySelector(".container input");
const button = document.querySelectorAll("button");
const hasil = document.querySelector(".container .kotak-hasil p");

button[1].addEventListener("click", function() {
    hasil.innerHTML = abbrevName(input.value);
})

button[0].addEventListener("click", function() {
    hasil.innerHTML = "...";
    input.value = null;
})
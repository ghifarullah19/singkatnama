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
    if (abbrevName(input.value) != 0) {
        hasil.innerHTML = abbrevName(input.value);
        hasil.classList.remove("reset-hasil");
    } else {
        alert("Silahkan masukan nama.");
    }
})

button[0].addEventListener("click", function() {
    hasil.innerHTML = "Hasil";
    input.value = null;
    hasil.classList.add("reset-hasil");
})
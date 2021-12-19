const Pskill1 = document.getElementById("Pskill1")
const Mskill1 = document.getElementById("Mskill1")
const Mskill2 = document.getElementById("Mskill2")
const Mskill3 = document.getElementById("Mskill3")
const Mskill4 = document.getElementById("Mskill4")


const Askill1 = document.getElementById("Askill1")
const Askill2 = document.getElementById("Askill2")
const Askill3 = document.getElementById("Askill3")
const Askill4 = document.getElementById("Askill4")
const Askill5 = document.getElementById("Askill5")

const DISM = document.getElementById("DISM");
const DISA = document.getElementById("DISA");

const ip = document.getElementById("ipV"); 

function trial() {
    console.log(ip.value); 
    FilterM();
    FilterA();
}


// Pskill1.addEventListener("click", () => {
//     fun()
// })
function FilterM() {
    //  if (ip.value != "") {
        if (ip.value == Mskill1.innerText || ip.value == Mskill2.innerText || ip.value == Mskill3.innerText || ip.value == Mskill4.innerText) {
            console.log("yesM");
            DISA.style.display = "none"
        }
        else {
            DISM.style.display = "none"
            console.log("noM");
        }
        
    //  }
}

function FilterA() {
    // if (ip.value != "") {
        if (ip.value == Askill1.innerText || ip.value == Askill2.innerText || ip.value == Askill3.innerText || ip.value == Askill4.innerText || ip.value == Askill5.innerText) {
            console.log("yesA");
            DISM.style.display = "none"
        }
        else {
            DISA.style.display = "none"
            console.log("noA");
        }
    // }
}


const btn = document.querySelector(".submit__button");
const tyscreen = document.querySelector("#thankyou__screen");
const ratescreen = document.querySelector("#rate__screen");
let rate = document.getElementsByClassName("rate__number");
let valor = undefined;

function submit () { 
    if (valor !== undefined) {
        ratescreen.classList.add("hidden");
        tyscreen.classList.remove("hidden");
        let frase = document.getElementById("text__rate");
        frase.innerHTML =`You selected ${valor} out of 5`; 
    }
    else {
      let error = document.querySelector(".error");
      error.innerHTML = "Upss! You forgot to give us a rating!";
      return error
    } 
};

//Events:
//(updated):
for (let i = 0; i < rate.length; i++) 
{ rate[i].addEventListener("click", () => 
valor = rate[i].innerHTML)
};

// rate[0].addEventListener("click",()=>
// valor = rate[0].innerHTML);
// rate[1].addEventListener("click",()=>
// valor = rate[1].innerHTML);
// rate[2].addEventListener("click",()=>
// valor = rate[2].innerHTML);
// rate[3].addEventListener("click",()=>
// valor = rate[3].innerHTML);
// rate[4].addEventListener("click",()=>
// valor = rate[4].innerHTML);

btn.addEventListener("click",submit);


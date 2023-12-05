const contatore = document.getElementById("contatore")
let numero



const timer = function(){
    if(sessionStorage.getItem("conteggio")){
        numero = sessionStorage.getItem("conteggio")
        contatore.innerText = numero
        setInterval(function(){
            numero++
            contatore.innerText = numero
            sessionStorage.setItem("conteggio", numero)
        },1000)
    }else{
            numero = 0
            contatore.innerText = numero
            setInterval(function(){
                numero++
                contatore.innerText = numero
                sessionStorage.setItem("conteggio", numero)
            },1000)
        }
    }

window.addEventListener("load", timer)
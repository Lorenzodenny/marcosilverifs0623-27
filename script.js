const salva = document.getElementById("salva")
const cancella = document.getElementById("cancella")



document.getElementById('salva').addEventListener('click', function(event) {
     event.preventDefault();
     const text = document.getElementById("testo").value
     const stampa = document.getElementById("stampa")
     if (stampa.childElementCount > 0) {
        stampa.innerHTML = "";
    }
     const paragrafo = document.createElement("p")
     paragrafo.innerHTML = text;  
     stampa.appendChild(paragrafo) 
     document.getElementById("testo").value = ""
     localStorage.setItem("text", text)
})


document.getElementById('cancella').addEventListener('click', function(event){
    event.preventDefault()
    localStorage.removeItem("text")
    if (stampa.childElementCount > 0) {
        stampa.innerHTML = "";
    }
})

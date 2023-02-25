function contar(){
    var ini = document.getElementById("ini").value
    var fim = document.getElementById("fim").value
    var pas = document.getElementById("pas").value
    
    var pag = document.createElement("p")
    pag.setAttribute("id", "saida")

    if(ini.length == 0 || fim.length == 0 || pas.length == 0 || pas == 0){
        pag.innerHTML = "Impossivel fazer a contagem!"
    }
    else{
        ini = Number(ini)
        fim = Number(fim)
        pas = Number(pas)

        if(ini < fim){
            while (ini <= fim){
                pag.innerHTML += ` ${ini} &#x1F449;`
                ini += pas
            }
        }
        else{
            while (ini >= fim){
                pag.innerHTML += ` ${ini} &#x1F449;`
                ini -= pas
            }
        }

        pag.innerHTML += "&#x1F3C1;"
    }

    document.getElementById("res").innerHTML = "<hr>"
    document.getElementById("res").appendChild(pag)
}
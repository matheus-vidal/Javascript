function cal(){
    var num = Number(document.getElementById("num").value)
    var tab = document.createElement("ol")
    var res = document.getElementById("res")
    
    if(res.innerHTML.length > 0){
        res.innerHTML = ''
    } 

    for(var c = 1; c <= 10; c++){
        tab.innerHTML += `<li>${num} x ${c} = ${num * c}`
    }

    res.appendChild(tab)
}

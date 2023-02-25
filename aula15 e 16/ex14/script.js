let lista = []
let dados = document.getElementById("dados")

function add(){
    let num = document.getElementById("num").value
    document.getElementById("num").value = ''

    if(num < 1 || num > 100 || num == ''){
        alert("Erro: algo foi digitado fora dos limites definidos, ou nada foi digitado. Verifique os dados e tente novamente")
    }
    else if(lista.indexOf(Number(num)) != -1){
        alert("Erro: o número já foi enviado")
    }
    else{
        lista.push(Number(num))
        dados.innerHTML += `<li>${lista.length}º valor: ${num}`
    }
}
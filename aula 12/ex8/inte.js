var hora = new Date()
document.getElementsByTagName("p")[0].innerText += ` ${hora.getHours()}:${hora.getMinutes()}`

hora = hora.getHours()
// adicionando cor de fundo, mudando titulo e imagem
var corpo = document.getElementsByTagName("body")[0]
var titulo = document.getElementsByTagName("h1")[0]
var div = document.getElementsByTagName("div")[0]

if(hora >= 6 && hora <= 12){
    corpo.style = "background-image: linear-gradient(180deg, rgb(0, 132, 255), rgb(143, 201, 255));"

    titulo.innerText = ("TENHA UM ÓTIMO DIA!")

    div.style = "background-Image: URL(https://thumbs.dreamstime.com/b/fundo-do-c%C3%A9u-da-manh%C3%A3-nascer-sol-panorama-136512661.jpg); background-Position: right top;"
}
else if(hora > 12 && hora <= 18){
    corpo.style = "background-image: linear-gradient(180deg, rgb(0 136 255), rgb(164, 59, 2));"

    titulo.innerText = ("TENHA UMA ÓTIMA TARDE!")

    div.style = "background-Image: URL(https://upload.wikimedia.org/wikipedia/commons/f/f8/Entardecer_de_outono_na_Serra_de_Ouro_Fino.jpg); background-Position: left top;"
}
else{
    corpo.style = "background-image: linear-gradient(180deg, rgb(1, 13, 61),#033CA2, #2470E9);"

    titulo.innerText = ("TENHA UMA ÓTIMA NOITE!")

    div.style = "background-Image: URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEF2UHdMtK36Wgsm_TU2FvcI9ZFv6rcWvfOg&usqp=CAU); background-Position: right top;"
}
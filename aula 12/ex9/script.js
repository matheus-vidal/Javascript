function cal(){
    var ida = Number(document.getElementById("ano").value)
    ida = new Date().getFullYear() - ida

    var msg = document.getElementById("men")
    var img = document.getElementById("img")
    var sex = document.getElementsByName("sexo")[0]

    //if e else para var se a idade é valida
    if(ida < 0 || ida > 122){
        alert(`[ERRO] Verifique os dados e tente novamente`)
    }
    else{
        //if e else para ver se o sexo é masculino ou feminino
        if(sex.checked){
            msg.innerHTML = `<hr><strong>Homem</strong> com ${ida} anos`
            
            if(ida < 12){
                img.style = "background-image: URL(https://images.pexels.com/photos/35537/child-children-girl-happy.jpg); display: block; margin: auto auto 20px auto;"
            }
            else if(ida < 18){
                img.style = "background-image: URL(https://images.pexels.com/photos/1618592/pexels-photo-1618592.jpeg?auto=compress&cs=tinysrgb&w=300); display: block; margin: auto auto 20px auto;"
            }
            else if(ida < 40){
                img.style = "background-image: URL(https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1); display: block; margin: auto auto 20px auto; background-position: center top;"
            }
            else{
                img.style = "background-image: URL(https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=300); display: block; margin: auto auto 20px auto; background-position: center top;"
            }

        }
        else{
            msg.innerHTML = `<hr><strong>Mulher</strong> com ${ida} anos`

            if(ida < 12){
                img.style = "background-image: URL(https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1); display: block; margin: auto auto 20px auto;"
            }
            else if(ida < 18){
                img.style = "background-image: URL(https://images.pexels.com/photos/5025111/pexels-photo-5025111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1); display: block; margin: auto auto 20px auto;"
            }

            else if(ida < 40){
                img.style = "background-image: URL(https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300); display: block; margin: auto auto 20px auto; background-position: center top;"
            }
            else{
                img.style = "background-image: URL(https://images.pexels.com/photos/1786243/pexels-photo-1786243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1); display: block; margin: auto auto 20px auto; background-position: center top;"
            }

        }
    }
}

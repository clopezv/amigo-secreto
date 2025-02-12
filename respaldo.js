// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let friend;
let contenido;

//Funcion para agregar amigos
function agregarAmigo() {
    friend = document.getElementById("amigo").value;
    if(friend == "") {
        alert("Ingrese el nombre de su amigo");
    }else{
        let i = 0;
        let valid = 1;
        //Aqui valida que los nombres no se repitan
        while ( i < amigos.length) {
                if(friend == amigos[i]) {
                    valid = 0;
                    alert("Ya ingreso este nombre, ingrese otro nombre");
                    break;
                }    
                i++;
        }
        if(valid == 1) {
            amigos.push(friend);
        } 
    }
    
    listaAmigos.innerHTML = "";
    //Aqui agrega el <li> con el nombre de cada amigo
    amigos.forEach(function(friend) {
        console.log(friend);
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(friend));
        document.querySelector('ul').appendChild(node);
    });
    
    document.getElementById("amigo").value = "";
   
}

function sortearAmigo () {
    //Aqui busca la cantidad de elementos del array para que los numeros aleatorios no se salgan del rango
    let cantFriend = amigos.length;
    let elecAmigo = Math.floor(Math.random()*cantFriend)+0;
    document.getElementById('resultado').textContent  = "Mi amigo secreto sorteado es : "+amigos[elecAmigo];
}
//Funcion de ejemplo

function addUserOnline(avatar, nombre) {
    var contenido = '';
    contenido += '<li class="list-group-item clearfix">';
    contenido += ' <a href="#">';
    contenido += '<img src="' + avatar + '" alt="avatar" class="avatar">';
    contenido += '<span class="name">' + nombre + '</span>';
    contenido += ' </a>';
    contenido += '</li>';
    $('#onlineusers').append(contenido);
    $("#onlineusers").listview("refresh");
}

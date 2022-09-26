function Add() {
    var value = document.querySelector('#inp').value


    if(value.length == 0){
        alert("You forgot to add a task");
    }
    else{
        var div = document.createElement('div')
        div.setAttribute('class', 'text-light bg-dark d-flex justify-content-between align-items-center rounded-2 p-2 mt-3');
        var h2 = document.createElement('h2');
        var icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-trash-can remove');
       
        
        h2.innerHTML = value
        div.appendChild(h2)
        div.appendChild(icon)
        document.getElementById('first').appendChild(div)
        var remover =document.querySelectorAll('.remove')
        console.log(remover)
        for (var i = 0; i <remover.length; i++) {
                remover[i].onclick = function () {
                this.parentElement.remove()
           
            }
        }
    }
}
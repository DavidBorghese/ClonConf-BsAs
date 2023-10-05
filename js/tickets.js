//Una arrow function para hacer uso e la funcion validate de bootrstrap en los formularios
    (() => {
        'use strict'
    

        const forms = document.querySelectorAll('.needs-validation')
    

        Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
    
            form.classList.add('was-validated')
        }, false)
        })
    })()


    //Función para usar un link adentro de un boton de bootstrap
function goBuyTickets() {
    window.location.href = "./pages/buyTickets.html";
}


function calcTotal() {
    const precio=1000
    let cant=document.getElementById("cant").value  

    if (cant>=1) {
        let total=cant*precio

        let desc=document.getElementById("desc").value 

        total=total - (total*desc/100)
    
        document.getElementById("total").innerHTML=total     
        document.getElementById("total").className="text-success border-bottom border-success fs-3 p-1"
    } else {
        document.getElementById("total").innerHTML="Debe ingresar una cantidad mayor o igual a 1"
        document.getElementById("total").className="text-danger border-bottom border-danger fs-5"
    }
    

}
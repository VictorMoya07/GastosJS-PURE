const presupuestoUsuario = prompt('Cual es tu presupuesto actual');
const formulario = document.getElementById('agregar-gasto');






//clases Presupuesto

class Presupuesto{
    constructor(presupuestoUsuario){
        this.presupuesto = Number(presupuestoUsuario);
        this.restante = Number(presupuestoUsuario);
    }

    //Medotos
    presupuestoRestante(cantidad = 0){
     return this.restante - Number(cantidad); 
    }

}


//Eventos

document.addEventListener('DOMContentLoaded', function (){
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        window.alert('Cagar el presupuesto');
        window.location.reload();

    }else{
       const  presupuesto = new Presupuesto(presupuestoUsuario);
        const ui = new Interfaz();
        ui.insertarPresupuesto(presupuesto.presupuesto);
    }
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const gasto = document.getElementById('gasto').value;
    const cantidad = document.getElementById('cantidad').value;

    const ui = new Interfaz();

    //Comprobar que los campos no esten vacios 
    if(gasto ===''|| cantidad === ''){
        ui.imprimirMensaje('Hubo un error' , 'Error');
    }else{
        //ui.insertarPresupuesto(cantidad);
    }
    
});

//Clases de interfaz

class Interfaz{
    insertarPresupuesto(cantidad){
       
        const Presu = document.getElementById('total');
        const Resta = document.getElementById('restante');
        
        Presu.innerHTML =`${cantidad}`;
        Resta.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje , tipo){
        const divMensaje = document.createElement('Div');
        divMensaje.classList.add('text-center','alert');

        if(tipo === 'Error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.appendChild(document.createTextNode(mensaje));

        const modal = document.getElementById('modal');
        modal.appendChild(divMensaje);


    }
}
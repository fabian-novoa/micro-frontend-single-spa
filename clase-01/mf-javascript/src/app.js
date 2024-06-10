import { registerApplication, start } from "single-spa";

const app = {
    async bootstrap(props){
        console.log('App iniciada');
    },
    async mount (props){
        console.log('App montada');

        const contenedor = document.getElementById('app-mf-javascript');
        const boton = document.createElement('button');
        boton.textContent = `Guardar ${props.name}`;


        contenedor.appendChild(boton);
    },

    async unmount (props){
        console.log('App desmontada');

        const contenedor = document.getElementById('app-mf-javascript');
        contenedor.innerHTML = "";
    }
};

registerApplication({
    name: "app-mf-javascript",
    app,
    activeWhen:["/"],
    customProps:{
        codigo:"001",
        nombre:"Botón javascript"
    }
});

start();


const app = {
    async bootstrap(props){
        console.log('App iniciada');
    },
    async mount (props){
        console.log('App montada');

        const contenedor = document.getElementById('app-mf-javascript');
        const boton = document.createElement('button');
        const texto = document.createElement('input');
        boton.textContent = `${props.nombre}`;
        contenedor.appendChild(texto);
        contenedor.appendChild(boton);


    },

    async unmount (props){
        console.log('App desmontada');

        const contenedor = document.getElementById('app-mf-javascript');
        contenedor.innerHTML = "";
    }
};


export const { bootstrap, mount, unmount} = app;
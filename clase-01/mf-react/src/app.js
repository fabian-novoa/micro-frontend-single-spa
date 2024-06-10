import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react'

import { registerApplication, start } from "single-spa";
import Root from './Root.jsx';

const app = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Root,
    errorBondary(err, info, props){
        return "Ocurrio un error"
    }
})

registerApplication({
    name: "app-mf-react",
    app,
    activeWhen:["/"],
    customProps:{
        codigo:"002",
        nombre:"Aplicación clase 01"
    }
});

start();
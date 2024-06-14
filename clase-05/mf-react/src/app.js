import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react'

import Root from './Root.jsx';

const app = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Root,
    errorBondary(err, info, props){
        return "Ocurrio un error"
    }
})


export const { bootstrap, mount, unmount} = app;
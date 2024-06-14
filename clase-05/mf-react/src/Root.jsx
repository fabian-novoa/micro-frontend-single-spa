import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Panel from './components/panel';
import Clientes from './components/clientes';
import Busqueda from './components/busqueda';

import {square} from 'app-mf-javascript'

export default function Root(props){

    console.log('respuesta desde app-mf-javascript',square(9));

    return (
        <BrowserRouter>
        <Routes>
            <Route path= '/crm' element={<Panel/>}>
            </Route>
            <Route path= '/crm/clientes' element={<Clientes/>}>
            </Route>
            <Route path= '/crm/buscar' element={<Busqueda/>}>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
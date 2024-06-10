import layout from "../public/layout.html"
import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(layout);

const aplications = constructApplications({
    routes,
    async loadApp ({name}){
        if(window[name]){
            return window[name]
        }else{
            throw Error (`No se encuentra la variable global 'window[${name}]'`)
        }
    }
})

const layoutEngine = constructLayoutEngine({
    routes,
    aplications
})

aplications.forEach(registerApplication)

start();
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

        try{
            return await System.import(name);

        }catch(error){
            console.log(`Error al cargar la app ${name}`, error)
        }

    }
})

const layoutEngine = constructLayoutEngine({
    routes,
    aplications
})

aplications.forEach(registerApplication)

start();
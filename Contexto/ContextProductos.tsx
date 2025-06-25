import { createContext } from "react";
import { Productos } from "../Modelos/Productos";

export const ContextProductos = createContext({
 ListaProducto: [] as Productos[],
 agregarProducto: (producto: Productos) => {},
 ListarProducto:()=>{},
 EliminarProducto: (id: number) => {},
});
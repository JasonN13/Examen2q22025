import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Plantilla } from '../Modelos/Pantilla'
import { Productos } from '../Modelos/Productos'
import { ContextProductos } from '../Contexto/ContextProductos';

export default function ProviderProductos({children}:Plantilla) {

    const [ListaProducto, setListaProductos] = React.useState<Productos[]>([]);

    async function ListarProducto() {
        const response = await fetch('http://localhost:3000/Productos');   

        const data = await response.json();

        setListaProductos(data);
    }

    async function agregarProducto(producto: Productos) {
try{
        const response = await fetch('http://localhost:3000/Productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json();
        setListaProductos(prev => [...prev, data]);
    }
    catch (error) {
        console.error('Error al agregar el producto:', error);
    }
    
    }
async function EliminarProducto(id: number) {
    try { 
        const response =  await fetch(`http://localhost:3000/Productos/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        setListaProductos(prev => prev.filter(producto => producto.id !== id));
    }
    catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
}

  return (
    <ContextProductos.Provider value={{ListaProducto, ListarProducto, agregarProducto,EliminarProducto}}>
      {children}
    </ContextProductos.Provider>
  )
}

export const useContextProductos=()=>{
    return useContext(ContextProductos);
}
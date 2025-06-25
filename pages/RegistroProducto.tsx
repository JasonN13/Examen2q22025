import { View, Text, FlatList, Image } from 'react-native'
import React, { use } from 'react'
import { Productos } from '../Modelos/Productos';

export default function Registro() {
  
  return (
    <View>
      <form>
        <input type="text" placeholder="Nombre del producto" required/>
        <Texttarea name="descripcion" placeholder="Descripción del producto" required></Texttarea>
        <input type="number" placeholder="Precio del producto" required/>
        
      
    </View>
  );
}
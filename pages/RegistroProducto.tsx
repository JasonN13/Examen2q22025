import { View, Text, FlatList, Image } from 'react-native'
import React, { use } from 'react'
import { Productos } from '../Modelos/Productos';

export default function Registro() {
  
  return (
    <View>
      <form>
        <input type="text" placeholder="Nombre del producto" required/>
        <Text name="descripcion" placeholder="Descripción del producto" required></Text>
        <input type="number" placeholder="Precio del producto" required/>
        <select name="categoria" required>
          <option value="">Seleccione estado</option>
    <option value="Disponible">Disponible</option>
    <option value="No disponible">No disponible</option>
  </select>
  <input type="text" name="categoria" placeholder="Categoría" required />

  <input type="url" name="url_fotografia" placeholder="URL de la Fotografía" />
</form>


      
    </View>
  );
}
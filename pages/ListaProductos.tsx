import { View, Text } from 'react-native'
import React from 'react'
import { useContextProductos } from '../Provider/ProviderProductos';

export default function ListaProductos() {
  const {ListaProducto} = useContextProductos();
  return (
    <View>
      <Text>Tareas</Text>
    </View>
  )
}
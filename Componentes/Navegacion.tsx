import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import ListaProductos from '../pages/ListaProductos';
import Registro from '../pages/RegistroProducto';


export default function Navegacion() {
    const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={Registro} />
      <Tab.Screen name="Productos" component={ListaProductos} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}
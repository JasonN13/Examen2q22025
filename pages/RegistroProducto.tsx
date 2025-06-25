import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useContextProductos } from '../Provider/ProviderProductos';
import { Productos } from '../Modelos/Productos';

export default function Registro() {
  const { agregarProducto } = useContextProductos();

  const [producto, setProducto] = useState<Productos>({
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    estado: 'Disponible',
    categoria: '',
    url_fotografia: ''
  });

  const handleChange = (field: keyof Productos, value: string) => {
    setProducto(prev => ({
      ...prev,
      [field]: field === 'precio' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async () => {
    if (!producto.nombre || !producto.descripcion || !producto.categoria) {
      Alert.alert('Campos requeridos', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    await agregarProducto(producto);
    Alert.alert('Éxito', 'Producto registrado con éxito');

    setProducto({
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      estado: 'Disponible',
      categoria: '',
      url_fotografia: ''
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={producto.nombre}
        onChangeText={(text) => handleChange('nombre', text)}
        placeholder="Nombre del producto"
      />

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={producto.descripcion}
        onChangeText={(text) => handleChange('descripcion', text)}
        placeholder="Descripción del producto"
      />

      <Text style={styles.label}>Precio</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={producto.precio.toString()}
        onChangeText={(text) => handleChange('precio', text)}
        placeholder="Precio"
      />

      <Text style={styles.label}>Estado</Text>
      <TextInput
        style={styles.input}
        value={producto.estado}
        onChangeText={(text) => handleChange('estado', text)}
        placeholder="Disponible / No disponible"
      />

      <Text style={styles.label}>Categoría</Text>
      <TextInput
        style={styles.input}
        value={producto.categoria}
        onChangeText={(text) => handleChange('categoria', text)}
        placeholder="Categoría"
      />

      <Text style={styles.label}>URL Fotografía</Text>
      <TextInput
        style={styles.input}
        value={producto.url_fotografia}
        onChangeText={(text) => handleChange('url_fotografia', text)}
        placeholder="https://imagen.jpg"
      />

      <Button title="Registrar Producto" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  }
});

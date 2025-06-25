import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Componentes/Navegacion';
import ProviderProductos from './Provider/ProviderProductos';


export default function App() {
  return (
    <ProviderProductos>
      <Navegacion />
    </ProviderProductos>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

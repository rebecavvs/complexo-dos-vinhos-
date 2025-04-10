import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const vinhos = [
  {
    nome: 'Vinho Tinto Chileno',
    ano: '2018',
    tipo: 'Cabernet Sauvignon',
    cor: 'Vermelho Escuro',
    imagem: require('./assets/images/vinho1.jpg'),
  },
  {
    nome: 'Vinho Branco Italiano',
    ano: '2020',
    tipo: 'Chardonnay',
    cor: 'Amarelo Claro',
    imagem: require('./assets/images/vinho2.jpg'),
  },
  {
    nome: 'Espumante Rosé',
    ano: '2021',
    tipo: 'Brut Rosé',
    cor: 'Rosé',
    imagem: require('./assets/images/vinho3.jpg'),
  },
  {
    nome: 'Vinho Português',
    ano: '2017',
    tipo: 'Douro',
    cor: 'Rubi',
    imagem: require('./assets/images/vinho4.jpg'),
  },
  {
    nome: 'Vinho Argentino',
    ano: '2019',
    tipo: 'Malbec',
    cor: 'Vermelho Intenso',
    imagem: require('./assets/images/vinho5.jpg'),
  },
  {
    nome: 'Vinho Rosé Francês',
    ano: '2022',
    tipo: 'Grenache',
    cor: 'Rosado Claro',
    imagem: require('./assets/images/vinho6.jpg'),
  },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Complexo do Vinho</Text>
      {vinhos.map((vinho, index) => (
        <View key={index} style={styles.card}>
          <Image source={vinho.imagem} style={styles.imagem} />
          <View style={styles.info}>
            <Text style={styles.nome}>{vinho.nome}</Text>
            <Text style={styles.descricao}>Ano: {vinho.ano}</Text>
            <Text style={styles.descricao}>Tipo: {vinho.tipo}</Text>
            <Text style={styles.descricao}>Cor: {vinho.cor}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff0f5',
  },
  titulo: {
    fontSize: 26,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginVertical: 20,
    color: '#8B0000',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  info: {
    padding: 12,
  },
  nome: {
    fontSize: 18,
    fontFamily: 'Poppins',
    marginBottom: 4,
    color: '#4B0082',
  },
  descricao: {
    fontSize: 14,
    fontFamily: 'Poppins',
    color: '#444',
  },
});

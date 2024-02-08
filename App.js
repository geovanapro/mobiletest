import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containera}>Amor leal de cachorros </Text>
      <div style={styles.abc}><Text>O amor por cachorros transcende o simples apego a animais de estimação; é uma conexão profunda e genuína que se manifesta na lealdade inabalável e nas qualidades incríveis desses seres encantadores.
      Cachorros são mais do que simples companheiros; são leais aliados que iluminam nossos dias com alegria e afeto. Sua devoção incondicional cria laços que resistem ao teste do tempo. Seja expressando felicidade com abanos de cauda ou oferecendo consolo silencioso em momentos difíceis, a lealdade dos cachorros é uma fonte constante de inspiração. Em suma, o amor por cachorros é uma experiência transformadora. Sua lealdade e incrível capacidade de se conectar conosco elevam esses animais à posição especial de amigos inigualáveis. Aqueles que compartilham suas vidas com cachorros testemunham diariamente o extraordinário presente que esses seres peludos representam, tornando o amor por cachorros uma jornada de descoberta contínua e gratidão sincera.
       </Text> </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  abc: {
  alignItems: 'center',
  border: '1px solid red',
  backgroundColor: '#ff3',
  fontSize: '90px',
  maxWidth: '1000px'
  },
  containera: {
   fontSize: '100px',
   }
  });

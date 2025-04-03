import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() { 
  const [metros, setMetros] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style= {styles.title}>
          Conversor de Distâncias 
        </Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput styles={styles.input} placeholder="Digite a distância em metros..."  keyboardType='numeric' />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleArea:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#8888',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 6,
    height: '20%',
    width:'100%', 
  },

  title:{
    fontSize: 30,
    color: '#000',
    fontWeight: 600,
    textAlign: 'center',
  },

  inputArea:{
    alignSelf: 'center',
    margintop: 40,
  },

  input:{
    borderWidth: 3,
    borderColor: '#000',
    width: '70%',
    fontSize: 10,
    borderRadius: 6,
  }


});

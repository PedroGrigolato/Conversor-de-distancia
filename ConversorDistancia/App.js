import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';


export default function App() { 
  const [metros, setMetros] = useState(null);
  const [km, setKm] = useState(null);
  const [mensagem, setMensagem] = useState (null);
  function calcularMetros() {
    setKm (metros / 1000);
  }

  function mensagemMetros() {
    if (metros != null)

    {
      calcularMetros ();
      setMensagem ("Seu valor em km é:" );
    }
}
    
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style= {styles.title}>
          Conversor de Distâncias 
        </Text>
      </View>
      <View style={styles.inputArea}>

        <TextInput style={styles.input} placeholder="Digite a distância em metros..."  keyboardType='numeric' onChangeText={setMetros} />
        <TouchableOpacity style={styles.button} onPress ={mensagemMetros}>
          <Text style ={styles.textbutton}>
            Calcular
          </Text>  
        </TouchableOpacity> 
      </View>
      <View style = {styles.kmArea}>
        <Text style = {styles.mensagem}>
          {mensagem}
        </Text>
        <Text style = {styles.km}>
          {km}
        </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    width: '100%',
   
  },

  input:{
    borderWidth: 3,
    borderColor: '#000',
    width: '70%',
    fontSize: 10,
    borderRadius: 6,
    marginTop: 35,
    paddingHorizontal: '15%',
  },

  button:{
    borderWidth: 3,
    borderColor: '#0000',
    backgroundColor: '#f2c4',
   
   
  },

  kmArea:{
    justifyContent: 'center',
    alignItems: 'center',            
  }

});

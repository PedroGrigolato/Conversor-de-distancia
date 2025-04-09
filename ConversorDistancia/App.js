import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() { 
  const [metros, setMetros] = useState(null);
  const [km, setKm] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  function calcularMetros() {
    setKm((metros / 1000).toFixed(2)); // Formatando para 2 casas decimais
  }

  function mensagemMetros() {
    if (metros != null) {
      calcularMetros();
      setMensagem("Seu valor em km é:");
    }
  }
    
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          Conversor de Distâncias
        </Text>
      </View>
      
      <View style={styles.inputArea}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite a distância em metros..." 
          placeholderTextColor="#999"
          keyboardType='numeric' 
          onChangeText={setMetros}
        />
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={mensagemMetros}
          activeOpacity={0.7}
        >
          <Text style={styles.textButton}>
            Calcular
          </Text>  
        </TouchableOpacity> 
      </View>
      
      <View style={styles.kmArea}>
        <Text style={styles.mensagem}>
          {mensagem}
        </Text>
        <Text style={styles.km}>
          {km}
        </Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 0,
  },
  
  titleArea: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4361ee',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: '25%',
    width: '100%',
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    marginTop: 15,
  },
  
  inputArea: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 30,
  },
  
  input: {
    borderWidth: 2,
    borderColor: '#4361ee',
    width: '85%',
    fontSize: 18,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 3,
    color: '#333',
  },
  
  button: {
    width: '85%',
    backgroundColor: '#4361ee',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#4361ee',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  
  kmArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#edf2fb',
    padding: 25,
    borderRadius: 15,
    width: '85%',
    alignSelf: 'center',
    elevation: 3,
  },
  
  mensagem: {
    fontSize: 18,
    color: '#4361ee',
    marginBottom: 10,
    fontWeight: '600',
  },
  
  km: {
    fontSize: 36,
    color: '#3a0ca3',
    fontWeight: 'bold',
  }
});
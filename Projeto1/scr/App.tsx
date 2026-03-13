import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { IMCResult } from './components/IMCResult';
import { calcularIMC } from './feat/calcularIMC';

type IMC = {
  peso: number;
  altura: number;
  calculo: number;
}

export function App() {
  const [imc, setIMC] = useState<IMC>({
    peso: 0,
    altura: 0,
    calculo: 0
  });

  function handleChangeTextIMC([key]: [keyof IMC], value: string) {
    setIMC((currentState) => ({
      ...currentState,
      [key]: Number(value)
    }))
  }

  function handleCalculateIMC() {
    if (imc.peso === 0 || imc.altura === 0) return;
    const imcCalculado = calcularIMC(imc.peso, imc.altura);
    handleChangeTextIMC(['calculo'], String(imcCalculado))
  }

  useEffect(() => {
    handleCalculateIMC()
  }, [imc.altura, imc.peso])

  useEffect(() => {
    alert('Bem-vindo ao calculador de IMC!')
    return () => {
      alert('Obrigado por usar o calculador de IMC!')
    }
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text>Peso: {imc.peso}</Text>
        <TextInput
          placeholder="Digite seu peso"
          keyboardType="numeric"
          style={styles.inputText}
          onChangeText={(text: string) => handleChangeTextIMC(['peso'], text)}
        />
      </View>
      <View>
        <Text>Altura: {imc.altura}</Text>
        <TextInput
          placeholder="Digite sua altura"
          keyboardType="numeric"
          style={styles.inputText}
          onChangeText={(text: string) => handleChangeTextIMC(['altura'], text)}
        />
      </View>

      <View style={{
        marginBottom: 16,
        width: 300,
      }}>
        <Text>Seu IMC é: {imc.calculo.toFixed(2)}</Text>
        <IMCResult imc={imc.calculo} />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonContainer}
        onPress={handleCalculateIMC}>
        <Text style={styles.buttonText}>
          Calcular IMC
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#263e85',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#bec2d0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: 300,
  },
});

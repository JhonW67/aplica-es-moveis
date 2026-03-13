import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IMCResultProps {
  imc: number;
}

type ResultState = {
  result: string
  color: string
}

export function IMCResult({ imc }: IMCResultProps) {
  const [result, setResult] = useState<ResultState>({
    result: 'Não Calculado',
    color: '#cacaca'
  })

  function getIMCResult(): void {
    if (imc < 18.5) {
      setResult((c) => ({ result: 'Abaixo do peso', color: '#f1c40f' }));
      return
    }
    if (18.5 <= imc && imc < 25) {
      setResult((c) => ({ result: 'Peso normal', color: '#27ae60' }));
      return
    }
    if (25 <= imc && imc < 30) {
      setResult((c) => ({ result: 'Sobrepeso', color: '#f39c12' }));
      return
    }
    if (30 <= imc && imc < 35) {
      setResult((c) => ({ result: 'Obesidade grau I', color: '#e67e22' }));
      return
    }
    if (35 <= imc && imc < 40) {
      setResult((c) => ({ result: 'Obesidade grau II', color: '#c0392b' }));
      return
    }
    setResult((c) => ({ result: 'Obesidade grau III', color: '#922b2b' }));
  }

  useEffect(() => {
    getIMCResult()
  }, [imc])

  return (
    <View style={{
      ...styles.container,
      backgroundColor: result.color
    }}>
      <Text style={styles.textDefault}>{result.result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    padding: 16,
    borderRadius: 8,
    marginTop: 12
  },
  textDefault: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

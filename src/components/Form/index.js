import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
import ResultadoIMC from "./ResultadoIMC/";
import styles from "./styles"

export default function Form() {
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [msg, setMsg] = useState("Preencha os campos altura e peso");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function validaImcValues(){
        if(altura != null && peso != null){
            setMsg("IMC: ")
            setPeso(null)
            setAltura(null)
            SetTextButton("Novo Calculo")
        } else {
            setImc(null)
            setTextButton("Calcular")
            setMsg("Preencha os valores de altura e peso:")
        }
    }

    function calculaImc() {
        validaImcValues();
        return setImc((peso/(altura*altura)).toFixed(2))
    }

    return (
        <View style={styles.boxTitle}>
            <View>
                <Text style={styles.text}>Digite sua Altura:</Text>
                <TextInput
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex: 1.77"
                    keyboardType="numeric"
                />
                <Text>Digite seu Peso:</Text>
                <TextInput
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex: 83.5"
                    keyboardType="numeric"
                />
                <Button 
                    title={textButton} 
                    onPress={() => calculaImc()} 
                />
            </View>
            <ResultadoIMC 
                    mensagemResultado={msg} 
                    valorResultado={imc}
                />
        </View>
    );
}

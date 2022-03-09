import React from 'react';
import { View, Text } from 'react-native';


// definir a funcao para demonstrar mensagem e resultado
// receber o objeto com 2 props
export default function ResultadoIMC(resultado) {
    return (
        <View>
            <Text>{resultado.mensagemResultado}</Text>
            <Text>{resultado.valorResultado}</Text>
        </View>
    )
}

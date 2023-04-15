import React, { Component } from 'react';
import { View, Text, Image, Card} from 'react-native';


export default function App(){
    let nome = 'Raphael Reis';
    let img = 'https://static.dicionariodesimbolos.com.br/upload/dc/6a/simbolo-do-batman-1_xl.jpeg';

    let dadosPessoais = '28 Anos, litoral SP';

    let formacao = 'Engenheiro Eletrônica, Analise e Desenvolvimento de Sistemas ';
    let experiencia = 'PHP, Java, C++, C, Kotlin, Assembly, Vue, React ';
    let projetos = 'Loading...';


    return(
      <View>
        <Text style={{color: 'Black', fontSize: 25, margin: 15, alignSelf: 'center' }}>
          APP | meu Perfil
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, alignSelf: 'center'}}
        />

        <Text style={{ fontSize: 20, color: '#444', margin: 10 }}>{nome}, {dadosPessoais}</Text>
        <Text style={{ fontSize: 18, color: '#444', margin: 5 }}>Formação: {formacao}</Text>
        <Text style={{ fontSize: 18, color: '#444', margin: 5 }}>Experiencia: {experiencia}</Text>
        <Text style={{ fontSize: 18, color: '#444', margin: 5 }}>Projetos: {projetos}</Text>
      </View>
    )
  }



import React, { useState } from 'react';
import {Wrapper, Titulo, Botao, TextoBotao, Image, Input} from './styles'
import LogoTelaLogin from '../../assets/image/LogoPokemon.png'


export default function Login({ navigation }){

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  return (
    <Wrapper>

      <Image source={LogoTelaLogin} resizeMode="contain"/>

      <Titulo>Comerce a coletar pokémons!</Titulo>
      <Titulo>{email}</Titulo>
      <Titulo>{senha}</Titulo>

      <Input 
        placeholder='Email' 
        onChangeText={value => setEmail(value)}
        value={email}
      />
      
      <Input 
        placeholder='Senha' 
        onChangeText={value => setSenha(value)} 
        secureTextEntry={true} 
        value={senha}
      />


      <Botao>
        <TextoBotao>Entrar</TextoBotao>
      </Botao>

    </Wrapper>
  )
}


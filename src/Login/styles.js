import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    margin: 0 16px;
    background: #fff;
    flex: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const Titulo = styled.Text`
    font-size: 22px;
    color: #000;
    margin-bottom: 10px;
`;

export const Botao = styled.TouchableOpacity`
    background: #ffcb05;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 6px 0;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
`;

export const TextoBotao = styled.Text`
    font-size: 22px;
    color: #000;
`;

export const Image = styled.Image`
    width: 90%;
    height: 4rem;
    margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  border: 1px solid rgba(0,0,0,0.1);
  background: #fff;
  margin: 6px 0;
  padding: 12px;
  border-radius: 5px;
`;
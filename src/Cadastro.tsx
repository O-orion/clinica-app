import { VStack, Image, Box } from 'native-base'
import  Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { FormInput } from './components/FormInput';
import { ButtonComponent } from './components/ButtonComponent';
import { useState } from 'react';

export default function Cadastro() {

    const [numeroSecao, setNumeroSecao] = useState(0)
    const secoes = [
        {
            id: 1,
            titulo: 'Insira alguns dados básicos',
            entradaTexto: [
                {
                    id: 1,
                    label: 'Nome',
                    placeholder: 'Digite seu nome completo'
                },
                {
                    id: 2,
                    label: 'Senha',
                    placeholder: 'Insira sua senha'
                },
                
            ]
        },
        {
            id: 2,
            titulo: 'Agora, mas alguns dados sobre você',
            entradaTexto: [
                {  
                    id: 1,
                    labe: 'CEP',
                    placeholder: 'Informe seu CEP'
                }
            ]
        }
    ]

    function avancarSecao() {
        if(numeroSecao < secoes.length -1) {
            setNumeroSecao(numeroSecao+1)
        }
    }

    function voltarSecao() {
        if (numeroSecao > 0) {
            setNumeroSecao(numeroSecao-1)
        }
    }

    return  (
        <VStack flex={1} alignItems="center" justifyContent="center" p={5} >
        <Image source={Logo} alt='Logo da Volt'></Image>
        <Titulo>
            {
                secoes[numeroSecao].titulo
            }
        </Titulo>
  
        <Box>
            {
                secoes[numeroSecao].entradaTexto.map(entrada => {
                    return <FormInput key={entrada.id} label={entrada.label} placeholder={entrada.placeholder} ></FormInput>
                })
            }
        </Box>
  
        <ButtonComponent  onPress={avancarSecao} texto='Avançar' w="100%" bgColor="blue.800" mt={10} borderRadius="lg" />
        <ButtonComponent  onPress={voltarSecao} texto='Voltar' w="100%" bgColor="gray.400" mt={4} borderRadius="lg" />
  
      </VStack>
    )
}
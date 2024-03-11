import { Text, Image, Box, Checkbox, ScrollView } from 'native-base'
import  Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { FormInput } from './components/FormInput';
import { ButtonComponent } from './components/ButtonComponent';
import { useState } from 'react';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

    const [numeroSecao, setNumeroSecao] = useState(0)

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
        <ScrollView flex={1}  p={5} >
        <Image alignSelf='center' source={Logo} alt='Logo da Volt'></Image>
        <Titulo>
            {
                secoes[numeroSecao].titulo
            }
        </Titulo>

        <Box>
            { secoes[numeroSecao]?.checkbox.length != 0  &&
                <Text color="blue.800"  fontWeight="bold" fontSize="md" mt="2" mb="2">
                    Selecione o Plano:
                </Text>

            }
            {
                secoes[numeroSecao]?.checkbox.map(checkbox => {
                    return <Checkbox key={checkbox.id} value={checkbox.value} >
                        {checkbox.value}
                    </Checkbox>
                })
            }
        </Box>
  
        <Box>

            {
                secoes[numeroSecao]?.entradaTexto.map(entrada => {
                    return <FormInput key={entrada.id} label={entrada.label} placeholder={entrada.placeholder} ></FormInput>
                })
            }

        </Box>

        { numeroSecao > 0 &&
        <ButtonComponent  onPress={voltarSecao}  h={50} texto='Voltar' w="100%" bgColor="gray.400" mt={4} borderRadius="lg" />
        }
        <ButtonComponent  onPress={avancarSecao} h={50} texto='Avançar' w="100%" bgColor="blue.800" mt={7} mb={20} borderRadius="lg" />
  
      </ScrollView>
    )
}
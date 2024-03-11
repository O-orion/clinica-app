import { VStack, Image, Text, Box, FormControl, Input, Link, Button } from 'native-base'
import { TouchableOpacity } from 'react-native';
import  Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo';
import { FormInput } from './components/FormInput';
import { ButtonComponent } from './components/ButtonComponent';

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} >
      <Image source={Logo} alt='Logo da Volt'></Image>
      <Titulo>
          Faça o seu login
      </Titulo>

      <Box>
        <FormInput label='Email' placeholder='Insira seu email' />
        <FormInput label='Senha' placeholder='Insira sua senha'  />
      </Box>

      <ButtonComponent texto='ENTRAR' h={50} w="100%" bgColor="blue.800" mt={8} borderRadius="lg" />

      <Link mt={1} href='http://www.google.com'>
        Esqueceu sua senha?
      </Link>

      <Box mt={8} width="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500" ml={1} >
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


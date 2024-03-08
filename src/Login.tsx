import { VStack, Image, Text, Box, FormControl, Input, Link, Button } from 'native-base'
import { TouchableOpacity } from 'react-native';
import  Logo from './assets/Logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} >
      <Image source={Logo} alt='Logo da Volt'></Image>
      <Text fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5}>
        Faça login em sua conta
      </Text>

      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input shadow={3} placeholder='Insira seu email' size='lg' w="100%" borderRadius="lg" bgColor='gray.100'></Input>
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input shadow={3} placeholder='Insira sua senha' size='lg' w="100%" borderRadius="lg" bgColor='gray.100'></Input>
        </FormControl>
      </Box>
      <Button w="100%" bgColor="blue.800" mt={10} borderRadius="lg" >Entrar</Button>

      <Link href='http://www.google.com'>
        Esqueceu sua senha?
      </Link>

      <Box width="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500" ml={1}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}


import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../components/Titulo";

export default function Perfil() {
    return (
        <ScrollView flex={1}  >
            <VStack flex={1} alignItems='center' p={5} >
                <Titulo color="blue.500" >Meu Perfil</Titulo>
                <Avatar size='xl' mt={4} source={{ uri: 'https://avatars.githubusercontent.com/u/78035167?v=4' }} />
                
                <Titulo color="blue.500" >Informações Pessoais</Titulo>
                <Titulo fontSize='lg' mb={1} >Lucas Viana Torres</Titulo>
                <Text>02/04/2000</Text>
                <Text>Manaus/AM</Text>
                <Divider mt={5} />

                <Titulo color="blue.500" mb={1} >Histórico Médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}

import { VStack, Avatar, Text } from "native-base";
import { ButtonComponent } from "./ButtonComponent";

interface BuscaProps {
    name: string,
    foto: string,
    profissao: string
}

export function CardBusca({name, foto, profissao}: BuscaProps) {
    return (
        <VStack mt={5} bg='white' p={5}>
            <VStack  flexDir='row'>
                <Avatar size='lg'  source={{ uri:  foto }} />
                <VStack ml={2} alignContent='center' alignItems='center'>
                    <Text fontSize='md' fontWeight='bold' color='gray.500'>{ name }</Text>
                    <Text color='gray.500'>{ profissao }</Text>
                </VStack>

            </VStack>
            <ButtonComponent h={10} mt={2} borderRadius={5} texto="Agendar Consulta"></ButtonComponent>
        </VStack>
    )
}
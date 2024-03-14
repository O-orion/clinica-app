import  { Text, Avatar, VStack } from 'native-base'
import { ButtonComponent } from './ButtonComponent'

interface CardProps {
    name: string;
    foto: string, 
    especialidade: string,
    data?: string,
    atendido?: boolean,
    agendado?: boolean
}

export function CardComponent({ name, foto, especialidade, data, atendido, agendado }: CardProps) {
    return (
        <VStack w='100%' bg={ atendido ? 'blue.100' : 'white' } p='5' borderRadius='lg' shadow='2'>
            <VStack flexDir='row' >
                <Avatar size='lg'  source={{ uri: foto }} />
                <VStack pl={4}>
                    <Text fontSize='md' fontWeight='bold' >{name}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>

            <ButtonComponent mt={4} h={10} texto={ agendado ? 'Cancelar Consulta' : 'Agendar Consulta' }></ButtonComponent>
        </VStack>
    )
}


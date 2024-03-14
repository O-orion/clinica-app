import { VStack, Text, Card, Image, ScrollView, Box, FlatList, Divider } from "native-base";
import  Logo from '../assets/Logo.png'
import { Titulo } from "../components/Titulo";
import { FormInput } from "../components/FormInput";
import { ButtonComponent } from "../components/ButtonComponent";

export default function Home() {
    const depoimentos = [
        {
            id: 1,
            name: 'Júlio',
            depoimento: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio',
            idade: 40,
            localidade: 'São Paulo/SP'
        },
        {
            id: 2,
            name: 'Júlio',
            depoimento: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            idade: 40,
            localidade: 'São Paulo/SP'
        },
        {
            id: 3,
            name: 'Júlio',
            depoimento: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.',
            localidade: 'São Paulo/SP'
        }
    ]

    return (
        <ScrollView p={4} >
            <Box >
             <Image alignSelf='center' source={Logo} alt='Logo da Volt'></Image>
             <Text fontSize={24} mt={5} fontWeight="bold" color="blue.400">Boas-Vindas!</Text>
            </Box>

            <Box mt={4} shadow="1" p={2} alignItems='center' alignContent='center'>
                <FormInput  mt="0" label=""  placeholder="Informe a especialidade" ></FormInput> 
                <FormInput mt="0" label=""  placeholder="Informe sua localização" ></FormInput> 
                <ButtonComponent w='100%' marginTop={4} marginBottom={1} h={10} texto="Buscar" ></ButtonComponent>
            </Box>

            <Titulo mb={2}>Depoimentos</Titulo>

            { depoimentos.map((depoimento) => (
                <Box marginBottom={10} key={depoimento.id}>
                    <Text fontSize='16px' color='gray.300'  textAlign='justify'>
                       {depoimento.depoimento}
                    </Text>
                    <Text textAlign="center"  color="gray.500" fontSize="16" fontWeight='bold' >
                        {depoimento.name}, {depoimento.idade} anos, {depoimento.localidade}.
                    </Text>
                    <Divider mt={3}></Divider>
                </Box>
            ))}
           
        </ScrollView>
    )
}
import { VStack, Text, ScrollView, Box} from "native-base";
import { FormInput } from "../components/FormInput";
import { ButtonComponent } from "../components/ButtonComponent";
import { CardBusca } from "../components/CardBusca";


export default function Explorar() {
    return (
        <ScrollView p={5}>
            <Box p={5} bg='white'>
                <FormInput mt={0} label="" placeholder="Informe sua Especialidade"></FormInput>
                <FormInput mt={0} label="" placeholder="Informe sua Localidade"></FormInput>
                <ButtonComponent mt={4} h={10} texto="Buscar" ></ButtonComponent>
            </Box>

            <Text mt={4} textAlign="center" color="blue.500" fontSize="lg" fontWeight='bold'>Resultado da Busca</Text>
            <CardBusca name="Dra. Ana Lúcia" foto="https://avatars.githubusercontent.com/u/78035167?v=4" profissao="Angiologista"></CardBusca>
            <CardBusca name="Dra. Ana Lúcia" foto="https://avatars.githubusercontent.com/u/78035167?v=4" profissao="Angiologista"></CardBusca>
            <CardBusca name="Dra. Ana Lúcia" foto="https://avatars.githubusercontent.com/u/78035167?v=4" profissao="Angiologista"></CardBusca>
            <CardBusca name="Dra. Ana Lúcia" foto="https://avatars.githubusercontent.com/u/78035167?v=4" profissao="Angiologista"></CardBusca>
            <CardBusca name="Dra. Ana Lúcia" foto="https://avatars.githubusercontent.com/u/78035167?v=4" profissao="Angiologista"></CardBusca>
        </ScrollView>
    )
}

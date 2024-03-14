import { VStack, Text } from "native-base";
import { CardComponent } from "../components/CardComponent";

export default function Consultas() {
    return (
        <VStack p={5}>
            <CardComponent atendido={true} agendado={true} name="Dr. André" especialidade="Cardiologista" foto="'https://avatars.githubusercontent.com/u/78035167?v=4'" data="10/03/2023" ></CardComponent>
        </VStack>
    )
}
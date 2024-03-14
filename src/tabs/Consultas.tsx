import { VStack, Text, Divider, ScrollView } from "native-base";
import { CardComponent } from "../components/CardComponent";
import { Titulo } from "../components/Titulo";
import { ButtonComponent } from "../components/ButtonComponent";

export default function Consultas() {
    return (
        <ScrollView p={5}>
            <Titulo color='blue.500'  >Minhas Consultas</Titulo>
            <ButtonComponent mb={5} mt={5} h={10} texto="Agendar Nova Consulta" ></ButtonComponent>
           
            <Titulo fontSize="lg" alignSelf="flex-start" color='blue.500' >Próximas Consultas</Titulo>
            <CardComponent  agendado={true} name="Dr. André" especialidade="Cardiologista" foto="https://avatars.githubusercontent.com/u/78035167?v=4" data="10/03/2023" ></CardComponent>

            <Divider mt={5}></Divider>

            <Titulo fontSize="lg" alignSelf="flex-start" color='blue.500' >Consultas Passadas</Titulo>
            <CardComponent atendido={true} agendado={false} name="Dr. André" especialidade="Cardiologista" foto="https://avatars.githubusercontent.com/u/78035167?v=4" data="10/03/2023" ></CardComponent>
            <CardComponent atendido={true} agendado={false} name="Dr. André" especialidade="Cardiologista" foto="https://avatars.githubusercontent.com/u/78035167?v=4" data="10/03/2023" ></CardComponent>
            <CardComponent atendido={true} agendado={false} name="Dr. André" especialidade="Cardiologista" foto="https://avatars.githubusercontent.com/u/78035167?v=4" data="10/03/2023" ></CardComponent>
            <CardComponent atendido={true} agendado={false} name="Dr. André" especialidade="Cardiologista" foto="https://avatars.githubusercontent.com/u/78035167?v=4" data="10/03/2023" ></CardComponent>
            <CardComponent atendido={true} agendado={false} name="Dr. André" especialidade="Cardiologista" foto="https://avatars.githubusercontent.com/u/78035167?v=4" data="10/03/2023" ></CardComponent>
            <CardComponent atendido={true} agendado={false} name="Dr. André" especialidade="Cardiologista" foto='https://avatars.githubusercontent.com/u/78035167?v=4' data="10/03/2023" ></CardComponent>

            <Divider mt={5}></Divider>
        </ScrollView>
    )
}
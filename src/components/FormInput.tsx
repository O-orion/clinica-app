import { FormControl, ITextProps, Input } from "native-base";

interface DadosForm extends ITextProps {
    label: string,
    placeholder: string
}

export function FormInput({ label, placeholder, mt=3 }: DadosForm) {
    return (
        <FormControl mt={mt}>
            <FormControl.Label>{ label }</FormControl.Label>
            <Input shadow={3} placeholder={ placeholder } size='lg' w="100%" borderRadius="lg" bgColor='gray.100'></Input>
      </FormControl>
    )
}
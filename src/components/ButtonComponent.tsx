import { ITextProps } from "native-base";
import { Button } from 'native-base'

interface ButtonProps extends ITextProps {
    texto: string,
}

export function ButtonComponent ({ texto, ...styles }: ButtonProps) {
    return (
     <Button > {texto} </Button>
    )
}
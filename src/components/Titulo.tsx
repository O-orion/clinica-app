import { Text, ITextProps } from 'native-base'
import { ReactNode } from 'react'

interface TituloProps extends ITextProps {
    children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps) {
    return (
        <Text { ...rest } fontSize="2xl" fontWeight="bold" color="gray.500" textAlign="center" mt={5}>
            { children }
        </Text>
    )
}
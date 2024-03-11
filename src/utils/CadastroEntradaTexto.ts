const secoes = [
    {
        id: 1,
        titulo: 'Insira alguns dados básicos',
        entradaTexto: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label:'Email',
                placeholder: 'Insira seu endereço de email'
            },
            {
                id:3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha'
            },
            {
                id:4,
                label: 'Repita a senha',
                placeholder: 'Insira sua senha'
            },
            
        ],
        checkbox: []
    },
    {
        id: 2,
        titulo: 'Agora, mas alguns dados sobre você',
        entradaTexto: [
            {  
                id: 1,
                labe: 'CEP',
                placeholder: 'Informe seu CEP'
            },
            {  
                id: 2,
                labe: 'Endereço',
                placeholder: 'Insira seu endereço'
            },
            {  
                id: 3,
                labe: 'Numero',
                placeholder: 'Informe o número da sua residência'
            },
            {  
                id: 4,
                labe: 'Complemento',
                placeholder: 'Informe o complmento'
            },
            {  
                id: 5,
                labe: 'Telefone',
                placeholder: '(00) 00000-0000'
            },
        ],
        checkbox: []
    }, 
    {
        id: 3,
        titulo: 'Para finalizar, Quais são os seus planos ?',
        entradaTexto: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamerica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 2,
                value: 'Não possuo plano de saúde'
            },
        ]
    }
]

export { secoes }
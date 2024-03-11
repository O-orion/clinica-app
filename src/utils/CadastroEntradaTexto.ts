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
                label: 'Senha',
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
            }
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
            }
        ]
    }
]

export { secoes }